import type { Metadata } from 'next'
import { Inter , Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather',
  
}
export const poppins = Poppins({
  subsets: ['latin'],
  weight:['900','700','400','500' ,'600' ,'300']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
