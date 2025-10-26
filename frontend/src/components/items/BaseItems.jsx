import { NavLink } from "react-router"


export function JaLink({ children, to }){
  return (
    <div className="hover:-translate-y-1 transition-transform ease-in duration-300">
      <NavLink to={to}>
        <span className={`
          font-[Poppins] text-md text-gray-100 font-light cursor-pointer
        `}>{children}</span>
      </NavLink>
    </div>
  )
}

export function JaLogo(){
  return (
    <div>
      <span className={`
        font-exo-2 text-xl font-normal text-gray-100
      `}><span className="font-semibold text-pink-400"> &lt; &gt; </span> Dev Journal</span>
    </div>
  )
}