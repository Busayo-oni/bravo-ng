import React from 'react'
import Circle from '../assets/circle-strike.png'
import Cone from '../assets/cone.png'
import Exclus from '../assets/exlus.png'

const exclusive = () => {
  return (
    <div className='bg-[#FDC3B5] h-full gap-2 flex justify-center items-center relative  m-0 md:h-full py-8 lg:py-10 flex-col lg:gap-4 lg:h-full' >
      <h1 className='py-10 text-[70px] text-[#401408] font-vidaloka text-center  lg:leading-[0px]'>Stay<img src={Circle} className='w-20 inline lg:w-28 md:w-24' alt="" /> in  <br /><span><img src={Cone} className='w-14 inline lg:w-28 md:w-20' alt="" /></span>the<img src={Exclus} className='w-44 inline-block lg:w-60 md:w-52' alt="" /> <br />Know </h1>
      <input className='w-[19rem] h-[2rem] rounded-3xl px-4 ' type="email" name="email" id="mail" placeholder='Enter Your Email '/>
      <button className='w-[19rem] h-[2rem] rounded-3xl px-4 bg-[#f26b4e] text-white hover:bg-[#f28f7a] '>Join the list</button>
    </div>
  )
}
export default exclusive