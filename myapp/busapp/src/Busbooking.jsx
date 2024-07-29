import React, { useState } from 'react';
import './Busbooking.css'; // Ensure this is the correct path

const lowerDeckSeats = [
  '', '', 'unavailable', 'unavailable', '',
  'unavailable', 'female', '', '', 'unavailable',
  '', '', 'unavailable', 'unavailable', ''
];

const upperDeckSeats = [
  'female', 'female', '', '', 'unavailable',
  '', '', 'unavailable', 'unavailable', '',
  '', '', 'unavailable', 'female', 'unavailable'
];

const Seat = ({ status, isSelected, onClick }) => {
  const seatClass = `seat ${status} ${isSelected ? 'selected' : ''}`;
  return <div className={seatClass} onClick={onClick}></div>;
};

const Deck = ({ title, seats, selectedSeats, handleSeatClick }) => {
  return (
    <div className="deck">
      <h2>{title}</h2>
      <div className="seating">                                                                                                                                               
        {seats.map((status, index) => (
          <Seat 
            key={index} 
            status={status} 
            isSelected={selectedSeats.includes(index)} 
            onClick={() => handleSeatClick(index, title)}
          />
        ))}
      </div>
    </div>
  );
};

const BillingPage = ({ bookedSeats, handleBack }) => {
  const seatPrice = 500; // Example seat price
  const totalCost = bookedSeats.reduce((total, seat) => total + seatPrice, 0);

  return (
    <div className="billing-page" style={{height : '80vh'}}>
      <h2>Billing Summary</h2>
      <ul className="list-group">
        {bookedSeats.map((seat, index) => (
          <li key={index} className="list-group-item">
            {seat.deck} - Seat {seat.index + 1}: {seatPrice}
          </li>
        ))}
      </ul>
      <h3>Total Cost: {totalCost}</h3>
      <button className="btn btn-primary w-20" onClick={handleBack}>Back</button>
    </div>
  );
};

const BusBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState({
    'Lower Deck': [],
    'Upper Deck': []
  });
  const [showBilling, setShowBilling] = useState(false);

  const handleSeatClick = (index, deck) => {
    const seats = deck === 'Lower Deck' ? lowerDeckSeats : upperDeckSeats;
    if (seats[index] === 'unavailable') return;

    setSelectedSeats(prevSelectedSeats => {
      const newSelectedSeats = { ...prevSelectedSeats };
      if (newSelectedSeats[deck].includes(index)) {
        newSelectedSeats[deck] = newSelectedSeats[deck].filter(seatIndex => seatIndex !== index);
      } else {
        newSelectedSeats[deck].push(index);
      }
      return newSelectedSeats;
    });
  };

  const handleConfirmBooking = () => {
    setShowBilling(true);
  };

  const handleBack = () => {
    setShowBilling(false);
  };

  const bookedSeats = [
    ...selectedSeats['Lower Deck'].map(index => ({ index, deck: 'Lower Deck', status: lowerDeckSeats[index] })),
    ...selectedSeats['Upper Deck'].map(index => ({ index, deck: 'Upper Deck', status: upperDeckSeats[index] }))
  ];

  return (
    <div className="app">
      {showBilling ? (
        <BillingPage bookedSeats={bookedSeats} handleBack={handleBack} />
      ) : (
        <>
          <div className="seat-price">
            <button className="price-button">All</button>
            <button className="price-button">1500</button>
            <button className="price-button">1683</button>
            <button className="price-button">1890</button>
          </div>
          <div className="legend">
            <p><span className="available"></span>Available</p>
            <p><span className="unavailable"></span>Unavailable</p>
            <p><span className="female"></span>Female</p>
            <p><span className="male"></span>Male</p>
            <p><span className="selected"></span>Selected</p>
          </div>
          <Deck 
            title="Lower Deck" 
            seats={lowerDeckSeats} 
            selectedSeats={selectedSeats['Lower Deck']} 
            handleSeatClick={handleSeatClick}
          />
          <Deck 
            title="Upper Deck" 
            seats={upperDeckSeats} 
            selectedSeats={selectedSeats['Upper Deck']} 
            handleSeatClick={handleSeatClick}
          />
          <div className="text-center mt-4">
            <button className="btn btn-primary bg-black w-100" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BusBooking;
