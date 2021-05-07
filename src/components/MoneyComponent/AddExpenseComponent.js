import React from 'react'
import { useState } from 'react'
import NumberFormat from 'react-number-format';
import PropType from 'prop-types';

const AddExpenseComponent = ({item, onAdd}) => {

    const [expense, setExpense] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(price)
        onAdd({expense,date,price});
    }

    return (
            <div className='money-form' onSubmit={onSubmit}>
                <form>
                    <div className=''>
                    <label>Spesa</label>
                    <input
                        type='text'
                        value={expense} onChange={(e)=> setExpense(e.target.value)} required/>
                    </div>
                    <div className=''>
                    <label>Utilità spesa</label>
                    <select id="cars" name="cars" required onChange={(e)=> setDate(e.target.value)}>
                        <option value=""></option>
                        <option value="utile">Utile</option>
                        <option value="forse">Forse</option>
                        <option value="inutile">Inutile</option>
                    </select>
                    </div>
                    <div className=''>
                    <label>Prezzo</label>
                    <NumberFormat isNumericString={false} required value={price} thousandSeparator={true} suffix={'€'} onValueChange={(values) => {
                        const {formattedValue, value} = values;
                        setPrice(parseInt(value, 10))
                    }}/>
                    </div>
                    <input className='button' type='submit' value='SALVA'  />
                </form>
            </div>    
    )
}

AddExpenseComponent.propType = {
    expense: PropType.string,
    date: PropType.string,
    price: PropType.number
}


export default AddExpenseComponent