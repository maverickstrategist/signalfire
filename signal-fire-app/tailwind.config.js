/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aisg-red': '#C41E3A',
        'aisg-red-light': '#E63950',
        'aisg-red-glow': '#FF6B7A',
        'navy': '#0A1628',
        'navy-mid': '#1A2B4A',
        'charcoal': '#2D3E50',
        'slate': '#4A5568',
        'off-white': '#F7F8FA',
        'surface': '#EDF0F4',
        'surface-hover': '#E2E6EC',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
