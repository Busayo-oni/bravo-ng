import React from 'react'
import './Sea.css'
import pepsi from '../assets/pepsi.png'

function Sea(){
  return (
    <section className='sea-container'>
    <div className='image'>
     <img src={pepsi} alt="pepsi" /> 
    </div>

    <div className='Information'>
        <h2>Sea Breeze</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem omnis esse, perferendis enim aliquam laudantium? Nesciunt quibusdam iure quas eum veniam. Iusto ut officiis incidunt exercitationem aut quos aspernatur?</p>
        <button className='btn'>Read More</button>
    </div>
    </section>
  )
}

export default Sea
