import { useLocation } from "react-router"
import { useApi } from "../../../context/ApiContext"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import { ContentText, ContentTitle } from "./DynamicContent"

export default function ContentPanel(){

  const api = useApi()
  const location = useLocation()
  const [content, setContent] = useState(null)

  const test = <ContentText />

  function getContentRoute(){
    const path = location.pathname
    const term = "journal"
    const index = path.indexOf(term)
    const contentRoute = path.slice(index + term.length)
    return contentRoute
  }

  function buildContentComponents(content_zone){
    const contentArray = []

    content_zone.forEach(item => {
      switch (item.__component){
        case "content-blocks.title":
          contentArray.push(<ContentTitle content={item} />)
          break
        case "content-blocks.text":
          contentArray.push(<ContentText content={item} />)
          break
      }
    })

    return contentArray
  }

  useEffect(() => {
    const route = getContentRoute()
    
    api.getContent(route).then(response => {
      if(response && 'content_zone' in response){
        setContent(buildContentComponents(response.content_zone))
      }
      else{
        setContent([])
      }
    })
  }, [location])

  return (
    <div className="border border-sky-600 w-full h-full px-5 overflow-y-auto scrollbar-dark">
      {content && content.map((item, id) => (
        <div key={id}>
          {item}
        </div>
      ))}
    </div>
  )
}