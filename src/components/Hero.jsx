import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  const hearts = Array.from({ length: 8 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2a0f3f] via-[#1b0b2a] to-[#0f0618] text-white">
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Floating hearts */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {hearts.map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: -20, opacity: 0.6 }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              repeatType: 'mirror',
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
            className="absolute text-pink-300/50"
            style={{
              left: `${(i * 12 + 10) % 100}%`,
              top: `${(i * 9 + 20) % 100}%`,
            }}
          >
            <Heart className="h-4 w-4" />
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-pink-100 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-pink-300" />
            CouplesBook.in
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Build your story together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-purple-100/80"
          >
            A warm, modern space for two—sync your calendars, capture memories, and grow with thoughtful prompts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 px-6 py-3 shadow-lg shadow-pink-600/30">Start Your Journey</span>
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-purple-100 backdrop-blur-sm hover:bg-white/10"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
