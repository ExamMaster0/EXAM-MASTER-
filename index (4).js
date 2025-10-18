import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase, getCurrentUser } from '../../lib/supabase'

export default function MockTests() {
  const [tests, setTests] = useState([])
  const [currentTest, setCurrentTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTests()
  }, [])

  const loadTests = async () => {
    const { data } = await supabase
      .from('mock_tests')
      .select('*')
      .order('created_at', { ascending: false })

    setTests(data || [])
    setLoading(false)
  }

  const startTest = (test) => {
    setCurrentTest(test)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateScore()
    }
  }

  const prevQuestion = () => {
    setCurrentQuestion(prev => prev - 1)
  }

  const calculateScore = async () => {
    let correct = 0
    currentTest.questions.forEach((question, index) => {
      if (selectedAnswers[question.id] === question.correct_answer) {
        correct++
      }
    })

    const finalScore = (correct / currentTest.questions.length) * 100
    setScore(finalScore)
    setShowResults(true)

    // Save test attempt
    const user = await getCurrentUser()
    if (user) {
      await supabase
        .from('test_attempts')
        .insert([
          {
            user_id: user.id,
            test_id: currentTest.id,
            score: finalScore,
            total_questions: currentTest.questions.length,
            correct_answers: correct,
            answers: selectedAnswers,
          },
        ])
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (showResults && currentTest) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Test Completed!
            </h2>
            
            <div className="mb-8">
              <div className="text-6xl font-bold text-indigo-600 mb-2">
                {score.toFixed(1)}%
              </div>
              <div className="text-gray-600">
                {Math.round((score / 100) * currentTest.questions.length)} out of {currentTest.questions.length} correct
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentTest.questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg border-2 ${
                    selectedAnswers[question.id] === question.correct_answer
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <p className="font-semibold mb-2">Q{index + 1}: {question.question}</p>
                  <p className="text-sm">
                    Your answer: {question.options[selectedAnswers[question.id]]}
                  </p>
                  {selectedAnswers[question.id] !== question.correct_answer && (
                    <p className="text-sm text-green-600">
                      Correct: {question.options[question.correct_answer]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startTest(currentTest)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Retake Test
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }

  if (currentTest) {
    const question = currentTest.questions[currentQuestion]

    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestion + 1} of {currentTest.questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(((currentQuestion + 1) / currentTest.questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-indigo-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentQuestion + 1) / currentTest.questions.length) * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <motion.label
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedAnswers[question.id] === index
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={selectedAnswers[question.id] === index}
                    onChange={() => handleAnswerSelect(question.id, index)}
                    className="hidden"
                  />
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswers[question.id] === index
                      ? 'border-indigo-500 bg-indigo-500'
                      : 'border-gray-400'
                  }`}>
                    {selectedAnswers[question.id] === index && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </motion.label>
              ))}
            </div>

            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextQuestion}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                {currentQuestion === currentTest.questions.length - 1 ? 'Finish' : 'Next'}
              </motion.button>
            </div>
          </motion.div>
        </div>
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
            Mock Tests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice with realistic exam simulations and track your progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {test.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">
                    {test.questions?.length || 0} questions
                  </span>
                  <span className="text-sm text-gray-500">
                    {test.duration} minutes
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startTest(test)}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Start Test
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {tests.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No tests available at the moment.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}