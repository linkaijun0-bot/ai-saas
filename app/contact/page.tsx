import Navbar from '../components/navbar'

export default function Contact() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 px-6 pb-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-center">
            Get in touch.
          </h1>
          <p className="mt-4 text-center text-zinc-400">
            We would love to hear from you.
          </p>

          <div className="mt-16 space-y-4">

            <div>
              <label className="text-sm text-zinc-400">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Company</label>
              <input
                type="text"
                placeholder="Your company"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Message</label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition resize-none"
              />
            </div>

            <button className="w-full rounded-full bg-white py-4 text-black font-medium hover:scale-105 transition mt-4">
              Send Message
            </button>

          </div>

          <div className="mt-16 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-500">
            <p>hello@company.ai</p>
            <p>San Francisco, CA</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>

        </div>
      </section>
    </main>
  )
}
