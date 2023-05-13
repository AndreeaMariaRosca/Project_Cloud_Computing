import MainPage from '@/js/components/MainPage'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  )
}
