// src/components/LaptopForm.js
import React, { useState } from 'react';
import { createLaptop } from '../Services/laptopService';

const LaptopForm = ({ onLaptopAdded }) => {
  const [laptop, setLaptop] = useState({ name: '', brand: '', price: '' });

  const handleChange = (e) => {
    setLaptop({ ...laptop, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLaptop(laptop)
      .then(() => {
        setLaptop({ name: '', brand: '', price: '' });
        onLaptopAdded();
      })
      .catch((error) => console.log('Error creating laptop:', error));
  };

  return (
    <div className="card shadow p-3 mb-4">
      <h4 className="text-center mb-3">Add New Laptop</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"><b>Name</b></label>
          <input
            name="name"
            className="form-control"
            placeholder="Enter laptop name"
            value={laptop.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Brand</b></label>
          <input
            name="brand"
            className="form-control"
            placeholder="Enter laptop brand"
            value={laptop.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Price</b></label>
          <input
            name="price"
            type="number"
            className="form-control"
            placeholder="Enter laptop price"
            value={laptop.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add Laptop
          </button>
        </div>
      </form>
    </div>
  );
};

export default LaptopForm;
