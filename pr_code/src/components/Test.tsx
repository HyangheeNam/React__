import React, { useState, useRef } from "react";

//state, ref, let
const TestCode = ()=>{
    const [state, setState] = useState(0);
    const refCount = useRef(0);
    let letCount = 0;

    
    const stateBtn = () => {
        setState(state+1);
    }

    const refBtn = () => {
        refCount.current = refCount.current+1;
        console.log('refCount :' + refCount);
        console.log('refCount.current :' + refCount.current);
    }

    const LetBtn = () => {
        letCount = letCount+1;
        console.log(letCount);
    }

    return(
        <div>
            <h1>Count</h1>
            <p>state count:{state}</p>
            
            <p>ref count: {refCount.current}</p>
            <p>let count:{letCount}</p>

            <button onClick={stateBtn}>StateBtn</button>
            <button onClick={refBtn}>RefBtn</button>
            <button onClick={LetBtn}>LetBtn</button>

        </div>
    )

}

export default TestCode;