/*
  DESCRIPTION: 
  A navigation system for content organised into seperate headings. Headings can also be organised into families.

  DEPENDENCIES:
    (1) - React Router
      This component depends on the react router and should be inside the browser router tags. 

  PROPS: 
  (1) - items
    A list of headings or families to populate the navigation panel. It is structured as a list of objects like so: 
    {type: <heading / family>, content: <object representing heading or family>}
  (2) - isMobile
    Tells the component to use desktop or mobile layout.
  (3) - children
    The children of this component should be the content. This is so the content can be placed next to the nav bar for wide screens or behind the nav bar for narower mobile screens. The content will use routing to match up with the selected heading. 
*/

export default function Explorer({ items, isMobile, children }){
  return (
    <div className="border border-pink-300 w-full h-full">

    </div>
  )
}