import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomeRouter from './router/HomeRouter';

function App() {
  return (
    <BrowserRouter>
      <HomeRouter />
    </BrowserRouter>
  );
}

export default App;