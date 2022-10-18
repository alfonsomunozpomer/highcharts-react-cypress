import React, { useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export default function LineChart() {
  const [hoverData, setHoverData] = useState(null)
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['A', 'B', 'C']
    },
    series: [
      { data: [1, 2, 3] }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver (e) {
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  })

  const updateSeries = () => {
    setChartOptions({
      series: [
        { data: [Math.random() * 5, 2, 1] }
      ]
    })
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      <h3>Hovering over {hoverData}</h3>
      <button aria-label="update" onClick={updateSeries}>Update Series</button>
    </div>
  )
}
