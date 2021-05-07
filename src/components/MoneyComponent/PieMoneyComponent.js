import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PieMoneyComponent = ({utile, forse, inutile}) => {
    //console.log(utile)
    return (
        <>
            <div className="display">
                <PieChart  
                animate
                animationDuration={400}
                center={[50, 50]}
                lengthAngle={360}
                animationEasing="ease-in"
                data={[
                    { title: 'UTILE', value: utile, color: '#006600' },
                    { title: 'FORSE', value: forse, color: '#FFA500' },
                    { title: 'INUTILE', value: inutile, color: '#cc0000' },
                    ]}
/>
            </div>
        </>
    )
}

export default PieMoneyComponent
