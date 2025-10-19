import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ShoppingCart, Check } from 'lucide-react'
import { supabase, getCurrentUser } from '../../lib/supabase'

export default function Store() {
  const [pdfs, setPdfs] = useState([])
  const [purchasedPdfs, setPurchasedPdfs] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const currentUser = await getCurrentUser()
    setUser(currentUser)

    // Fetch PDFs
    const { data: pdfsData } = await supabase
      .from('pdfs')
      .select('*')
      .order('created_at', { ascending: false })

    if (currentUser) {
      // Fetch user's purchased PDFs
      const { data: purchases } = await supabase
        .from('purchases')
        .select('pdf_id')
        .eq('user_id', currentUser.id)

      setPurchasedPdfs(purchases?.map(p => p.pdf_id) || [])
    }

    setPdfs(pdfsData || [])
    setLoading(false)
  }

  const handlePurchase = async (pdf) => {
    if (!user) {
      alert('Please login to purchase PDFs')
      window.location.href = '/auth'
      return
    }

    try {
      // Server-side API call to create order
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: pdf.price,
          currency: 'INR',
        }),
      })

      const order = await response.json()

      if (!order.id) {
        throw new Error('Failed to create order')
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'ExamMaster',
        description: pdf.title,
        order_id: order.id,
        handler: async function (response) {
          // Payment verification
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              pdf_id: pdf.id,
              user_id: user.id,
            }),
          })

          const result = await verifyResponse.json()

          if (result.success) {
            await supabase
              .from('purchases')
              .insert([
                {
                  user_id: user.id,
                  pdf_id: pdf.id,
                  amount: pdf.price,
                  payment_id: response.razorpay_payment_id,
                },
              ])

            loadData()
            alert('Purchase successful! PDF unlocked for download.')
          } else {
            alert('Payment verification failed. Please contact support.')
          }
        },
        prefill: {
          name: user.email,
          email: user.email,
        },
        theme: {
          color: '#4f46e5',
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    }
  }

  const handleDownload = (pdf) => {
    alert(`Downloading ${pdf.title}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PDF Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access premium study materials to boost your exam preparation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdfs.map((pdf, index) => {
            const isPurchased = purchasedPdfs.includes(pdf.id)

            return (
              <motion.div
                key={pdf.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pdf.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {pdf.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-indigo-600">
                      ₹{pdf.price}
                    </span>
                    {isPurchased && (
                      <span className="flex items-center space-x-1 text-green-600">
                        <Check size={16} />
                        <span className="text-sm font-medium">Purchased</span>
                      </span>
                    )}
                  </div>

                  {isPurchased ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(pdf)}
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      <Download size={20} />
                      <span>Download PDF</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePurchase(pdf)}
                      className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      <ShoppingCart size={20} />
                      <span>Buy Now</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {pdfs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No PDFs available at the moment.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
      }
