import { useState } from 'react'

import './App.css'

//Assignment ye hai ki counter ka value 0 se niche nahi and 20 se upar nahi jana chahiye

function App() {
  let [counter,setCounter]=useState(15) 
  const addvalue=()=>{
    if(counter<=20) //ye logic bas lagana tha
    setCounter(counter+1)
  }

  const decvalue=()=>{
    if(counter>=1)//ye bhi
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Cofee and React</h1>
    <h2>counter value{counter}</h2>
    <button
    onClick={addvalue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={decvalue}
    >Decrease Value{counter}</button>
    
    </>
  )
}

export default App
