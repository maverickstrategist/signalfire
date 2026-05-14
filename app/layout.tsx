import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PASS AIAP Assessment — 2 Weeks Flat | Signal Fire',
  description: 'The only bootcamp built by designers who've actually passed AIAP. 42 Colab notebooks, Docker ML pipelines, mock assessments with 85% pass rate.',
  keywords: ['AIAP', 'Singapore', 'AI apprenticeship', 'bootcamp', 'machine learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-inter bg-off-white text-navy antialiased">
        {children}
      </body>
    </html>
  )
}
