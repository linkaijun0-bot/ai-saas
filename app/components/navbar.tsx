import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          AI
        </Link>
        <div className="flex items-center gap-8 text-sm text-zinc-300">
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/login" className="rounded-full bg-white px-5 py-2 text-black hover:scale-105 transition">
            Start Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
