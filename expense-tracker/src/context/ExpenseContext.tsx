import React, { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";

type Expense = {
    id: string;
    item: string;
    amount: number;
    date: string;
    category: string;
}

type State = {
    expenses: Expense[];
}

type Action = 
    | {type: 'ADDEXPENSE'; payload: Expense}
    | {type: 'DELETE'; payload: string}

const ExpenseReducer = (state:State, action:Action):State => {
    switch (action.type){
        case "ADDEXPENSE":
            return {...state, expenses:[...state.expenses, action.payload]};
        case "DELETE":
            return {...state, expenses: state.expenses.filter(exp => exp.id !== action.payload)};
        default:
            return state;
    }
    
}

export const ExpenseContext = createContext<{state: State; dispatch:React.Dispatch<Action>} | undefined>(undefined);

type ExpenserProviderProps = {
    children: ReactNode;
}

//배포
export const ExpenseProvider = ({ children }: ExpenserProviderProps) => {
    const [state, dispatch] = useReducer(ExpenseReducer, { expenses: [] });
    return <ExpenseContext.Provider value={{ state, dispatch }}>{children}</ExpenseContext.Provider>;
}

//커스텀
export const useExpenseContest = () => {
    const context = useContext(ExpenseContext);
    if (!context) throw new Error('error');
    return context;
}

