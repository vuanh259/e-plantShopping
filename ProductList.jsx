import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const plants = [
    { name: 'Snake Plant', cost: 15, image: 'snake.jpg', description: 'Purifies the air.' },
    { name: 'Monstera', cost: 25, image: 'monstera.jpg', description: 'Beautiful split leaves.' }
  ];

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(plant => (
          <div key={plant.name} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.cost}</p>
            <p>{plant.description}</p>
            <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
