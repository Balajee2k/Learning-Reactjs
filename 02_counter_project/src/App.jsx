import { useState } from 'react'
import './App.css'
//we learn here why we need to use hook learn more here :/home/balajee/Documents/REACT/chai&code react/02_counter_project/README.md
//assignment: assignment.jsx me 

function App() {
  let [counter,setCounter]=useState(15) //ye example hai ek usestate hook ka jo ki uska(ya har ek hook ka bhi) variable ek array me likhata hai always

  const addvalue=()=>{
    setCounter(counter+1)
  }

  const decvalue=()=>{
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
