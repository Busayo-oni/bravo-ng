import React from 'react'
import Blue from '../assets/blue.png'
import Pink from '../assets/pink.png'
import '../app.css'

const Popular = () => {
  return (
    <div className='popular'>
        <div className='flex flex-col  items-center w-[100%] gap-4 lg:items-start '>
            <h1 className='font-vidaloka text-[50px] lg:text-[90px] '>What's Popular</h1>
            <b className='text-[14px] lg:text-[20px] '>Popular energy drink, Bravo the choice of millions</b>
            <button className='bg-[#4A869E] text-white w-[70%] h-[40px] rounded-full hover:bg-[#A8D5E0] '>Get Started</button>
        </div>
        <div className='flex gap-4 items-center justify-center w-[100%] '>
            <img className='w-[40%] ' src={Blue} alt="" />
        <img className='w-[40%] ' src={Pink} alt="" /></div>

    </div>
  )
}


export default Popular