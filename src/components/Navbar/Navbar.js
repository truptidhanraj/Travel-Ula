import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src='https://www.travelunbounded.com/logo.webp' alt='img' className='logo'/>
        </div>
      <ul>
        <li>
          <Link to="/" className='active'>Home</Link>
        </li>
        <li>
          <Link to="/Itinerary">Itinerary</Link>
        </li>
        <li>
          <Link to="/costs">Costs</Link>
        </li>
        <li>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/payment-terms-and-cancellation-policy">
            Payment Terms and Cancellation Policy
          </Link>
        </li>
        <li>
          <Link to="/inclusions">Inclusions</Link>
        </li>
        <li>
          <Link to="/exclusions">Exclusions</Link>
        </li>
      </ul>
      <button className='btn'>Book Your Journey</button>
    </nav>
  );
};

export default Navbar;