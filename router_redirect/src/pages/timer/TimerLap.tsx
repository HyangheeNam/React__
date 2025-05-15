import React from 'react'

interface TimerLapProps {
    laps:number[];
}

function TimerLap({ laps }:TimerLapProps) {
    return (
        <div className='laps'>
            <ul>
            {laps.map((lap, index)=>(
                <li key={index}>{lap}</li>
            ))}
            </ul>
        </div>
    )
}

export default TimerLap