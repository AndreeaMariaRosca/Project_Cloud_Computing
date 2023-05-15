import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { VStack, Heading, Text, Link, Button } from '@chakra-ui/react'

Chart.register(...registerables);

function PlayersChart() {
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('https://www.balldontlie.io/api/v1/players');
            setPlayerData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        createChart();
    }, [playerData]);

    function createChart() {
        const positions = {};

        playerData.forEach(player => {
            const position = player.position || 'Unknown';

            if (positions[position]) {
                positions[position]++;
            } else {
                positions[position] = 1;
            }
        });

        const positionLabels = Object.keys(positions);
        const playerCounts = Object.values(positions);

        const chartConfig = {
            type: 'bar',
            data: {
                labels: positionLabels,
                datasets: [
                    {
                        label: 'Number of Players for each Position',
                        data: playerCounts,
                        backgroundColor: '#D6BCFA',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
            },
        };

        const chartCanvas = document.getElementById('playersChart');

        const existingChart = Chart.getChart(chartCanvas);

        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(chartCanvas, chartConfig);
    }

    return (
        <div>
            <VStack alignItems='center'>
                <Heading as='h1' color='purple.700' fontSize='3xl' mt='35px' mb={12} textAlign="center">NBA Position Stats</Heading>
                <canvas id="playersChart" width="150" height="50" ></canvas>
                <br />
                <Text fontSize='lg' mb={12} textAlign="center" mt='55px'>For more stats, click
                    <Link href='https://app.balldontlie.io/' color='#553C9A' as='b'> here</Link>
                    !</Text>
                <Link href='/'>
                    <Button colorScheme='purple' variant='solid'>
                        Return to main page
                    </Button>
                </Link>
            </VStack>
        </div>
    );
}

export default PlayersChart;
