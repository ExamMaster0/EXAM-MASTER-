import Razorpay from 'razorpay'

export const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  const options = {
    amount: amount * 100, // amount in paise
    currency,
    receipt: `receipt_${Date.now()}`,
  }
  
  try {
    const order = await razorpay.orders.create(options)
    return order
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw error
  }
}