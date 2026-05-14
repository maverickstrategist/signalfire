'use client'

import { useEffect, useRef } from 'react'

const cards = [
  {
    num: '01',
    title: '42 Colab Notebooks',
    desc: 'Beginner to expert progression. Each notebook is a building block — from basic Python to advanced model architectures.',
    tag: 'Beginner → Expert',
  },
  {
    num: '02',
    title: 'Docker ML Pipelines',
    desc: 'Production-ready containerization. Learn to build, ship, and run ML models exactly like AIAP expects.',
    tag: 'Production Grade',
  },
  {
    num: '03',
    title: 'AIAP Mock Assessments',
    desc: 'Simulated tests with 85% predictive accuracy. If you pass our mock, you're ready for the real thing.',
    tag: '85% Pass Rate',
  },
  {
    num: '04',
    title: 'Interview Resume + Portfolio',
    desc: 'AIAP-specific resume templates and portfolio projects that interviewers actually want to see.',
    tag: 'Interview Ready',
  },
]

export default function WhatYouMaster() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.reveal-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal-card opacity-0 translate-y-8 transition-all duration-800">
        <h2 className="font-space text-4xl md:text-5xl mb-4">What You Master</h2>
        <p className="text-slate text-lg max-w-lg mx-auto">
          Everything you need to pass AIAP — built by people who&apos;ve done it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.num}
            className="reveal-card opacity-0 translate-y-8 transition-all duration-800 bg-white rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-charcoal font-space font-bold text-lg mb-6">
              {card.num}
            </div>
            <h3 className="font-space text-xl mb-2">{card.title}</h3>
            <p className="text-slate text-sm mb-4">{card.desc}</p>
            <span className="inline-block px-3 py-1 bg-surface rounded-full text-xs font-medium text-charcoal">
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
