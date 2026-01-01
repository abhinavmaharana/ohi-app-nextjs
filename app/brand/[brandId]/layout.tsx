import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Stories - Ohi',
  description: 'View brand stories and hosts on Ohi',
}

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

