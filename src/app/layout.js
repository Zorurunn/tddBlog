import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BLOG',
  description: 'BLOG BY ZOLOO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container >
          <Navbar />
        </Container>
        {children}
        <Container bg={'bg-gray-50'} >
          <Footer />
        </Container>
      </body>
    </html>
  )
}
