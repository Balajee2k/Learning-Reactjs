import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
//ab is card ka dono title alag alag chaihiye to yhi start hota hai props ka khel : read more in readme
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-500 p-10 mb-1 '>Tailwind css test hai bsdk</h1>
    <Card username="balajee" btnText="click me "/>
    <Card username="anushka" />
    </>
  )
}

export default App
