import { useParams } from "react-router"
import TopicNav from "./TopicNav"
import { useApi } from "../../context/ApiContext"
import { useEffect, useState } from "react"

export default function TopicExplorer(){
  
  const api = useApi()
  const { topic } = useParams()

  const [headings, setHeadings] = useState(null)
  const headingsAndFamilies = getHeadingsAndFamilies(headings)

  function getHeadingsAndFamilies(headings){
    if(headings){
      let lastFamily = null
      let headingsAndFamilies = []
      headings.forEach(heading => {
        if(heading.family !== lastFamily){
          lastFamily = heading.family
          headingsAndFamilies.push({type: 'family', content: heading.family})
        }
        headingsAndFamilies.push({type: 'heading', content: heading})
      })
      return headingsAndFamilies
    }
    else{
      return null
    }
  }

  useEffect(() => {
    api.getHeadingsByTopic(topic).then(response => {
      setHeadings(response)
    })
  }, [topic])
  
  return (
    <div className="text-space-600 border-fuchsia-400 h-full flex flex-row justify-start">
      <TopicNav headings={headingsAndFamilies} />
    </div>
  )
}