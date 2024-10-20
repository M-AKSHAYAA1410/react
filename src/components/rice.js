import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './rice.css'; // Import your CSS file

const Rice = () => {
  const [riceItems, setRiceItems] = useState([]);

  useEffect(() => {
    // Mock data for rice items
    const mockRiceItems = [
      {
        "_id": "1",
        "name": "Basmati Rice",
        "description": "Premium basmati rice, perfect for biryani.",
        "price": 1000,
        "image": "basmati_rice.jpeg"
      },
      {
        "_id": "2",
        "name": "Brown Rice",
        "description": "Organic brown rice for healthy meals.",
        "price": 750,
        "image": "brown_rice.jpeg"
      },
      {
        "_id": "3",
        "name": "Jasmine Rice",
        "description": "Fragrant jasmine rice for authentic dishes.",
        "price": 850,
        "image": "jasmine_rice.jpeg"
      },
      {
        "_id": "4",
        "name": "Wild Rice",
        "description": "Nutty and healthy wild rice.",
        "price": 900,
        "image": "wild_rice.jpeg"
      }
    ];
    setRiceItems(mockRiceItems); // Setting mock data
  }, []);

  return (
    <div className="rice-container">
      <h2 className="rice-title">Rice</h2>
      <div className="rice-grid">
        {riceItems.map((rice) => (
          <div className="rice-item" key={rice._id}>
            <Link to={`/rice/${rice._id}`}>
              <img className="rice-image" src={rice.image} alt={rice.name} />
              <div className="rice-info">
                <h3>{rice.name}</h3>
                <p>{rice.description}</p>
                <p className="rice-price">Price: ₹{rice.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rice;
