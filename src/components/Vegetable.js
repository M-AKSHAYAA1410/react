import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Vegetable.css'; // Import your CSS file

const Vegetable = () => {
  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    // Mock data for vegetables
    const mockVegetable = [
      {
        "_id": "1",
        "name": "Small Onion",
        "description": "Fresh and healthy broccoli.",
        "price": 250,
        "image": "Small Onion.jpg"
      },
      {
        "_id": "2",
        "name": "Mint",
        "description": "Organic spinach leaves.",
        "price": 180,
        "image": "Mint.jpeg"
      },
      {
        "_id": "3",
        "name": "Carrot",
        "description": "Crunchy and nutritious carrots.",
        "price": 190,
        "image": "carrot.jpeg"
      },
      {
        "_id": "4",
        "name": "Tomato",
        "description": "Ripe and juicy tomatoes.",
        "price": 100,
        "image": "tomato.jpg"
      },
      {
        "_id": "5",
        "name": "millet",
        "description": "Versatile potatoes for various dishes.",
        "price": 175,
        "image": "mil.jpg"
      },
      {
        "_id": "6",
        "name": "Hot-green-chillies",
        "description": "Fresh cauliflower heads.",
        "price": 50,
        "image": "Hot-green-chillies.jpg"
      },
      {
        "_id": "7",
        "name": "Fresh-onions",
        "description": "Fresh cauliflower heads.",
        "price": 150,
        "image": "fresh-onions.jpg"
      },
      {
        "_id": "8",
        "name": "Curry Leaf",
        "description": "Fresh cauliflower heads.",
        "price": 150,
        "image": "curry leaf.jpg"
      },
      {
        "_id": "9",
        "name": "Coriander",
        "description": "Fresh cauliflower heads.",
        "price": 170,
        "image": "corianderPlant.jpg"
      },
      {
        "_id": "10",
        "name": "Capsicum",
        "description": "Fresh cauliflower heads.",
        "price": 150,
        "image": "capi.jpeg"
      },
      {
        "_id": "11",
        "name": "Beetroot",
        "description": "Fresh cauliflower heads.",
        "price": 250,
        "image": "beet.jpeg"
      },
      {
        "_id": "12",
        "name": " Green Beans",
        "description": "Fresh cauliflower heads.",
        "price": 250,
        "image": "beans.jpeg"
      },
    ];
    setVegetable(mockVegetable); // Setting mock data
  }, []);

  return (
    <div className="vegetable-container">
      <h2 className="vegetable-title">Vegetables</h2>
      <div className="vegetable-grid">
        {vegetable.map((vegetable) => (
          <div className="vegetable" key={vegetable._id}>
            <Link to={`/vegetable/${vegetable._id}`}> {/* Wrap image in a Link for navigation */}
              <img className="vegetable-image" src={vegetable.image} alt={vegetable.name} />
              <div className="vegetable-info">
                <h3>{vegetable.name}</h3>
                <p>{vegetable.description}</p>
                <p className="vegetable-price">Price: ₹{vegetable.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetable;
