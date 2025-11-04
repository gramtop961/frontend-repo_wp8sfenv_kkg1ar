import { motion } from 'framer-motion';
import { Calendar, BookOpen, MessageCircle, Target } from 'lucide-react';

const features = [
  {
    title: 'Shared Calendar',
    description:
      'Plan dates, anniversaries, and everyday moments with a calendar built for two. Stay in sync without the stress.',
    icon: Calendar,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Memory Journal',
    description:
      'Collect photos, notes, and highlights that tell your love story—beautifully organized and private by default.',
    icon: BookOpen,
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Relationship Prompts',
    description:
      'Thoughtful questions and playful prompts to spark deeper conversations and keep the spark alive.',
    icon: MessageCircle,
    color: 'from-amber-600 to-orange-700',
  },
  {
    title: 'Shared Goals',
    description:
      'Create gentle milestones together—travel plans, fitness streaks, or budgeting goals that bring you closer.',
    icon: Target,
    color: 'from-orange-600 to-amber-700',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#120a06] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Made for modern love</h2>
          <p className="mt-3 text-amber-100/85">
            Minimal, elegant, and deeply personal—everything you need to feel connected every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${f.color} p-3 text-white shadow-lg shadow-amber-800/20`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/85">{f.description}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
