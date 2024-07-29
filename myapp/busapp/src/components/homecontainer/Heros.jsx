import React from 'react';


import './Heros.css'
import backgroundImage from '../../assets/bg1.jpg';
import busImage from '../../assets/bus3.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>Reserve Your <span className="highlight">Bus Tickets</span> Now</h1>
        <p>
          Find and book your bus tickets with just a few clicks. We offer a wide range
          of bus routes and schedules to suit your needs.
        </p>
        <Link to={"/search"}>
        <button className="reserve-button"><a href='/search'>Reserve Seat Now</a></button>
        </Link>
      </div>
      <img src={busImage} alt="Bus" className="bus-image" />
    </div>
  );
};

export default HeroSection;
