import ReactMarkdown from 'react-markdown'

export function ContentTitle({ content }){

  return (
    <div>
      <h2>{content.title}</h2>
    </div>
  )
}

export function ContentText({ content }){

  return (
    <div>
      <ReactMarkdown>
        {content.markdown}
      </ReactMarkdown>
    </div>
  )
}