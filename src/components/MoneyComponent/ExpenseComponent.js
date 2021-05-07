import React from 'react'

const ExpenseComponent = ({item, onRemove}) => {
    return (
            <div className='list-container'>
                <div className={"expense" + " " + item.date} >
                    <h3>{item.expense}</h3>
                    <span className="moneyExpense">{item.price}</span>
                    <p>{item.date}</p>
                    <span style={{textAlign: 'right'}}>
                    <i style={{cursor: 'pointer', color: 'white', fontSize: '18px'}} onClick={() => onRemove(item.id)} className="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
            </div>    
    )
}

export default ExpenseComponent