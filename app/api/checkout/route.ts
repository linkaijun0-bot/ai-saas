import { stripe } from '../../lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { priceId } = await req.json()

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:3000/dashboard?success=true',
    cancel_url: 'http://localhost:3000/pricing',
  })

  return NextResponse.json({ url: session.url })
}
