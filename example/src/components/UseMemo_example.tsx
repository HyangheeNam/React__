import React, { useMemo, useState } from "react";

const hardCalculate = (number:number) => {
    for (let i=0; i<= 999999999; i++) {
    }
    return number + 10000;
}

const easyCalculate = (number:number) => {
    return number + 10000;
}

const UseMemo_example = () => {

    const [hardNumber, setHardNumber] = useState(0);
    // const hardSum = hardCalculate(hardNumber);

    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber);
    },[hardNumber]);

    const [easyNumber, setEasyNumber] = useState(0);
    const easySum = easyCalculate(easyNumber);

    return(
        <div>
            <h1>Hard Calculate</h1>
            <input 
                type="number"
                value={hardNumber}
                onChange={(e)=> setHardNumber(Number(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>

            <h1>Easy Calculate</h1>
            <input 
                type="number"
                value={easyNumber}
                onChange={(e)=> setEasyNumber(Number(e.target.value))}
            />
            <span> + 10000 = {easySum}</span>


        </div>
    )
}

export default UseMemo_example;