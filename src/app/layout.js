import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaibhav Soni | Full Stack Developer',
  description: 'Full-stack engineering student with strong backend, cloud, and systems focus. Portfolio showcasing enterprise-grade projects and technical expertise.',
  keywords: 'Full Stack Developer, Backend Engineer, Cloud Computing, Next.js, Django, Flask, React, Python, JavaScript',
  authors: [{ name: 'Vaibhav Soni' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaibhavsoni.dev',
    title: 'Vaibhav Soni | Full Stack Developer',
    description: 'Full-stack engineering student with strong backend, cloud, and systems focus.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
