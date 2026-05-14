'use client'

import { useState } from 'react'
import { quizData, calculateTier } from '@/lib/quiz'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [email, setEmail] = useState('')
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [tier, setTier] = useState<ReturnType<typeof calculateTier> | null>(null)
  const [loading, setLoading] = useState(false)

  const selectOption = (score: number) => {
    const newTotal = totalScore + score
    setTotalScore(newTotal)

    if (currentQuestion >= quizData.length - 1) {
      const resultTier = calculateTier(newTotal)
      setTier(resultTier)
      setShowEmailCapture(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const submitEmail = async () => {
    if (!email || !tier) return
    setLoading(true)

    try {
      const response = await fetch('/api/quiz-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          score: totalScore,
          displayScore: tier.displayScore,
          tier: tier.discountCode,
          discountCode: tier.discountCode,
          discountAmount: tier.discountAmount,
        }),
      })

      if (response.ok) {
        setShowEmailCapture(false)
        setShowResult(true)
      }
    } catch (error) {
      console.error('Submit failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quiz" className="py-24 px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-space text-4xl md:text-5xl mb-4">2-Minute Readiness Quiz</h2>
          <p className="text-slate text-lg">Find out if you&apos;re ready for AIAP + unlock a surprise discount.</p>
        </div>

        <div className="bg-off-white rounded-3xl p-8 md:p-12 border-2 border-border relative">
          {/* Top accent bar */}
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-aisg-red to-aisg-red-glow rounded-full" />

          {!showEmailCapture && !showResult && (
            <>
              {/* Progress */}
              <div className="flex gap-2 justify-center mb-8">
                {quizData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentQuestion ? 'w-6 bg-aisg-red' : 'w-2 bg-border'
                    }`}
                  />
                ))}
              </div>

              {/* Question */}
              <h3 className="font-space text-2xl md:text-3xl font-semibold mb-8">
                {quizData[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizData[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(option.score)}
                    className="p-5 bg-white border-2 border-border rounded-xl text-left hover:border-aisg-red hover:bg-[#FFF5F7] transition-all text-navy"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </>
          )}

          {showEmailCapture && tier && (
            <div className="animate-fade-in">
              <div className="text-6xl font-space font-bold text-gradient mb-4">
                {tier.displayScore}%
              </div>
              <p className="text-xl text-navy mb-6">{tier.message}</p>
              <div className="bg-gradient-to-r from-aisg-red to-aisg-red-light text-white px-8 py-4 rounded-xl font-space font-bold text-xl mb-6 inline-block animate-pulse">
                UNLOCKED: SGD {tier.discountAmount} OFF
              </div>
              <p className="text-slate mb-6">Enter your email to receive your discount code.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-border focus:border-aisg-red outline-none"
                />
                <button
                  onClick={submitEmail}
                  disabled={loading || !email}
                  className="bg-navy text-white px-6 py-3 rounded-xl font-space font-semibold hover:shadow-lg disabled:opacity-50 transition-all"
                >
                  {loading ? 'Sending...' : 'Get My Code'}
                </button>
              </div>
            </div>
          )}

          {showResult && tier && (
            <div className="animate-fade-in">
              <div className="text-6xl font-space font-bold text-gradient mb-4">
                {tier.displayScore}%
              </div>
              <p className="text-xl text-navy mb-6">{tier.message}</p>
              <div className="bg-gradient-to-r from-aisg-red to-aisg-red-light text-white px-8 py-4 rounded-xl font-space font-bold text-xl mb-4 inline-block">
                UNLOCKED: SGD {tier.discountAmount} OFF
              </div>
              <p className="text-slate mb-6">
                Use code <strong className="text-navy">{tier.discountCode}</strong> at checkout. Valid 48 hours.
              </p>
              <a
                href="https://paypal.me/SignalfireSG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy text-white px-8 py-4 rounded-xl font-space font-semibold text-lg hover:shadow-xl transition-all"
              >
                Claim Your Spot — {tier.payPrice}
              </a>
              <p className="mt-4 text-sm text-slate">Results + discount code also sent to {email}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
