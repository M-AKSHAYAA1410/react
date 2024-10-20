import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './sugar.css'; // Import your CSS file

const Sugar = () => {
  const [sugarItems, setSugarItems] = useState([]);

  useEffect(() => {
    // Mock data for sugar items
    const mockSugarItems = [
      {
        "_id": "1",
        "name": "Brown Sugar",
        "description": "Organic brown sugar for baking.",
        "price": 250,
        "image": "brown_sugar.jpeg"
      },
      {
        "_id": "2",
        "name": "White Sugar",
        "description": "Refined white sugar for sweetening.",
        "price": 180,
        "image": "white_sugar.jpeg"
      },
      {
        "_id": "3",
        "name": "Cane Sugar",
        "description": "Pure cane sugar with natural sweetness.",
        "price": 220,
        "image": "cane_sugar.jpeg"
      },
      {
        "_id": "4",
        "name": "Powdered Sugar",
        "description": "Fine powdered sugar for desserts.",
        "price": 150,
        "image": "powered_sugar.jpeg"
      }
    ];
    setSugarItems(mockSugarItems); // Setting mock data
  }, []);

  return (
    <div className="sugar-container">
      <h2 className="sugar-title">Sugar</h2>
      <div className="sugar-grid">
        {sugarItems.map((sugar) => (
          <div className="sugar-item" key={sugar._id}>
            <Link to={`/sugar/${sugar._id}`}>
              <img className="sugar-image" src={sugar.image} alt={sugar.name} />
              <div className="sugar-info">
                <h3>{sugar.name}</h3>
                <p>{sugar.description}</p>
                <p className="sugar-price">Price: ₹{sugar.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sugar;
