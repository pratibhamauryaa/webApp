import React from 'react'
import dynamic from 'next/dynamic'

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const FhcCharts = () => {

   

    return (
 
        <div>
            <GaugeChart id="gauge-chart1"
                nrOfLevels={100}
                arcsLength={[0.3, 0.5, 0.2,]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                percent={0.60}
                arcPadding={0.02}
                hideText
            />

           
        </div>

    )
}

export default FhcCharts