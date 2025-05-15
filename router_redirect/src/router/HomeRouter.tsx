import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from '../pages/calculator/Calculator'
import Timer from '../pages/timer/Timer'

function HomeRouter() {
    return (
        <div>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/calculator" >Calculator</Link>
                <Link to="/timer" >Timer</Link>
            </nav>
            <Routes>
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/timer' element={<Timer />} />
            </Routes>
        </div>
    )
}

export default HomeRouter;