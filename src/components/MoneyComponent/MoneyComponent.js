import React from 'react'
import DisplayMoneyComponent from './DisplayMoneyComponent'
import ListMoneyComponent from './ListMoneyComponent'
import AddExpenseComponent from './AddExpenseComponent'
import {useState, useEffect} from 'react'

const MoneyComponent = () => {

    const [showAddExpense, setShowAddExpense] = useState (false)
    const [expenses, setExpenses] = useState(
        [
        {
            id: 1,
            expense: 'supermercato',
            price: '30',
            date: 'cibo',
        },
        {
            id: 2,
            expense: 'pizza',
            price: '2',
            date: 'cibo',
        },
        {
            id: 3,
            expense: 'benzina',
            price: '20',
            date: 'trasporti',
        }
        ]
    )

    const onAdd = (date) => {
        let id;
        if(expenses.length > 0) {
          id = Math.max(...expenses.map((item)=> item.id)) + 1;
        } else {
          id = 1
        }        
        const item = {id,...date}
        setExpenses([...expenses, item])
        setShowAddExpense(false)
    }

    const onRemove = (id) => {
        setExpenses(expenses.filter((item) => {
            return item.id !== id;
        }))
    }

    return (
        <>
            <DisplayMoneyComponent/>
            <div className="buttonsContainer">
                    <button style={!showAddExpense ? {backgroundColor : 'slateblue' } : {backgroundColor :'grey'}} onClick={() => setShowAddExpense(!showAddExpense)} className="button">AGGIUNGI SPESA</button>
                    <button className="button">CAMBIA DISPLAY</button>
            </div>
            {showAddExpense ? <AddExpenseComponent onAdd={onAdd}/> : <ListMoneyComponent expenses={expenses} onRemove={onRemove}/>}
        </>
    )
}

export default MoneyComponent
