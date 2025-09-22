import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'CampusConnect',
  description: 'Buy, Sell, Connect – All Within Your Campus 🚀',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}