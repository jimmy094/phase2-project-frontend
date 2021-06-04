import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart(props) {
  let series1= props.tasks.map(
    (taskObj)=>{
      let difference= new Date(taskObj.startDate)-new Date()
      let daypassed= difference/(1000*60*60*24)
      return [taskObj.taskName,daypassed]
    }
    
  )
  console.log(series1)

  let series2=props.tasks.map(
    (taskObj)=>{
      let difference= new Date(taskObj.endDate)-new Date(taskObj.startDate)
      let daypassed= difference/(1000*60*60*24)
      return [taskObj.taskName,daypassed]
      // return [taskObj.taskName,((Date.parse(taskObj.endDate)/3600000)-(Date.parse(taskObj.startDate)/3600000))/24]
    }
  )

console.log(series2)
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: series1
      },
      {
        label: 'Series 2',
        data: series2
      },
    ],
    [series1,series2]
  )

  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: true }
    ],
    [series1]
  )
 
  const barChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '1400px',
        height: '500px'
      }}
    >
      <Chart data={data} axes={axes} series={series}/>
    </div>
  )
  return barChart
}

export default MyChart