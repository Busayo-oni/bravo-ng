import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className='footerSection'>
       <div className='Footer'>

       <div className='shippinginformation'>
      <ul>
      <h4 className='bold'>Shipping Information</h4>
                <li><a href='#'>Shipping to United States</a></li>
                <li><a href='#'>Shipping to Netherlands</a></li>
                <li><a href='#'>Shipping to United Kindgom</a></li>
                <li><a href='#'>Shipping to Spain</a></li>
                <li><a href='#'>Shipping to Germany</a></li>
      </ul>
      </div>

      <div className='Knowledge Hub'>
      <ul>
      <h4 className='bold'>Knowledge Hub</h4>
                <li><a href='#'>Logistics Know How</a></li>
                <li><a href='#'>Logistics News</a></li>
                <li><a href='#'>Local Solutions</a></li>
                <li><a href='#'>Logistics Trends and Events</a></li>
                <li><a href='#'>Customers Stories</a></li>
      </ul>
      </div>

      <div className='Useful links'>  
      <ul>
      <h4 className='bold'>Useful Links</h4>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Terms and Conditions</a></li>
                <li><a href='#'>Why Us?</a></li>
                <li><a href='#'>Careers</a></li>
      </ul>
      </div>

      <div className='Contact'>
      <ul>
      <h4 className='bold'>Contact</h4>
                <li><a href='#'>Company Headquarters</a></li>
                <li><a href='#'>United States of America</a></li>
                <li><a href='#'>New York</a></li>
                <li><a href='#'>2311 DP DEN HAAG </a></li>
                <li><a href='#'>buma@gmail.com</a></li>
      </ul>
      </div>

      <div className='footerbuttom'></div>
       </div>
       <div className='Developer'>
        @2024 Bravo. All Rights Reserved.
        <h4>Design by <span>MART,</span> <span>UYI,</span> <span>DeOracleEdge,</span> <span>IMAN</span></h4>
       </div>
    </footer>
    
  )
}

export default Footer
