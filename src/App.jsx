import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
   <div className='rounded-lg text-center shadow w-[98%] md:w-[40%] mx-auto mt-[4rem] p-[0.5rem]'>
    <div className='bg-yellow-400 font-mono mb-[1rem] text-[3rem] rounded-lg text-center p-[5rem]'>{counter}</div>
    <button className='bg-gray-100 w-[5rem] mr-[4rem] font-bold text-[1.5rem] rounded cursor-pointer' onClick={()=>{
      setCounter(counter-1)
    }}>-</button>
    <button className='bg-gray-100 mb-[2rem] w-[5rem] font-bold text-[1.5rem] rounded cursor-pointer' onClick={()=>{
      setCounter(counter+1)
    }}>+</button><br />
    <b className='text-yellow-400'>~Counter App~</b>
   </div>
  )
}

export default App
