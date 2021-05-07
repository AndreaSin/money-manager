import React from 'react'
import DisplayMoneyComponent from './DisplayMoneyComponent'
import ListMoneyComponent from './ListMoneyComponent'
import AddExpenseComponent from './AddExpenseComponent'
import PieMoneyComponent from './PieMoneyComponent'
import {useState, useEffect} from 'react'

const MoneyComponent = () => {

    const [showAddExpense, setShowAddExpense] = useState (false)
    const [showNumber, setShowNumber] = useState (false)
    const [total, setTotal] = useState (0)
    const [utile, setUtile] = useState (20)
    const [forse, setForse] = useState (30)
    const [inutile, setInutile] = useState (2)
    const [expenses, setExpenses] = useState(
        [
        {
            id: 1,
            expense: 'supermercato',
            price: 30,
            date: 'forse',
        },
        {
            id: 2,
            expense: 'pizza',
            price: 2,
            date: 'inutile',
        },
        {
            id: 3,
            expense: 'benzina',
            price: 20,
            date: 'utile',
        }
        ]
    )

    const onAdd = (date) => {
        var id;
        if(expenses.length > 0) {
          id = Math.max(...expenses.map((item)=> item.id)) + 1;
        } else {
          id = 1
        }        
        const item = {id,...date}
        setExpenses([...expenses, item])
        setShowAddExpense(false)
    }

    useEffect(() => {
        calcTotal()
     });

    const onRemove = (id) => {
        setExpenses(expenses.filter((item) => {
            return item.id !== id;
        }))
    }

    const calcTotal = () => {
       let tot = expenses.reduce((tot, item)=>{
        return tot + item.price
        }, 0)
        setTotal(tot)


        let utile = expenses.filter((item)=> {
            return item.date === 'utile'
        })
        .reduce((tot, item)=>{
            return tot + item.price
        }, 0)
        setUtile(utile)

        let forse = expenses.filter((item)=> {
            return item.date === 'forse'
        })
        .reduce((tot, item)=>{
            return tot + item.price
        }, 0)
        setForse(forse)

        let inutile = expenses.filter((item)=> {
            return item.date === 'inutile'
        })
        .reduce((tot, item)=>{
            return tot + item.price
        }, 0)
        setInutile(inutile)

    } 

    return (
        <>
            {showNumber ? <DisplayMoneyComponent total={total}/> : <PieMoneyComponent utile={utile} forse={forse} inutile={inutile}/>}
            <div className="buttonsContainer">
                    <button style={!showAddExpense ? {backgroundColor : 'slateblue' } : {backgroundColor :'grey'}} onClick={() => setShowAddExpense(!showAddExpense)} className="button">AGGIUNGI SPESA</button>
                    <button onClick={() => setShowNumber(!showNumber)} className="button">CAMBIA DISPLAY</button>
            </div>
            {showAddExpense ? <AddExpenseComponent onAdd={onAdd}/> : <ListMoneyComponent expenses={expenses} onRemove={onRemove}/>}
        </>
    )
}

export default MoneyComponent
