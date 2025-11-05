import { useState } from "react"

export default function ItemNavMobile({ items, children }){
  const [hidden, setHidden] = useState(false)

  const hiddenPanelClass = 
  `
    nav-grid absolute left-0 h-full box-border border-r border-space-300 bg-space-200 
    grid grid-cols-[calc(0.25rem_*_30)_calc(0.25rem_*_10)]
    -translate-x-30
    transition-transform duration-500
  `

  const visiblePanelClass = 
  `
    nav-grid absolute left-0 h-full box-border border-r border-space-300 bg-space-200 
    grid grid-cols-[calc(0.25rem_*_30)_calc(0.25rem_*_10)]
    transition-transform duration-500
  `

  function toggleHidden(){
    setHidden(prev => !prev)
  }
  
  return(
    <div className="item-nav-mobile relative border border-pink-300 box-border w-full h-full">
      <div className={hidden ? hiddenPanelClass : visiblePanelClass}>
        <div className="border border-cyan-300 h-10"></div>
        <div className="border border-cyan-300 h-10">
          <button className="border w-full h-full cursor-pointer font-bold" onClick={toggleHidden}>...</button>
        </div>
      </div>
      <div className="pl-10">
        {children}
      </div>
    </div>
  )
}