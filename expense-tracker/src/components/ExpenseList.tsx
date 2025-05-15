import React from 'react';
import { useExpenseContest } from '../context/ExpenseContext';

const ExpenseList = () => {

    const { state, dispatch } = useExpenseContest();
    return(
        <ul>
            {state.expenses.map((expense)=>(
                <li id={expense.id}>
                    {expense.item}-
                    {expense.amount}-
                    {expense.date}-
                    {expense.category}
                    <button onClick={()=> dispatch({ type:"DELETE", payload:expense.id })}>Delete</button>
                </li>
            ))} 
        </ul>
    )
}

export default ExpenseList;