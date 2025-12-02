"use client"

import { useState } from "react"
import ToolTipButton from "./ToolTipButton";

export default function NameInput() {
    const [text,setText] = useState("");
    const [submittedText,setSubmittedText] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text.trim() === "") return;

        setSubmittedText(text);
        setText("");
    }

  return (
   <div className="items-start flex gap-4 ">
    
    <form onSubmit={handleSubmit} className="border p-4 mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-2">入力</h2>
        <h1 className="border">{submittedText}</h1>
        <input  
        type="text" 
        placeholder="入力してください"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit" className="m-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transform hover:scale-105 transition duration-200">送信</button>
    </form>
    <ToolTipButton showtext="送信ボタンで入力値を表示し、空入力は無視します"/>
   </div>
  )
}
