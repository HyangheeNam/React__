import React, { useCallback, useState } from "react";

const UseCallback = () => {

    const [number, setNumber] = useState(0);


    const someFunction = useCallback(() => {
        
        console.log(number);
        return;

    }, [number]);

    return(
        <div>
            <input type="number" value={number} onChange={(e)=> setNumber(Number(e.target.value))} />
            <button onClick={someFunction}>Call SomeFunction</button>
        </div>
    )
}

export default UseCallback;

