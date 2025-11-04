import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const stories = [
  {
    quote:
      'We started using CouplesBook during long-distance. The prompts helped us talk about things we never knew how to bring up. It brought us closer.',
    name: 'Aisha & Kabir',
    tag: '2 years together',
  },
  {
    quote:
      'The shared calendar saved our weekends! Now we plan tiny rituals—coffee dates, movie nights—and never miss the little things.',
    name: 'Rhea & Arjun',
    tag: 'Engaged',
  },
  {
    quote:
      'Our memory journal feels like a living scrapbook. It’s private, beautiful, and so us.',
    name: 'Meera & Dev',
    tag: 'Married',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#0f0618] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-8 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Real couples, real stories</h2>
          <p className="mt-3 text-purple-100/80">Gentle inspiration from people building love, one day at a time.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.blockquote
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <Heart className="h-5 w-5 text-pink-400" />
              <p className="mt-4 text-purple-100/90">“{s.quote}”</p>
              <footer className="mt-6 text-sm text-pink-200">
                <span className="font-medium">{s.name}</span>
                <span className="text-white/30"> • </span>
                <span>{s.tag}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
