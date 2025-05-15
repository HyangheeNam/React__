import React, { useState } from "react";
import { useExpenseContest } from "../context/ExpenseContext";

const ExpenseForm = () => {

    const [item, setItem] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const { dispatch } = useExpenseContest();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //초기값 유지
        const newExpense = {
            id: Date.now().toString(),
            item,
            amount, 
            date,
            category,
        };

        dispatch({type:"ADDEXPENSE", payload:newExpense});
        setItem('');
        setAmount(0);
        setDate('');
        setCategory('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" value={item} onChange={(e)=> setItem(e.target.value)} placeholder="item" required
            />
            <input 
                type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="amount" required
            />
            <input 
                type="date" value={date} onChange={(e) => setDate(e.target.value)} required
            />
            <input 
                type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category" required
            />
            <button type="submit">Send</button>
            

        </form>
    )
}

export default ExpenseForm;