import React, { useState } from 'react';
import './App.css';
import UseContextTest from './components/UseContext';
import { ThemeContext } from './context/ThemeContext';
import UseMemo_example from './components/UseMemo_example';
import UseCallback from './components/UseCallback';

function App() {

  // const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
      {/* <ThemeContext.Provider value={{isDark, setIsDark}}>
        <UseContextTest/>
      </ThemeContext.Provider> */}
      {/* <UseMemo_example/> */}
      <UseCallback/>
    </div>
  );
}

export default App;
