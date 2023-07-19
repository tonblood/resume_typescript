import { Tooltip } from 'antd'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

interface param {
    mydata: any
    height?: number
    width?: number
    totaltask?: number
    legendlabel?: boolean
}

type Props = param
const DougnutChart: React.FC<Props> = (props: Props) => {
    const data = {
        labels: [
            'Knowledge',
        ],
        datasets: [{
            label: 'Working Task',
            data: [10],
            backgroundColor: [
                '#939B62',
            ],
            borderColor:[
                '#939B62'
            ]
        }],
    };

    const plugins = [{
        beforeDraw: function (chart: any) {
            const height = chart.height
            const ctx = chart.ctx;
            ctx.restore();
            const fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const text = `${props.totaltask}`
            const text2 = `Knowledge`

            const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.fillText(text, centerX, centerY * 0.9);
            ctx.fillText(text2, centerX, centerY * 1.1);
            ctx.save();
        }
    }]

    return (
        <div>
            <Tooltip title={`${props.totaltask} Knowledge`}>
                <Doughnut data={data}
                    options={{
                        legend: {
                            display: props.legendlabel ? props.legendlabel : false,
                            position: 'right'
                        }
                    }}
                    plugins={plugins} />
            </Tooltip>
        </div>
    )
}

export default DougnutChart