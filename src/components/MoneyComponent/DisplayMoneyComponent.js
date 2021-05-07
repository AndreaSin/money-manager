import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const DisplayMoneyComponent = ({total}) => {
    return (
        <>
            <div className="display">
                <p className="display-number">{total}</p>
            </div>
        </>
    )
}

export default DisplayMoneyComponent
