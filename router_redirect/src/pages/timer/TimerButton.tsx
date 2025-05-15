import React from 'react'
import Button from '../calculator/CalcButton';

interface TimerButtonProps {
    startstopBtn:() => void;
    resetBtn: () => void;
    lapBtn: () => void;
    isRunning:Boolean;
}

function TimerButton({ startstopBtn, resetBtn, lapBtn, isRunning }:TimerButtonProps) {
    return (
        <div>
            <button
            className='startstopBtn' onClick={startstopBtn}>
                {isRunning? "stop":"start"}
            </button>
            <button className='resetBtn' onClick={resetBtn}>reset</button>
            {isRunning && 
            <button className='lapBtn' onClick={lapBtn}>Lap</button>}
        </div>
    )
}

export default TimerButton