import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

function AppRouter() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default AppRouter