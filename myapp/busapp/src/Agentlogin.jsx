import React, { useState } from 'react';
import './Agentlogin.css';
import { Navigate, useNavigate } from 'react-router-dom';

const AgentLoginRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    busModel: '',
    address: '',
    contactDetails: '',
    state: '',
    country: '',
    pincode: '',
    email: '',
    mobileNo: '',
    agreeTerms: false,
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Bus Model:</label>
        <input type="text" name="busModel" value={formData.busModel} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Contact Details:</label>
        <input type="text" name="contactDetails" value={formData.contactDetails} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Pincode:</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Mobile No:</label>
        <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
      </div>
      <div className="form-group checkbox-label">
        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
        <label>I agree to the terms and conditions</label>
      </div>
      {/* <button type="submit" onClick={() =>navigate('/')} className="btn btn-primary btn-block"></button> */}
      <button type="submit" onClick={() => navigate('/')}>Submit</button>
    </form>
  );
};

export default AgentLoginRequest;
