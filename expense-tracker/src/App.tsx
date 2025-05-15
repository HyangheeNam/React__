import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';



function App() {
  return (
    <div className="App">
      <ExpenseForm/>
      <ExpenseList />
    </div>
  );
}

export default App;
