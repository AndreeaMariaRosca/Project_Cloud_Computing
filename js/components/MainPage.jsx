import { Card, CardBody, Grid, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, Icon, Center, HStack, Flex, Spacer, CardFooter, Box } from '@chakra-ui/react'
import { MdOutlineNumbers, MdOutlinePersonPinCircle } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { BsFillFlagFill } from 'react-icons/bs';

import { useEffect, useState } from "react";
export default function MainPage() {
    const [players, setPlayers] = useState([]);
    let teamImg = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

    useEffect(() => {
        try {
            fetch('/api/players', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setPlayers(json.data));
        }
        catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div backgroundColor='blue'>
            <Heading as='h1' color='purple.700' fontSize='4xl' mb={12} mt='55px' textAlign="center">NBA Basketball Players</Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={2} overflowX="auto">
                {players.map(player => (
                    <Card maxW='sm' key={player._id} flexBasis="33.33%" p="4" position='relative' bg='gray.200' m={[2, 3]}>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Flex>
                                    <Text color='purple.800' fontSize='2xl' as='b'>
                                        {player.firstName} {player.lastName}
                                    </Text>
                                    <Spacer />
                                    <Text fontSize='xl'>
                                        <Icon as={MdOutlineNumbers} w='20px' h='20px' me='6px' color='#555AA1' />{player.number}
                                    </Text>
                                </Flex>
                                <Text fontSize='lg' lineHeight="1rem">{player.team} </Text>

                                <Divider borderColor='gray'/>

                                <Flex direction='row'>
                                    <Icon as={MdOutlinePersonPinCircle} w='20px' h='20px' me='6px' color='#555AA1' />

                                    <Text fontSize='lg'>{player.position}</Text>

                                    <Spacer />
                                    <Flex>
                                        <Text fontSize='lg'>{player.weight} </Text>
                                        <Icon as={GiWeight} w='20px' h='20px' me='6px' color='pink.600' />

                                    </Flex>

                                    <Spacer />

                                    <Icon as={BsFillFlagFill} w='20px' h='20px' me='6px' color='#555AA1' />

                                    <Text fontSize='lg'>{player.country}</Text>

                                </Flex>
                            </Stack>
                        </CardBody>

                    </Card>

                ))}


            </Grid>

        </div>

    )
}