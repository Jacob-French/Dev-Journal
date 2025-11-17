export default function FlexRow({ children, className }){

  return(
    <div className={`w-full h-10 ${className}`}>
      {children}
    </div>
  )
}

export function FlexRowSmall({ children, className }){

  return(
    <div className={`w-full h-6 ${className}`}>
      {children}
    </div>
  )
}