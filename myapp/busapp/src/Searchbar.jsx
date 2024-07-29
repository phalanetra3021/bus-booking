import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchbar.css'; // Ensure this path is correct

const SearchBar = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (from && to && date) {
      navigate(`/results?from=${from}&to=${to}&date=${date}`);
    } else {
      alert("Please select all fields before searching.");
    }
  };

  const setPopularRoute = (routeFrom, routeTo) => {
    setFrom(routeFrom);
    setTo(routeTo);
  };

  return (
    <div className='container-fluid vh-100 coding'>
    <div className="searchbar-container d-flex align-items-end" >
      <div className="card p-4 mb-5">
        <h2 className="card-title text-center mb-4">India's No. 1 Online Bus Ticket Booking Site</h2>
        <div className="row g-3 ">
          <div className="col-md-4 ">
            <select 
              className="form-control " 
              value={from} 
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Select Departure</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col-md-4">
            <select 
              className="form-control" 
              value={to} 
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Select Destination</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Kolkata">Kolkata</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col-md-4">
            <input 
              type="date" 
              className="form-control" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <div className="col-md-12 text-center mt-4 d-flex justify-content-center " style={{marginLeft : '90px'}}>
            <button className="btn btn-primary bg-black w-50" onClick={handleSearch}>
              Search Buses
            </button>
          </div>
        </div>
      </div>
      <div className="popular-routes mt-5 d-flex flex-column align-items-end " style={{marginRight : '120px'}}>
        <h3 className="text-center" style={{marginRight : '120px'}}>Popular Routes</h3>
        <div className="d-flex justify-content-around flex-wrap " style={{width : '35%'}}>
          <button 
            className="btn-custom m-2" 
            onClick={() => setPopularRoute('Chennai', 'Bangalore')}
          >
            Chennai to Bangalore
          </button>
          <button 
            className="btn btn-info m-2" 
            onClick={() => setPopularRoute('Mumbai', 'Pune')}
          >
            Mumbai to Pune
          </button>
          <button 
            className="btn btn-info m-2" 
            onClick={() => setPopularRoute('Delhi', 'Agra')}
          >
            Delhi to Agra
          </button>
          <button 
            className="btn btn-info m-2" 
            onClick={() => setPopularRoute('Hyderabad', 'Vijayawada')}
          >
            Hyderabad to Vijayawada
          </button>
          <button 
            className="btn btn-info m-2" 
            onClick={() => setPopularRoute('Kolkata', 'Durgapur')}
          >
            Kolkata to Durgapur
          </button>
          {/* Add more popular routes as needed */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
