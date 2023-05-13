import { Inter } from 'next/font/google'
import MainPage from '@/js/components/MainPage'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  )
}
