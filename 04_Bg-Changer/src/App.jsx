import { useState } from 'react'

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> //ye bottomme me line fix walal code hai 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          
          <button
           onClick={()=>setcolor("red")}
           className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg"
          onClick={()=>setcolor("green")}
          style={{backgroundColor:"green"}}
          >Green
          </button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg"
          onClick={()=>setcolor("black")}
          style={{backgroundColor:"black"}}
          >Black
          </button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg"
          onClick={()=>setcolor("blue")}
          style={{backgroundColor:"blue"}}
          >Blue
          </button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg"
          onClick={()=>setcolor("pink")}
          style={{backgroundColor:"pink"}}
          >Pink
          </button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg"
          onClick={()=>setcolor("white")}
          style={{backgroundColor:"black"}}
          >White
          </button>
          

        </div>

        </div>
      </div>
    </>
  )
}

export default App
