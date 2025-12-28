import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ohi – Consumer Social Media',
  description: 'Post & Sell content of Brands you use everyday',
  icons: {
    icon: '/assets/img/logo.png',
  },
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

