import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import AboutContact from './components/AboutContact';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0512] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0512]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-600 shadow-lg shadow-pink-600/30">
              <Heart className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-pink-100">CouplesBook.in</span>
          </a>
          <nav className="hidden gap-6 text-sm text-purple-100/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#stories" className="hover:text-white">Stories</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#about" className="rounded-full bg-white/5 px-4 py-2 text-sm text-pink-100 hover:bg-white/10">Join with your partner</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <section id="stories">
          <Testimonials />
        </section>
        <section id="contact">
          <AboutContact />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0512] py-10 text-purple-100/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} CouplesBook.in — Made with love.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-white">Privacy</a>
            <a href="#about" className="hover:text-white">Terms</a>
            <a href="mailto:hello@couplesbook.in" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
