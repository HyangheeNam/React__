import React, { useReducer, useState } from "react";

//현재 상태 표현 - 잔액
type AccountState = {
    balance: number;
};

//action - 명령 전달(입금, 출금)
//type과 함께 그 행동에 필요한 데이터(예: amount)를 포함해서 명확하게 어떤 행동이 수행될지를 나타냄
type AccountAction = 
| { type:'Deposit'; amount:number }
| { type:'WithDraw'; amount:number }

//초기설정
const initialState:AccountState = {balance:0}

//실행
function accountReducer(state:AccountState, action:AccountAction){
    switch(action.type){
        case "Deposit":
            return{balance:state.balance + action.amount}
        case "WithDraw":
            return{balance:state.balance - action.amount}
    }
}

const UseReducerTest = () => {
    
    //총액 - 상태 변화
    const [amount, setAmount] = useState(0);
    //state: 현재 상태, dispatch: 액션 발생
    //useReducer 훅이 accountReducer 함수를 사용하여 상태를 관리
    //상태가 변경될 때마다 accountReducer가 호출-변경
    const [state, dispatch] = useReducer(accountReducer, initialState);

    const handleDeposit = () => {
        dispatch( { type:"Deposit", amount } )
    }

    const handleWithDraw = () => {
        dispatch( { type: "WithDraw", amount } )
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

export default UseReducerTest;