import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ohi Profile',
  description: 'View user profile on Ohi',
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

