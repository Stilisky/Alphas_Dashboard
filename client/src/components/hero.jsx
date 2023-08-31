import React from 'react'
const Hero = () => {
  return (
    <div class="h-[700px] bg-[url('./img/hero.jpg')] bg-cover">
      <div class="h-full w-full z-10 bg-[#000000c0]">
        <div className='container mx-auto h-full flex flex-col items-center justify-center px-5'>
          <h1 className='text-5xl text-center text-white mx-10'><strong>Track insights <span className='text-[#2bb24c]'>across the web </span> without<br />  having to read everything</strong></h1>
          <h2 className='text-1xl text-center text-white mx-16 mt-3'>You tell Feedly AI what’s important to you insights from everywhere,<br /> including news sites, blogs, and newsletters</h2>
          <button type="button" className="text-white mt-3 text-xl border border-[#2bb24c] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:bg-[#2bb24c] font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
            Get started Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Hero