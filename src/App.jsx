import React, { useState } from "react";
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("green")} style={{backgroundColor:"green"}}>Green</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("indigo")} style={{backgroundColor:"indigo"}}>Indigo</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("lavender")} style={{backgroundColor:"lavender"}}>Lavender</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("white")} style={{backgroundColor:"white"}}>White</button>
            <button className="outline-nonde px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("gray")} style={{backgroundColor:"gray"}}>Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
