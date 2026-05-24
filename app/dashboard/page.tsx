'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (!user) return null

  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10 transition"
          >
            Sign Out
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400 text-sm">Logged in as</p>
          <p className="mt-1 text-lg">{user.email}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400 text-sm">AI Requests</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400 text-sm">Plan</p>
            <p className="mt-2 text-4xl font-bold">Free</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-400 text-sm">Status</p>
            <p className="mt-2 text-4xl font-bold">Active</p>
          </div>
        </div>
      </div>
    </main>
  )
}
