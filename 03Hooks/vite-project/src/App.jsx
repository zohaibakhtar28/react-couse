import { useState } from 'react'

import './App.css'

function App() {
  
  
  const [counter, setValue] = useState(10);
  const addValue = () => {
    setValue(counter + 1);
  }
  const subtractValue = () =>{
    setValue(counter-1);
  }
  return (
    <>
    <h1>React Course with Hitesh {counter}</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button> {" "}
    <button onClick = {subtractValue}> remove value</button>
   
    <p>footer : {counter}</p>

      
    </>
  )
}

export default App
