import React, { useState, useEffect } from 'react';
import TimerButton from './TimerButton';
import TimerLap from './TimerLap';
import './TimerForm.css';


interface TimerProps {
    time: number;
}

function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    const startstopBtn = () => {
        setIsRunning(!isRunning);
    };

    const resetBtn = () => {
        setTime(0);
        setIsRunning(false);
        setLaps([]);
    };

    const lapBtn = () => {
        setLaps([...laps, time]);
    };

    useEffect(() => {
        let timer: number;
        if (isRunning) {
        timer = window.setInterval(() => {
            setTime(prevTime => prevTime + 1); 
        }, 1000); 
        }

        return () => {
        clearInterval(timer);
        };
    }, [isRunning]); 

    return (
        <div>
        <div className="timeDisplay">{time}</div>
        
        <TimerButton
            startstopBtn={startstopBtn}
            resetBtn={resetBtn}
            lapBtn={lapBtn}
            isRunning={isRunning}
        />
        
        <TimerLap laps={laps} />
        </div>
    );
}

export default Timer;
