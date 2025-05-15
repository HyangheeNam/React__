import React, { useReducer, useState } from "react";

type AccountState = {
    balance: number;
};

//객체 , 함수 -> |
type AccountAction = 
    | { type: 'Deposit'; amount:number }
    | { type: 'WithDraw'; amount:number }

const initialState:AccountState = {balance:0}


function accountReducer( state:AccountState, action:AccountAction ):AccountState {
    switch(action.type){
        case "Deposit":
            return{balance:state.balance + action.amount}
        case "WithDraw":
            return{balance:state.balance - action.amount}
    }
}

const UseReducer = () => {

    const [amount, setAmount] = useState(0);

    const [state, dispatch] = useReducer(accountReducer, initialState);
    const handleWithDraw = () => {
        dispatch( { type: "WithDraw", amount } )
        
    }

    const handleDeposit = () => {
        dispatch( { type: "Deposit", amount } )
    }

    return(
        <div>
            <h1>Bank Account</h1>
            <p>Current Balance:{state.balance}</p>
            <input 
                type="number"
                value={amount}
                onChange={(e)=>(setAmount(Number(e.target.value)))}
                step={100}
            />
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithDraw}>WithDraw</button>

        </div>
    )

}

export default UseReducer;