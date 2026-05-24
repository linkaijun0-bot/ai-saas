'use client'

import { useState } from 'react'
import { createClient } from '../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  const handleSignUp = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email to confirm!')
    }
    setLoading(false)
  }

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-semibold text-center">Welcome back.</h1>
        <p className="mt-2 text-center text-zinc-400">Sign in to your account.</p>

        <div className="mt-10 space-y-4">
          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white/30 transition"
            />
          </div>

          {message && (
            <p className="text-sm text-zinc-400 text-center">{message}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-full bg-white py-3 text-black font-medium hover:scale-105 transition"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full rounded-full border border-white/20 py-3 hover:bg-white/10 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  )
}
