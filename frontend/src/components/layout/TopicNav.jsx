export default function TopicNav({ headings }){
  return (
    <div className="w-50 bg-space-200 border-r border-space-300 p-[var(--sd-gap-mid)]">
      {headings && headings.map((heading, id) => (
        <div key={id}>
          {id !== 0 && heading.type === 'family' ? 
            <div className="h-[var(--sd-gap-mid)] flex flex-col justify-center my-4">
              <hr className="text-space-600" />
            </div> : null}
          {heading.type === 'family' ?
            <h2 className="font-league-spartan uppercase text-xs text-space-600">{heading.content}</h2> : 
            <h3 className={`
              font-[Poppins] text-space-800 text-sm
              border border-transparent px-2 py-1 my-1 rounded-xl box-content cursor-pointer
              hover:border hover:border-space-400 hover:bg-space-300 hover: shadow-md
            `}>{heading.content.title}</h3>
          }
          <h2>{heading.title}</h2>
        </div>
      ))}
    </div>
  )
}