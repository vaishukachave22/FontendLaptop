// src/components/LaptopList.js
import React, { useEffect, useState } from 'react';
import { getAllLaptops, deleteLaptop } from '../Services/laptopService';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    loadLaptops();
  }, []);

  const loadLaptops = () => {
    getAllLaptops()
      .then((response) => setLaptops(response.data))
      .catch((error) => console.log('Error loading laptops:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this laptop?')) {
      deleteLaptop(id)
        .then(() => loadLaptops())
        .catch((error) => console.log('Error deleting:', error));
    }
  };

  return (
    <div className="card shadow p-3 mt-4">
      <h4 className="text-center mb-3">Laptop List</h4>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {laptops.length > 0 ? (
              laptops.map((laptop) => (
                <tr key={laptop.id}>
                  <td>{laptop.id}</td>
                  <td>{laptop.name}</td>
                  <td>{laptop.brand}</td>
                  <td>{laptop.price}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(laptop.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No laptops found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaptopList;
