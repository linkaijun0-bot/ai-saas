import Navbar from './components/navbar'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
            AI That Thinks Beyond.
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Powerful intelligence designed for modern businesses.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 text-black hover:scale-105 transition">
              Start Free
            </button>
            <button className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">
            What we build.
          </h2>
          <p className="mt-4 text-center text-zinc-400">
            AI solutions that transform how businesses operate.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-3xl">??</div>
              <h3 className="mt-4 text-xl font-semibold">AI Automation</h3>
              <p className="mt-2 text-zinc-400">Automate repetitive tasks and workflows with intelligent AI agents.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-3xl">??</div>
              <h3 className="mt-4 text-xl font-semibold">Predictive Analytics</h3>
              <p className="mt-2 text-zinc-400">Make data-driven decisions with real-time AI predictions.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-3xl">??</div>
              <h3 className="mt-4 text-xl font-semibold">AI Assistant</h3>
              <p className="mt-2 text-zinc-400">Deploy custom AI assistants that understand your business.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center text-sm text-zinc-500">
          <p>2025 AI Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
