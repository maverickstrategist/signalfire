export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-8 text-center">
      <div className="font-space text-2xl font-bold mb-4">
        Signal<span className="text-aisg-red">Fire</span>
      </div>
      <div className="text-lg opacity-80 mb-8">outreach@signal-fire.us</div>
      <div className="flex gap-8 justify-center mb-12 flex-wrap">
        <a href="#quiz" className="text-white/60 hover:text-aisg-red-glow transition-colors">Free Quiz</a>
        <a href="https://paypal.me/SignalfireSG" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-aisg-red-glow transition-colors">Enroll Now</a>
        <a href="mailto:outreach@signal-fire.us" className="text-white/60 hover:text-aisg-red-glow transition-colors">Contact</a>
      </div>
      <div className="border-t border-white/10 pt-8 text-sm opacity-50">
        © 2026 Signal Fire. Built by ex-AIAP/TeSA designers in Singapore.
      </div>
    </footer>
  )
}
