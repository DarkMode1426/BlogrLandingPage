

function App() {
  

  return (
    <div>
      <Main/>
    </div>
  )
}

export default App

function Main(){
  return(
  
    <div className="flex flex-col items-center py-14 px-4 w-full max-w-[380px] h-[600px] border border-red-500 bg-red-400 rounded-bl-[100px] overflow-hidden">
      <div className="flex flex-col justify-between w-[348px] h-[390px] border border-blue-400">
      <div className="flex justify-between">
        <span>Blogr</span>
        <span>Menu</span>

      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center text-center gap-6">
          <span className=" font-semibold text-[40px] leading-[125%] tracking-[-1.2px] font-[Overpass]">A modern publishing platform</span>
          <span className=" text-[20px] leading-[125%]  font-[Overpass Light]">Grow your audience and build your online brand</span>

        </div>
        <div className="flex gap-4">
          <div class="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-500 rounded-full cursor-pointer border border-blue-500">
            <span>Start for Free</span>
          </div>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-red-500 rounded-full border border-red-500 cursor-pointer">
            <span>Learn More</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}
