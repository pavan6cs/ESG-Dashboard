import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import "chartjs-plugin-doughnut-innertext";
import charts from "./DoughnutChartCustome.scss";
ChartJS.register(ArcElement, Tooltip);








const DoughnutChartCustome = (props) => {
    const data = {
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: ['rgb(102, 72, 255)',
                    'rgb(217, 211, 248)'],
                borderColor: ['rgb(102, 72, 255)', 'rgb(217, 211, 248)'],
                data: [31, 69],
                weight: 0
            }
        ]
    };
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
    let val = [props.data, 100 - props.data];
    data.datasets[0].data = val;
    options.centerText.value = props.data;
    return (
        <>
            <div style={{
                width: props.width, height: props.height, marginTop: props.marginTop,
                marginLeft: props.marginLeft
            }} >
                <Doughnut data={data} options={options} />
            </div>
        </>
    )
}

export default DoughnutChartCustome;