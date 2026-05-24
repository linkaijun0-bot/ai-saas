'use client'

import Navbar from '../components/navbar'
import { useRouter } from 'next/navigation'

export default function Pricing() {
  const router = useRouter()

  const handleCheckout = async (priceId: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-32 px-6">
        <h1 className="text-5xl font-bold text-center">Pricing</h1>
        <p className="mt-4 text-center text-zinc-400">Simple pricing for every business.</p>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pb-32">

          <div className="border border-white/10 rounded-2xl p-8">
            <h3 className="text-zinc-300">Starter</h3>
            <p className="text-4xl font-bold mt-2">29<span className="text-lg text-zinc-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-400">
              <li>Basic AI tools</li>
              <li>5,000 requests</li>
              <li>Email support</li>
            </ul>
            <button
              onClick={() => handleCheckout('price_1TaYn4RokpJSDJNbj7bj7P2U')}
              className="mt-6 w-full border border-white/20 rounded-full py-3 hover:bg-white/10 transition"
            >
              Get Started
            </button>
          </div>

          <div className="border border-white/30 bg-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-medium">Pro</h3>
              <span className="bg-white text-black text-xs px-3 py-1 rounded-full">Popular</span>
            </div>
            <p className="text-4xl font-bold mt-2">99<span className="text-lg text-zinc-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>Advanced AI</li>
              <li>50,000 requests</li>
              <li>API access</li>
              <li>Analytics</li>
            </ul>
            <button
              onClick={() => handleCheckout('price_1TaYF2RokpJSDJNbaokEYa6B')}
              className="mt-6 w-full bg-white text-black rounded-full py-3 font-medium hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <h3 className="text-zinc-300">Enterprise</h3>
            <p className="text-4xl font-bold mt-2">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-400">
              <li>Unlimited requests</li>
              <li>Dedicated AI</li>
              <li>24/7 support</li>
            </ul>
            <button
              onClick={() => router.push('/contact')}
              className="mt-6 w-full border border-white/20 rounded-full py-3 hover:bg-white/10 transition"
            >
              Contact Sales
            </button>
          </div>

        </div>
      </section>
    </main>
  )
}
