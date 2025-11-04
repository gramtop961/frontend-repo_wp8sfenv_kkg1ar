import { motion } from 'framer-motion';
import { Shield, Lock, Mail } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#120a06] to-[#1a0f09] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-10 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built with love and trust</h2>
          <p className="mt-3 text-amber-100/85">
            CouplesBook.in exists to make relationships feel easy, intentional, and beautifully documented. Your space is yours—private by default, secure by design.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="inline-flex rounded-xl bg-white/10 p-3"><Shield className="h-6 w-6 text-amber-300" /></div>
            <h3 className="mt-3 text-lg font-semibold">Privacy first</h3>
            <p className="mt-2 text-sm text-amber-100/85">End-to-end intention: your memories and conversations belong only to you and your partner.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="inline-flex rounded-xl bg-white/10 p-3"><Lock className="h-6 w-6 text-amber-300" /></div>
            <h3 className="mt-3 text-lg font-semibold">Secure by design</h3>
            <p className="mt-2 text-sm text-amber-100/85">Modern encryption and careful access controls keep your shared world protected.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="inline-flex rounded-xl bg-white/10 p-3"><Mail className="h-6 w-6 text-amber-300" /></div>
            <h3 className="mt-3 text-lg font-semibold">Say hello</h3>
            <p className="mt-2 text-sm text-amber-100/85">Questions or ideas? We’d love to hear from you.</p>
            <a href="mailto:hello@couplesbook.in" className="mt-3 inline-flex text-amber-300 hover:text-amber-200">hello@couplesbook.in</a>
          </motion.div>
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;
              window.location.href = `mailto:hello@couplesbook.in?subject=CouplesBook%20Inquiry%20from%20${encodeURIComponent(
                name
              )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
            }}
            className="grid gap-4"
          >
            <div>
              <label className="block text-sm text-amber-100/85">Your name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50" placeholder="Aarav" />
            </div>
            <div>
              <label className="block text-sm text-amber-100/85">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm text-amber-100/85">Message</label>
              <textarea name="message" required rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50" placeholder="We'd love to..." />
            </div>
            <button type="submit" className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 rounded-full bg-gradient-to-r from-amber-600 via-orange-700 to-amber-800 px-6 py-3 shadow-lg shadow-amber-800/30">Send message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
