// src/services/laptopService.js

const laptops = [
    { id: 1, name: 'Laptop A', brand: 'Brand X', price: 1000 },
    { id: 2, name: 'Laptop B', brand: 'Brand Y', price: 1500 },
  ];
  
  export const getAllLaptops = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: laptops }), 500);  // Simulate an API call
    });
  };
  
  export const createLaptop = (laptop) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        laptops.push({ ...laptop, id: laptops.length + 1 });
        resolve();
      }, 500);
    });
  };
  
  export const deleteLaptop = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = laptops.findIndex((laptop) => laptop.id === id);
        if (index !== -1) {
          laptops.splice(index, 1);
          resolve();
        }
      }, 500);
    });
  };
  