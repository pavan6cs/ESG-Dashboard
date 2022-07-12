import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import "chartjs-plugin-doughnut-innertext";
ChartJS.register(ArcElement, Tooltip);


const options = {
    cutout: 48,
    elements: {
        arc: {
            borderWidth: 10,
            // borderRadius: 0,
        },
    },
    centerText: {
        color: "#000",
        value: 31,
        fontSizeAdjust: 0.4 // increase font size 20% based on default font size
      }
};



const data = {
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['rgb(102, 72, 255)',
            'rgb(217, 211, 248)'],
        borderColor: ['rgb(102, 72, 255)', 'rgb(217, 211, 248)'],
        data: [31, 69],
        weight: 0
    }]
};

const DoughnutChartCustome = (props) => {
    return (
        <Doughnut data={data} options={options}  />
    )
}

export default DoughnutChartCustome;