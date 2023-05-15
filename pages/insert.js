import InsertPage from "@/js/components/InsertPage";
import { ChakraProvider } from '@chakra-ui/react'

export default function Insert() {
    return (
        <ChakraProvider>
            <InsertPage />
        </ChakraProvider>
    )
}