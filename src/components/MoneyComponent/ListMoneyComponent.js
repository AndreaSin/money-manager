import React from 'react'
import ExpenseComponent from './ExpenseComponent'

const ListMoneyComponent = ({expenses, onRemove}) => {

    return (
            <div className="money-list">
                <div className='list-container'>
                {expenses.map((item)=>
                    <ExpenseComponent key={item.id} item ={item} onRemove={onRemove}/>
                )}
                </div>    
            </div>
    )
}

export default ListMoneyComponent
