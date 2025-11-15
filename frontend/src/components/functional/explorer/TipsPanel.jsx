import { useEffect, useState } from "react";
import { useApi } from "../../../context/ApiContext";
import { TipsIcon } from "../../items/Icons";

export default function TipsPanel({ title }){

  const api = useApi()
  const [tips, setTips] = useState(null)
  
  useEffect(() => {
    title && api.getTips(title).then(response => {
      console.log("tips: ", response)
      setTips(response)
    })
  }, [title])
  

  return(
    <div className={`
      w-full h-full
      bg-space-200 border-1 border-space-300 rounded-md
    `}>
    
    <div className="border-b-1 border-space-300 h-10 flex flex-row justify-start items-center">
      <div className="w-10 flex flex-col justify-center items-center">
        <TipsIcon className="text-space-700" />
      </div>
      <span className="block font-league-spartan uppercase text-md text-space-700">tips</span>
    </div>
    <div className="p-3">
      {tips && tips.map((tip, id) => (
        <button key={id} className={`
          font-[Poppins] text-sm text-space-700 cursor-pointer mb-[var(--sd-gap-small)]
          bg-transparent hover:bg-space-300 border-1 border-transparent 
          hover:border-space-400 rounded-lg px-2 py-1 w-full text-left
        `}>
          {tip.title}
        </button>
      ))}
    </div>

    </div>
  )
}