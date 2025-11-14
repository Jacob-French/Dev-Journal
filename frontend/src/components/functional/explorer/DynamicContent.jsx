import ReactMarkdown from 'react-markdown'
import './DynamicContent.css'

export function ContentTitle({ content }){

  return (
    <div className="py-3">
      <h2 className="font-[Poppins] font-normal text-xl text-space-900">{content.title}</h2>
    </div>
  )
}

export function ContentText({ content }){

  return (
    <div className="markdown">
      <ReactMarkdown>
        {content.markdown}
      </ReactMarkdown>
    </div>
  )
}