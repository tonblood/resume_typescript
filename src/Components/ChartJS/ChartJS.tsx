
import { Button, Col, Progress, Row, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2';
import DougnutChart from './DougnutChart';

interface progressType {
  total: number,
  complete: number,
  uncomplete: number
}

type Props = progressType

const ChartJS: React.FC<Props> = (props: Props) => {
  const total = props.total
  const [complete, setComplete] = useState<number>(props.complete)
  const [uncomplete, setUncomplete] = useState<number>(props.uncomplete)

  const data = {
    labels: [
      'uncomplete',
      'complete',
    ],
    datasets: [{
      label: 'Working Task',
      data: [uncomplete, complete],
      backgroundColor: [
        '#FF7B54', '#939B62',
      ],
    }],
  };

  const increasetask = () => {
    setComplete(complete + 1)
    setUncomplete(uncomplete - 1)
  }
  const decreasetask = () => {
    setComplete(complete - 1)
    setUncomplete(uncomplete + 1)
  }

  return (
    <div>
      <div className='feed-nav'>
        <h4> ChartJS</h4>

      </div>
      <Row gutter={16}>

        <Col style={{ marginLeft: 10 }} span={23}>
          <span><p>complete Task :</p></span>
          <Tooltip title={`complete ${complete} Task`}  >
            <Progress status='normal' percent={complete * total} strokeColor={'#939B62'} showInfo={true} strokeWidth={20} format={() => `${complete} Task`} />
          </Tooltip>
          <span><p>uncomplete Task :</p></span>
          <Tooltip title={`uncomplete ${uncomplete} Task`} >
            <Progress status='normal' percent={uncomplete * total} strokeColor={'#FF7B54'} showInfo={true} strokeWidth={20} format={() => `${uncomplete} Task`} />
          </Tooltip>
          <Row gutter={16}>
            <Col span={12}>
              <Button block type='primary' size='large' onClick={() => decreasetask()} disabled={uncomplete === total ? true : false}>-</Button>
            </Col>
            <Col span={12}>
              <Button block type='primary' size='large' onClick={() => increasetask()} disabled={complete === total ? true : false}>+</Button>
            </Col>
          </Row>
        </Col>
        <Col span={11}>
          <DougnutChart mydata={data} totaltask={total} legendlabel={true} />
        </Col>
        <Col span={11}>
          <Bar data={data} options={{
            legend: { display: false, position: 'right' },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  precision: 0,
                },
                gridLines: false
              }],
              xAxes: [{
                gridLines: false
              }],
              Axes: [{
                display: false
              }]
            }
            }
          } />
        </Col>
      </Row>
    </div>
  )
}

export default ChartJS