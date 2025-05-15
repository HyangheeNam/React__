import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { useState } from "react";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input type="number"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(Number(e.target.value))}    
            />
            <button onClick={()=> dispatch(incrementByAmount(incrementAmount))}>Increment by Amount</button>

        </div>
    )
}

export default Counter;