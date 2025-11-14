import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

export function ContentCode({ content }){

  const codeString = "var test = 'jacob is amazing';"
  console.log("title: ", content.title)
  console.log("language: ", content.language)

  return (
    <div className={`
      border-1 border-space-300 text-xl bg-space-200 rounded-xl
      mx-10 my-10
    `}>
      {content.title && (
      <>
        <span className="text-base text-space-800 font-light font-[Poppins] px-5 py-3 block">{content.title}</span>
        <hr className="text-space-300"></hr>
      </>
      )}
      <SyntaxHighlighter 
      language={content.language}
      style={tomorrow} 
      customStyle={{ 
        background: 'transparent',
      }}
      codeTagProps={{
        style: {
          fontSize: '0.875rem',
        }
      }}>
        {content.code}
      </SyntaxHighlighter>
    </div>
  )
}

/*
css
javascript
json
jsx
markup
php
python
typescript
*/