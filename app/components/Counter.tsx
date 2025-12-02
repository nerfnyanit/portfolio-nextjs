"use client"

import { useState } from "react";
import ToolTipButton from "./ToolTipButton";

type CounterProps = {
    step:number,
    label:string
}


export default function Counter({step,label}:CounterProps) {
    const [count,setCount] =useState(0);

    const addCount = () => setCount(prev => prev + step);

    const Reset = () => setCount(0);

  return (
  <div className="flex gap-4 items-start">
    <div className="p-4 border w-64 mx-auto">
    <h2 className="text-2xl font-semibold mb-2">カウント</h2>
    <p className="text-3xl font-bold mb-4">{count}</p>
    <button 
    onClick={addCount}
    className="m-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transform hover:scale-105 transition duration-200"
    >{label}</button>
    <button 
    onClick={Reset}
    className="m-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transform hover:scale-105 transition duration-200"
    >reset</button>
    </div>
    <ToolTipButton showtext="useStateで値を操作してPropsで値を簡単に操作できます"/>
  </div>
  )
}
