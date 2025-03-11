// src/App.js
import React, { useState } from 'react';
import LaptopForm from './Components/LaptopForm';
import LaptopList from './Components/LaptopList';
import ImportCSV from './Components/ImportCSV';

const App = () => {
  const [laptopsUpdated, setLaptopsUpdated] = useState(false);

  const handleLaptopAdded = () => {
    setLaptopsUpdated(!laptopsUpdated); // Toggle update state
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Laptop Management</h1>
      <ImportCSV onImport={() => setLaptopsUpdated(!laptopsUpdated)} />
      <LaptopForm onLaptopAdded={handleLaptopAdded} />
      <LaptopList />
    </div>
  );
};

export default App;
