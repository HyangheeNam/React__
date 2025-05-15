import React, {useReducer, useState} from "react";
//현재 상태 -잔액
type AccountSate = {
    balance:number;
}

const initialState:AccountSate = {balance:0}

//명령 실행
type AccountAction =
    | { type:'Deposite'; amount:number }
    | { type:'WithDraw'; amount:number }


//객체 - state, action
function accountReducer(state:AccountSate, action:AccountAction):AccountSate {
    switch(action.type){
        case 'Deposite':
            //balance:안에 들어갈 값(state.balance) + 객체 
            return {balance:state.balance + action.amount};
        case 'WithDraw':
            return {balance:state.balance - action.amount};
    }
        
}
    
    

const BankTestCode = () => {       
    const [amount, setAmount] = useState(0);
    const [state, dispatch] = useReducer(accountReducer, initialState);
    
    const DepositeBtn = () => {
        dispatch({type:'Deposite', amount})
    }

    const WithDrawBtn = () => {
        dispatch({type:'WithDraw', amount})
    }
    
    return(
        <div>
            <h1>Bank</h1>
            <p>Balance: {state.balance}</p>
            <input 
                type="number" 
                value={amount} 
                // useState에서 set값: setAmount((Number=형변환(값=e.target.value)))
                onChange={(e)=> (setAmount(Number(e.target.value)))}
                step={100}
            />
            <button onClick={DepositeBtn}>Deposite</button>
            <button onClick={WithDrawBtn}>WithDraw</button>
        </div>
    )
}

export default BankTestCode;