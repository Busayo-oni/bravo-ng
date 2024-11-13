import React from 'react'
import image from '../assets/image.png'
import Guard from '../assets/guard.png'

function Flavor () {
  return (
    
   <section className='bg-[#f4d2c5] h-[70vh] md:h-[80vh] flex p-[50px] '>
    <div className='flavor-contain'>
        
        <img src={image} alt='Canned drink' className='w-[60%] mb-[-22px] lg:w-[30%] md:w-[40%] my-[0px] md:mb-[-30px] md:left-[3em] lg:my-[-39px] lg:left-[11em] relative left-[em] z-10' />

        <h1 className='text-[45px] font-vidaloka leading-[45px] relative md:text-[80px] md:leading-[70px] lg:text-[120px] lg:leading-[90px] '>Flavor <span className=' relative '>and</span> Success <br />in Every Can <img src={Guard} alt="" className='w-[20%] inline relative right-6 md:right-16 ' /></h1>
    </div>
   </section>
  )
}

export default Flavor
