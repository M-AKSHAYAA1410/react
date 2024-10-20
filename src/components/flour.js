import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './flour.css'; // Import your CSS file

const Flour = () => {
  const [flourItems, setFlourItems] = useState([]);

  useEffect(() => {
    // Mock data for flour items
    const mockFlourItems = [
      {
        "_id": "1",
        "name": "All-purpose Flour",
        "description": "Perfect for baking and cooking.",
        "price": 599,
        "image": "all-purpose-flour.jpeg"
      },
      {
        "_id": "2",
        "name": "Whole Wheat Flour",
        "description": "Nutritious flour made from whole wheat grains.",
        "price": 250,
        "image": "whole-wheat-flour.jpeg"
      },
      {
        "_id": "3",
        "name": "Rice Flour",
        "description": "Fine flour made from ground rice.",
        "price": 200,
        "image": "rice-flour.jpeg"
      },
      {
        "_id": "4",
        "name": "Corn Flour",
        "description": "Fine flour made from ground corn.",
        "price": 300,
        "image": "corn-flour.jpeg"
      },
      {
        "_id": "5",
        "name": "Almond Flour",
        "description": "Gluten-free flour made from finely ground almonds.",
        "price": 450,
        "image": "almond-flour.jpeg"
      },
    ];
    setFlourItems(mockFlourItems); // Set the mock data
  }, []);

  return (
    <div className="flour-container">
      <h2 className="flour-title">Flour</h2>
      <div className="flour-grid">
        {flourItems.map((flourItem) => (
          <div className="flour-item" key={flourItem._id}>
            <Link to={`/flour/${flourItem._id}`}> {/* Wrap image in a Link for navigation */}
              <img className="flour-image" src={flourItem.image} alt={flourItem.name} />
              <div className="flour-info">
                <h3>{flourItem.name}</h3>
                <p>{flourItem.description}</p>
                <p className="flour-price">Price: ₹{flourItem.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flour;
