import React, { useEffect } from "react";


const Timer = () => {

    useEffect(() => {
        //setInterval - 콜업함수(()=>{})
        const Time = setInterval(() => {
            console.log("Running");
        }, 1000);
        return() => {
            clearInterval(Time);
        }
        
    }, []); //한번만 실행

    return(
        <div>
            <h1>Timer</h1>
            <p>Time:</p>

        </div>
    )
}

export default Timer;