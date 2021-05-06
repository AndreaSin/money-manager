import React from 'react'

const ExpenseComponent = ({item, onRemove}) => {
    return (
            <div className='list-container'>
                <div className="expense">
                    <h3>{item.expense}</h3>
                    <span style={{textAlign: 'right'}}>{item.price}</span>
                    <p>{item.date}</p>
                    <span style={{textAlign: 'right'}}>
                    <i style={{cursor: 'pointer', color: 'red'}} onClick={() => onRemove(item.id)} className="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
            </div>    
    )
}

export default ExpenseComponent