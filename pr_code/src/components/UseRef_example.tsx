import React, {useState, useRef, useEffect} from "react";

//const UseRefTest = () => {

    // const [stateCount, setStateCount] = useState(0);
    // const refCount = useRef(0);

    // const handleStateUp = () => {
    //     setStateCount(stateCount+1);
    // } 

    // const handleRefCountUp = () => {
    //     refCount.current = (refCount.current+1);
    //     console.log(refCount);
    // }


    
   //return(
        // <div>
        //     <p>state:{stateCount}</p>
        //     <p>ref:{refCount.current}</p>
        //     {/* 콜업함수 */}
        //     <button onClick={()=>setStateCount(stateCount+1)}>State UP</button>
        //     <button onClick={handleRefCountUp}>Ref UP</button>
        // </div>
        
    //)
//}

// const UseRefTest = () => {

//     let countVar = 0;

//     const countRef = useRef(0);
//     const [randerer, setRanderer] = useState(0);

//     const handleRefUp = () => {
//         countRef.current = (countRef.current+1);
//         console.log(countRef.current);
//     } 

//     const handleVarUp = () => {
//         countVar = (countVar+1);
//         console.log(countVar);
//     }

//     const handleRander = () => {
//         setRanderer(randerer+1);
//     }

//     //지역변수 let - 렌더링이 되면서 지역변수의 값이 초기화
//     //useRef - 렌더링이 되어도 값 유지
//     return(
//         <div>
//             <p>Ref:{countRef.current}</p>
//             <p>Var:{countVar}</p>
//             <button onClick={handleRefUp}>Ref UP</button>
//             <button onClick={handleVarUp}>Var UP</button>
//             <button onClick={handleRander}>Render</button>
//         </div>
//     )

// }

// const UseRefTest = () => {

//     const [count, setCount] = useState(0);
//     // const [renderCount, setRenderCount] = useState(0);
//     const renderCount = useRef(0);
    
//     useEffect(()=> {
//         console.log('render');
//         renderCount.current = (renderCount.current+1);
//         //setRenderCount(renderCount+1);
//     })

//     return(
//         <div>
//             <p>count:{count}</p>
//             <button onClick={()=> setCount(count+1)}>button</button>
//         </div>
//     )
// }

const UseRefTest = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        if(inputRef.current !== null){
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    })

    const clickBtn = () => {
        if(inputRef.current !== null){
            console.log();
            alert(`welcome user:${inputRef.current.value}`);

        }
    }

    return(
        <div>
            <input
                ref={inputRef}
                type="text" 
                placeholder="user_name"/>
            <button onClick={clickBtn}>login</button>
        </div>
    )
}

export default UseRefTest;