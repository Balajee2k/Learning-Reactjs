import { useState } from 'react'
import './App.css'
//we learn here why we need to use hook learn more here :/home/balajee/Documents/REACT/chai&code react/02_counter_project/README.md
//assignment: assignment.jsx me 

function App() {
  let [counter,setCounter]=useState(15) //ye example hai ek usestate hook ka jo ki uska(ya har ek hook ka bhi) variable ek array me likhata hai always

  //here  a interview qs can come see below ,ki agar hum 4 bar counter +1 karde to uska value kitna badhega ek click karne par ui me
  const addvalue=()=>{
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    // so iska ans hai agar aise karenge to ek hi bar value add ga kuki usestate ui me batch by batch feature update karta hai to usme ham ek hi agar 4 bar a gya to wo phirbhi ek bar hi kam karega , then agar usko ye kam sahi me 4 bar karbana hai to then do this:
    /*
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    */
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
