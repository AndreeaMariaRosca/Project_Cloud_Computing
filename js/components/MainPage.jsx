import { Card, CardBody, Grid, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, Icon, Center, HStack, Flex, Spacer, CardFooter } from '@chakra-ui/react'
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
    return (
        <div>
            <Text color='purple.700' fontSize='4xl' as='b' textAlign="center">My project is cooler than yours</Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={3} overflowX="auto">
                {players.map(player => (
                    <Card maxW='sm' key={player._id} flexBasis="33.33%" p="4" position='relative'>
                        <CardBody>
                            <Image src='https://stock.adobe.com/ie/collections/M9EuTE3QQBDvmU3WTyNU788YRTP1kTAX?asset_id=534605341'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg' />
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
                                
                                <Divider />
                                
                                {/* <CardFooter> */}
                                    <Flex direction='row'>
                                        <Icon as={MdOutlinePersonPinCircle} w='20px' h='20px' me='6px' color='#555AA1' />

                                        <Text fontSize='lg'>{player.position}</Text>

                                        <Spacer />
                                        <Flex>
                                            <Icon as={GiWeight} w='20px' h='20px' me='6px' color='pink.600' />
                                            <Text fontSize='lg'>{player.weight} lbs</Text>
                                        </Flex>

                                        <Spacer />

                                        <Icon as={BsFillFlagFill} w='20px' h='20px' me='6px' color='#555AA1' />

                                        <Text fontSize='lg'>{player.country}</Text>

                                    </Flex>
                                {/* </CardFooter> */}

                            </Stack>
                        </CardBody>

                    </Card>

                ))}


            </Grid>
        </div>

    )
}