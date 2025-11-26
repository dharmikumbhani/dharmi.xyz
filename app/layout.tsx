import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dharmi Kumbhani',
  description: 'Personal website of Dharmi Kumbhani - Music lover, Sci-fi enthusiast, and builder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
