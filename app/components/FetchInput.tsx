"use client"

import { useEffect, useState } from "react"
import ToolTipButton from "./ToolTipButton";


export default function FetchInput() {
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if(number <= 0) return

            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
            const data = await res.json();
            
            if(!data.id) {
                setUser(null)
            } else {
                setUser(data)
            }

            setLoading(false)
        }

        fetchData()

    },[number])

    const increment = () => {
        if(number >= 10) return
        setNumber((prev) => prev + 1);
    }
    const decrement = () => {
        if(number <= 1) return
        setNumber((prev) => prev - 1);
    }

  return (
    <div className="flex items-start gap-4">
        <div className="border m-6 p-6 mx-auto w-64 ">

            <h1 className="font-bold text-3xl mb-2">APIフェッチ</h1>

           <div className="min-h-24 mb-4">
            {!loading && user && (
                <div>
                    <p>{user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            )}
           </div>
           
            <button
            type="button"
            className="border p-1 select-none"
            onClick={decrement}>
                ＜
            </button>

            <input
            className="border w-10 h-[34px] text-center select-none"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))} 
            />
            
            <button
            type="button"
            className="border p-1 select-none "
            onClick={increment}>
                ＞
            </button>

        </div>
      <ToolTipButton showtext="数字を変更すると自動でユーザー情報を取得して表示します、ローディングやエラー処理も実装しました"/>
    </div>
  )
}
