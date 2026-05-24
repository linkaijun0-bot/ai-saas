import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
          AI That Thinks
          <br />
          <span className="text-zinc-400">Beyond.</span>
        </h1>
        <p className="mt-6 max-w-xl text-zinc-400 text-lg">
          The most powerful AI platform for modern businesses.
          Automate, predict, and scale with confidence.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="/pricing" className="rounded-full bg-white px-8 py-3 text-black font-medium hover:scale-105 transition">
            Get Started
          </a>
          <a href="/about" className="rounded-full border border-white/20 px-8 py-3 hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-center mb-16">What we build.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                AI
              </div>
              <h3 className="text-xl font-semibold">AI Automation</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Automate repetitive tasks and workflows with intelligent AI agents.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                DA
              </div>
              <h3 className="text-xl font-semibold">Predictive Analytics</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Make data-driven decisions with real-time AI predictions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                AS
              </div>
              <h3 className="text-xl font-semibold">AI Assistant</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Deploy custom AI assistants that understand your business.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>2025 AI Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
