import React, {useState} from 'react';
import './App.css';
import UseRefTest from './components/UseRef_example';
import UseReducer from './components/UseReducer';
import UseReducerTest from './components/practice';
import TestCode from './components/Test';
import BankTestCode from './components/BankTest';
import Timer from './components/Timer';

function App() {

  const [toggle, setToggole] = useState(true); 
  
  const StopBtn = () => {
    setToggole(!toggle);
  }
  
  return (
    <div>

      {/* <UseRefTest /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerTest /> */}
      {/* <TestCode />     */}
      {/* <BankTestCode /> */}
      
      <button onClick={StopBtn}>Stop</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
