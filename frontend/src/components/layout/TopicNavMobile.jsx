export default function TopicNavMobile(){
  return(
    <div className="relative border border-pink-300 box-border w-full">
      <div className="absolute left-0 h-full w-50 box-border border-r border-space-300 bg-space-200 grid grid-cols-2">
        <div className="border border-red-300"></div>
        <div className="border border-red-300"></div>
      </div>
      <div className="pl-10">
        <p>
          This is a paragraph to test how the layout of content in this section will work. The purpose of this paragraph is to take up space in the main content section of the mobile topic explorer so that when I add the mobile menu in I can see how its presence affects the rest of the content such as this content right here.
        </p>
      </div>
    </div>
  )
}