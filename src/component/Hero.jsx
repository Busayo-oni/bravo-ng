import React from 'react';
import './Hero.css';
import heroImage from '../assets/pexels-minan1398-793010.jpg'; // Import image

const HeroSection = () => { 
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Bravo Energy Image" />
      </div>
      <div className="hero-content">
        <div className="text-content">
          <h1>Bravo Energy</h1>
          <p>Unleash the power within! Feel your daily boost of extraordinary wellness with Bravo Energy</p>
        </div>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;