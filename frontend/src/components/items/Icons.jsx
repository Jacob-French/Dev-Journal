export function MenuIcon({ className }){
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  )
}

export function MoreIcon({ className }){
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor">
      <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
    </svg>
  )
}

export function MinimizeIcon({ className }){
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      height="24px" 
      viewBox="0 -960 960 960" 
      width="24px" 
      fill="currentColor">
      <path d="M240-440v-80h480v80H240Z"/>
    </svg>
  )
}

export function Circle({ className }){
  return (
  <svg className={className} width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="93" cy="93" r="93" fill="currentColor"/>
    <defs>
      <clipPath id="clip0_1_2">
      <rect width="186" height="186" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  )
}

export function Line({ className }){
  return (
    <svg 
      className={className} 
      preserveAspectRatio="none" 
      width="186" 
      height="186" 
      viewBox="0 0 186 186" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <line x1="93.5" y1="2.15032e-08" x2="93.5" y2="186" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}