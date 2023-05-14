import { Button, Flex, Heading, HStack, Input, VStack } from "@chakra-ui/react";

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
            <Heading as='h1' color='purple.700' fontSize='4xl' mb={12} mt='55px' textAlign="center"> Insert a player into NBA database! </Heading>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <VStack>
                    <HStack>
                        <Input id='firstName' variant='outline' placeholder='First Name' width='50%' />
                        <Input id='lastName' variant='outline' placeholder='Last Name' width='50%' />
                    </HStack>

                    <VStack>
                        <Input id='team' variant='outline' placeholder='Team' width='100%' />
                        <Input id='position' variant='outline' placeholder='Position' width='100%' />
                    </VStack>
                    <HStack>

                        <Input id='number' variant='outline' placeholder='Number' />
                        <Input id='weight' variant='outline' placeholder='Weight' />
                        <Input id='country' variant='outline' placeholder='Country' />
                    </HStack>
                    <Button colorScheme='purple' variant='solid' onClick={insertPlayer}>
                            Submit
                        </Button>
                </VStack>

            </Flex>

        </div>
    )
}