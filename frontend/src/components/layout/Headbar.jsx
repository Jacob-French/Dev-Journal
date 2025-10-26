import { JaLink, JaLogo } from "../items/BaseItems";
import { MenuIcon } from "../items/Icons";


export default function Headbar({ pages }){

  return (
    <div className="flex flex-row justify-start px-10 h-15 border-b border-space-300">
      <div className="w-50 flex flex-col justify-center">
        <JaLogo />
      </div>
      <div className="grow-1 flex-row justify-evenly items-center hidden md:flex">
        {pages.map(page => (
          <div key={page.id}>
            <JaLink to={page.route}>{page.name}</JaLink>
          </div>
        ))}
      </div>
      <div className="h-full ml-auto cursor-pointer md:hidden">
      <MenuIcon className={"w-full h-full text-space-400"}/>
    </div>
    </div>
  )
}