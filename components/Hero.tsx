'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-16 relative bg-off-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-1/2 -right-1/5 w-[800px] h-[800px] rounded-full bg-surface-hover/60 animate-float" />
      <div className="absolute -bottom-1/3 -left-1/10 w-[600px] h-[600px] rounded-full bg-surface/50 animate-float-reverse" />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-navy text-white px-5 py-2 rounded-full text-sm font-medium mb-8">
        <span className="w-2 h-2 bg-aisg-red rounded-full animate-pulse" />
        Ex-AIAP/TeSA Designers Bootcamp
      </div>

      {/* Title */}
      <h1 className="relative z-10 font-space text-5xl md:text-7xl max-w-4xl mb-4">
        PASS AIAP Assessment
        <br />
        <span className="text-aisg-red relative inline-block animate-throb">
          2 Weeks Flat
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-aisg-red to-aisg-red-glow opacity-60 rounded-sm" />
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-xl text-slate max-w-xl mb-12">
        The only bootcamp built by designers who&apos;ve actually passed AIAP. No fluff. Just results.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center">
        <a
          href="#quiz"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-space font-semibold text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
          </svg>
          FREE 2-MIN QUIZ
        </a>
        <a
          href="https://paypal.me/SignalfireSG"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-navy border-2 border-border px-8 py-4 rounded-xl font-space font-semibold text-lg hover:border-aisg-red hover:text-aisg-red hover:-translate-y-0.5 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Pay SGD 1,499
        </a>
      </div>

      {/* Meta */}
      <div className="relative z-10 mt-12 flex flex-wrap gap-8 justify-center text-sm text-slate">
        <span><strong className="text-navy">May 20</strong> Cohort Start</span>
        <span><strong className="text-navy">10</strong> Spots Left</span>
        <span><strong className="text-navy">85%</strong> Pass Rate</span>
        <span><strong className="text-navy">SGD 1,499</strong> Investment</span>
      </div>
    </section>
  )
}
