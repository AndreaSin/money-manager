import React from 'react'
import { useState } from 'react'
import NumberFormat from 'react-number-format';

const AddExpenseComponent = ({item, onAdd}) => {

    const [expense, setExpense] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
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
                    <label>Categoria</label>
                    <select id="cars" name="cars" required onChange={(e)=> setDate(e.target.value)}>
                        <option value=""></option>
                        <option value="cibo">Cibo</option>
                        <option value="trasporti">Trasporti</option>
                        <option value="bollette">Bollette</option>
                        <option value="svago">Svago</option>
                    </select>
                    </div>
                    <div className=''>
                    <label>Prezzo</label>
                    <NumberFormat required value={price} thousandSeparator={true} suffix={'€'} onValueChange={(values) => {
                        const {formattedValue, value} = values;
                        setPrice(formattedValue)
                    }}/>
                    </div>
                    <input className='button' type='submit' value='SALVA'  />
                </form>
            </div>    
    )
}

export default AddExpenseComponent