// src/components/ImportCSV.js
import React from 'react';

const ImportCSV = ({ onImport }) => {
  const handleImport = () => {
    // Implement CSV import logic here (not covered in this example)
    alert('CSV Import functionality to be implemented');
    onImport();
  };

  return (
    <div className="text-center mt-4">
      <button className="btn btn-primary btn-lg" onClick={handleImport}>
        📥 Import Laptops from CSV
      </button>
    </div>
  );
};

export default ImportCSV;
