import React from 'react'
import { PieChart, Pie, Legend ,} from 'recharts'

const CreditReportChart = () => {

  const credRepData = [
    {
      name: "Type Of Credit",
      value: 30,
      fill: "#566D7E"
    },
    {
      name: "New Credit Accumulation",
      value: 50,
      fill: "#4863A0"
    },
    {
      name: "Amount Owned",
      value: 70,
      fill: "#6495ED"
    },
    {
      name: "Payment History",
      value: 20,
      fill: "#00BFFF"
    },
    {
      name: "Length of Credit",
      value: 90,
      fill: "#ADDFFF"
    },

  ]
  return (
    <div className='all-fhc-cards'>
      <PieChart width={460} height={300} className='credit-summary-chart'>
        
        <Legend
          height={36}
          iconType="square"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={0}
          cx={50}
          cy={50}
          
        />
        <Pie
          data={credRepData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          viewBox="0 0 400 300"
      
        >

        </Pie>


      </PieChart>

    </div>
  )
}

export default CreditReportChart