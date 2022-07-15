import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Dow Jones vs Porfolio',
        },
    },
};

const labels = ['Total', 'Enviormental', 'Social', 'Governance'];



const CustomeBarChart = (props) => {
     const data = {
        labels,
        datasets: [
            {
                label: 'Dow Jones',
                data: [60, 70, 30, 20],
                backgroundColor: 'rgba(44, 108, 136)',
            },
            {
                label: 'Portfolio',
                data: [50, 60, 20, 10],
                backgroundColor: 'rgba(29, 222, 208)',
            },
        ],
    };
    return (
        <Bar options={options} data={data} />);
}

export default CustomeBarChart;