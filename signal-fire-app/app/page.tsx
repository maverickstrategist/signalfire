import Hero from '@/components/Hero'
import WhatYouMaster from '@/components/WhatYouMaster'
import CohortBar from '@/components/CohortBar'
import Quiz from '@/components/Quiz'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatYouMaster />
      <CohortBar />
      <Quiz />
      <FAQ />
      <Footer />
    </main>
  )
}
