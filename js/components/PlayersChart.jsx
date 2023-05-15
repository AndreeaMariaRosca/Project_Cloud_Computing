import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { Flex, Heading } from '@chakra-ui/react'


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
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
            <Heading as='h1' color='purple.700' fontSize='4xl' mt='35px' mb={12} textAlign="center">NBA&apos;s Hub App</Heading>
            <Flex width='55%' justifyContent='center' alignItems='center'>
                <canvas id="playersChart" ></canvas>
            </Flex>
        </div>
    );
}

export default PlayersChart;
