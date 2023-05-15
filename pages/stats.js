import PlayersChart from '@/js/components/PlayersChart'
import { ChakraProvider } from '@chakra-ui/react'

export default function Chart() {
    return (
        <div>
            <ChakraProvider>
                <PlayersChart />
            </ChakraProvider>
        </div>
    );
}
