import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Award, Calendar, BookOpen } from 'lucide-react'
import { supabase, getCurrentUser } from '../../lib/supabase'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [purchasedPdfs, setPurchasedPdfs] = useState([])
  const [testHistory, setTestHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    const currentUser = await getCurrentUser()
    setUser(currentUser)

    if (currentUser) {
      // Fetch purchased PDFs
      const { data: purchases } = await supabase
        .from('purchases')
        .select(`
          pdfs (*)
        `)
        .eq('user_id', currentUser.id)

      setPurchasedPdfs(purchases?.map(p => p.pdfs) || [])

      // Fetch test history
      const { data: attempts } = await supabase
        .from('test_attempts')
        .select(`
          *,
          mock_tests (title)
        `)
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false })

      setTestHistory(attempts || [])
    }

    setLoading(false)
  }

  const handleDownload = (pdf) => {
    // Implement download logic
    alert(`Downloading ${pdf.title}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please login to access dashboard
          </h2>
          <a
            href="/auth"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user.email}!
          </h1>
          <p className="text-xl text-gray-600">
            Track your learning progress and access your materials
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{purchasedPdfs.length}</p>
                <p className="text-gray-600">PDFs Purchased</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{testHistory.length}</p>
                <p className="text-gray-600">Tests Taken</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {testHistory.length > 0 
                    ? `${Math.max(...testHistory.map(t => t.score))}%`
                    : '0%'
                  }
                </p>
                <p className="text-gray-600">Best Score</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Purchased PDFs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your PDFs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedPdfs.map((pdf, index) => (
              <motion.div
                key={pdf.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {pdf.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pdf.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload(pdf)}
                    className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {purchasedPdfs.length === 0 && (
            <div className="text-center py-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No PDFs purchased yet.</p>
              <a
                href="/store"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Browse PDF Store
              </a>
            </div>
          )}
        </motion.div>

        {/* Test History */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test History</h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {testHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Test
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Correct Answers
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {testHistory.map((attempt, index) => (
                      <motion.tr
                        key={attempt.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {attempt.mock_tests?.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            attempt.score >= 80 
                              ? 'bg-green-100 text-green-800'
                              : attempt.score >= 60
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {attempt.score.toFixed(1)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {attempt.correct_answers}/{attempt.total_questions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(attempt.created_at).toLocaleDateString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">No test attempts yet.</p>
                <a
                  href="/tests"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Take a Mock Test
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}