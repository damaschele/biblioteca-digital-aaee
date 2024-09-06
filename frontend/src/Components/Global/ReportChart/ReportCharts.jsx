import { useState } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {

    const [data, setData] = useState({
        series: [
            {
                name: 'Utilizadores',
                data: [50, 60, 55, 70, 65, 80, 75]
            },
            {
                name: 'Solicitações',
                data: [40, 55, 45, 60, 50, 65, 55]
            },
            {
                name: 'Publicações',
                data: [30, 40, 35, 50, 45, 60, 55]
            },
            {
                name: 'Livros',
                data: [20, 30, 25, 40, 35, 50, 45]
            },

        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2024-09-19T00:00:00.000Z',
                    '2024-09-19T01:30:00.000Z',
                    '2024-09-19T02:30:00.000Z',
                    '2024-09-19T03:30:00.000Z',
                    '2024-09-19T04:30:00.000Z',
                    '2024-09-19T05:30:00.000Z',
                    '2024-09-19T06:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    return (
        <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
        />
    )
}

export default ReportCharts