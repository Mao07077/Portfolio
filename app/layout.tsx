import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Mike Anthony M. Oliva',
  description: 'Web Developer',
  keywords: ['web developer', 'full stack', 'javascript', 'python', 'react', 'next.js'],
  authors: [{ name: 'Mike Anthony M. Oliva' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
