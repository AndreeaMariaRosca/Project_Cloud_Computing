import { Card, CardBody, Grid, Stack, Heading, Text, Divider, Button, Icon, HStack, Flex, Spacer, CardFooter, Link, VStack } from '@chakra-ui/react'
import { MdOutlineNumbers, MdOutlinePersonPinCircle } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { BsFillFlagFill } from 'react-icons/bs';

import { useEffect, useState } from "react";
export default function MainPage() {
    const [players, setPlayers] = useState([]);

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
    const deletePlayer = (event) => {
        event.preventDefault();
        const id = event.target.id;
        try {
            fetch(`/api/players?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setPlayers(players.filter(player => player._id !== id));
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Flex justifyContent="center" mb='30px'>
                <VStack>
                    <Heading as='h1' color='purple.700' fontSize='4xl' mt='35px' textAlign="center">NBA&apos;s Hub App</Heading>
                    <Text fontSize='3xl' mb={12} textAlign="center">Find info about your favourite NBA players!</Text>
                    <HStack>
                        <Link href='/insert'>
                            <Button colorScheme='purple' variant='outline'>
                                Add a new player
                            </Button>
                        </Link>
                        <Link href='/stats'>

                            <Button bg='pink.600' textColor='white' variant='solid'>
                                See some stats!
                            </Button>
                        </Link>
                    </HStack>
                </VStack>

            </Flex>

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


                            </Stack>
                        </CardBody>
                        <Divider borderColor='gray' />

                        <CardFooter>
                            <Flex direction='row'>
                                <HStack>
                                    <Icon as={MdOutlinePersonPinCircle} w='20px' h='20px' me='6px' color='pink.600' />
                                    <Text fontSize='lg'>{player.position}</Text>

                                    <Spacer />
                                    <Flex>
                                        <Text fontSize='lg'>{player.weight} </Text>
                                        <Icon as={GiWeight} w='20px' h='20px' me='6px' color='purple.800' />
                                    </Flex>

                                    <Spacer />

                                    <Icon as={BsFillFlagFill} w='20px' h='20px' me='6px' color='#555AA1' />

                                    <Text fontSize='lg'>{player.country}</Text>
                                </HStack>

                            </Flex>

                        </CardFooter>
                        <Button id={player._id} colorScheme='purple' variant='solid' onClick={deletePlayer}>
                            Delete
                        </Button>
                    </Card>

                ))}


            </Grid>

        </div>

    )
}