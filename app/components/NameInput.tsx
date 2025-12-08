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
        <h2 className="text-2xl font-semibold mb-2">
            {submittedText === "" ? "ここに表示されます" : submittedText}
        </h2>
        <input  
        type="text" 
        placeholder="入力してください"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit" className="m-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transform hover:scale-105 transition duration-200">送信</button>
    </form>
    <ToolTipButton showtext="入力値と表示用の値を分けて管理してみました"/>
   </div>
  )
}
