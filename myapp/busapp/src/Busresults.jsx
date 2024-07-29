import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Busresults.css';
// import starIcon from './star-icon.png'; // Add an appropriate path for the star icon
// import wifiIcon from './wifi-icon.png'; // Add an appropriate path for the wifi icon
// import acIcon from './ac-icon.png'; // Add an appropriate path for the AC icon
// import chargerIcon from './charger-icon.png'; // Add an appropriate path for the charger icon

const BusResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const from = query.get('from');
  const to = query.get('to');
  const date = query.get('date');

  // Expanded dummy data with more bus entries
  const results = [
    {
      id: 1,
      name: 'SST Limoliner',
      departure: '22:30',
      duration: '06h 45m',
      arrival: '05:15',
      date: '25-Jul',
      rating: 4.7,
      price: 699,
      seatsAvailable: 15,
      img: 'https://i.pinimg.com/originals/11/6e/8d/116e8db54b0d2e3b3f43c98a2f0cbc3f.png',
    },
    {
      id: 2,
      name: 'Volvo Express',
      departure: '21:00',
      duration: '07h 00m',
      arrival: '04:00',
      date: '25-Jul',
      rating: 4.5,
      price: 799,
      seatsAvailable: 10,
      img: 'https://i.pinimg.com/originals/11/6e/8d/116e8db54b0d2e3b3f43c98a2f0cbc3f.png',
    },
    {
      id: 3,
      name: 'Kochi Express',
      departure: '18:00',
      duration: '08h 30m',
      arrival: '02:30',
      date: '29-Jul',
      rating: 4.2,
      price: 650,
      seatsAvailable: 20,
      img: 'https://i.pinimg.com/originals/11/6e/8d/116e8db54b0d2e3b3f43c98a2f0cbc3f.png',
    },
    // Add more dummy data entries as needed...
  ];

  return (
    <div className="bus-results-container">
      <div className="results-header">
        <h3>{results.length} Buses found from {from} to {to} on {date}</h3>
      </div>
      <div className="results-list">
        {results.map(bus => (
          <div key={bus.id} className="card mb-3 shadow-sm bus-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={bus.img} className="img-fluid rounded-start" alt="Bus" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="badge">Praveen Assured</div>
                  <h5 className="card-title">{bus.name}</h5>
                  <div className="rating">
                    {/* <img src={starIcon} alt="Rating" width="20" /> */}
                    <span>{bus.rating}</span>
                  </div>
                  <div className="departure-arrival">
                    <p className="card-text">Departure: {bus.departure}</p>
                    <p className="card-text">Arrival: {bus.arrival}</p>
                  </div>
                  <p className="card-text">Duration: {bus.duration}</p>
                  <p className="card-text">Date: {bus.date}</p>
                  <p className="price">INR {bus.price}</p>
                  <p className="seats-available">{bus.seatsAvailable} Seats Available</p>
                  {/* <div className="icons">
                    {/* <img src={wifiIcon} alt="WiFi" width="20" />
                    <img src={acIcon} alt="AC" width="20" />
                    <img src={chargerIcon} alt="Charger" width="20" /> */}
                    {/* Add more icons as needed */}
                  {/* </div>  */}
                  <a 
                    href={`/book?busId=${bus.id}`} 
                    className="btn btn-primary"
                  >
                    Show Seats
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusResults;

