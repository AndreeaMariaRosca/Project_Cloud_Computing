import { Button, Flex, Heading, HStack, Input, Link, Select, Spacer, Text, VStack } from "@chakra-ui/react";

export default function InsertPage() {
    const insertPlayer = (event) => {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const team = document.getElementById("team").value;
        const position = document.getElementById("position").value;
        const number = document.getElementById("number").value;
        const weight = document.getElementById("weight").value;
        const country = document.getElementById("country").value;

        const data = { firstName, lastName, team, position, number, weight, country };
        fetch("/api/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => {
            console.log("New player inserted");
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("team").value = "";
            document.getElementById("position").value = "";
            document.getElementById("number").value = "";
            document.getElementById("weight").value = "";
            document.getElementById("country").value = "";
        });
    }

    return (
        <div>
            <Heading as='h1' color='purple.700' fontSize='4xl' mt='55px' textAlign="center"> Haven&apos;t found your favourite players? </Heading>
            <Text fontSize='3xl' mb={12} textAlign="center">Help others by inserting your info about them!</Text>

            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <VStack>
                    <Input id='firstName' variant='outline' placeholder='First Name' width='150%' type='text' />
                    <Input id='lastName' variant='outline' placeholder='Last Name' width='150%' type='text' />

                    <Input id='team' variant='outline' placeholder='Team' width='150%' type='text' />
                    <Select id='position' placeholder='Select position' width='150%' color='blackAlpha.600'>
                        <option value='option1'>Guard</option>
                        <option value='option2'>Center</option>
                        <option value='option3'>Forward</option>
                    </Select>

                    <Input id='number' variant='outline' placeholder='Number' width='150%' type='number' />
                    <Input id='weight' variant='outline' placeholder='Weight (in kg)' width='150%' type='number' />
                    <Input id='country' variant='outline' placeholder='Country' width='150%' type='text' />
                    <HStack>
                        <Button colorScheme='purple' variant='solid' onClick={insertPlayer}>
                            Submit
                        </Button>
                        <Spacer />
                        <Link href='/'>
                            <Button colorScheme='purple' variant='outline'>
                                Return to main page
                            </Button>
                        </Link>
                    </HStack>

                </VStack>

            </Flex>

        </div>
    )
}