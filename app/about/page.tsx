import Navbar from '../components/navbar'

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            We build AI that feels human.
          </h1>
          <p className="mt-6 text-zinc-400 text-lg">
            Our mission is to make powerful AI accessible to every business.
          </p>
        </div>
      </section>

      <section className="mt-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border border-white/10 rounded-2xl p-8">
            <p className="text-5xl font-bold">50+</p>
            <p className="mt-2 text-zinc-400">Clients Worldwide</p>
          </div>
          <div className="border border-white/10 rounded-2xl p-8">
            <p className="text-5xl font-bold">12</p>
            <p className="mt-2 text-zinc-400">Countries</p>
          </div>
          <div className="border border-white/10 rounded-2xl p-8">
            <p className="text-5xl font-bold">99.9%</p>
            <p className="mt-2 text-zinc-400">Uptime</p>
          </div>
        </div>
      </section>

      <section className="mt-32 px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-center">Our Team</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl">
                ??
              </div>
              <h3 className="mt-4 text-lg font-semibold">Alex Chen</h3>
              <p className="mt-1 text-zinc-400 text-sm">Founder & CEO</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl">
                ??
              </div>
              <h3 className="mt-4 text-lg font-semibold">Sarah Kim</h3>
              <p className="mt-1 text-zinc-400 text-sm">CTO & AI Engineer</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl">
                ??
              </div>
              <h3 className="mt-4 text-lg font-semibold">Mike Wang</h3>
              <p className="mt-1 text-zinc-400 text-sm">Product Designer</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
