'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { createContext, useContext, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'BLOG',
//   description: 'BLOG BY ZOLOO',
// }

const SearchContext = createContext();

export default function RootLayout({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [tagValue, setTagValue] = useState(' ')


  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchContext.Provider
          value={{
            searchValue,
            setSearchValue,
            tagValue,
            setTagValue
          }}
        >
          <Container >
            <Navbar />
          </Container>
          {children}
          <Container bg={'bg-gray-50'} >
            <Footer />
          </Container>
        </SearchContext.Provider>
      </body>
    </html>
  )
}

export const useSearch = () => useContext(SearchContext);
