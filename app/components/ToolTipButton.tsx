"use client"

import { useState } from "react"

type ToolTipButtonProps = {
    showtext:string
}

export default function ToolTipButton({showtext}:ToolTipButtonProps) {
    const [showTooltip,setshowTooltip] = useState(false);

  return (
    <>
    <div className="relative p-1 mt-15 border rounded-xl  transform hover:scale-105 transition duration-200">
        <button
        onClick={() => setshowTooltip(prev => !prev)}
        className="px-4 py-2">
            説明文
        </button>

        {showTooltip && (
            <div>
                {showtext}
            </div>
        )}
    </div>
    </>
  )
}
