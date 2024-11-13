import React from 'react';
import bravoImg1 from "../assets/bravoImg1.png";
import './OurStory.css';

const OurStory = () => {
  return (
    <div className='our-story-container'>
      <div className='our-story-text'>
        <h1 className='font-vidaloka text-[30px] font-extrabold '>Our Story</h1>
        <p className='font-vidaloka  '>Take a look at how it all began</p>
      </div>
      <img 
        src={bravoImg1} 
        alt='bravo img' 
        className='our-story-image' 
      />
    </div>
  )
}

export default OurStory