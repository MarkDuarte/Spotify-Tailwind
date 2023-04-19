import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  )
}
