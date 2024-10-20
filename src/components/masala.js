import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Masala.css'; // Import your CSS file

const Masala = () => {
  const [masala, setMasala] = useState([]);

  useEffect(() => {
    // Mock data for masala
    const mockMasala = [
      {
        "_id": "1",
        "name": "Turmeric Powder",
        "description": "Organic turmeric powder for cooking.",
        "price": 250,
        "image": "Turmeric Power.jpeg"
      },
      {
        "_id": "2",
        "name": "Cumin Seeds",
        "description": "Fresh cumin seeds.",
        "price": 180,
        "image": "cumin.jpeg"
      },
      {
        "_id": "3",
        "name": "Coriander Powder",
        "description": "Aromatic coriander powder for flavor.",
        "price": 120,
        "image": "coriander.webp"
      },
      {
        "_id": "4",
        "name": "Garam Masala",
        "description": "Traditional garam masala spice mix.",
        "price": 350,
        "image": "garam_masala.jpeg"
      },
      {
        "_id": "5",
        "name": "Red Chilli Powder",
        "description": "Spicy red chilli powder.",
        "price": 200,
        "image": "red_chilli.jpeg"
      },
      {
        "_id": "6",
        "name": "Black Pepper",
        "description": "Whole black peppercorns.",
        "price": 400,
        "image": "black_pepper.jpeg"
      },
    ];
    setMasala(mockMasala); // Setting mock data
  }, []);

  return (
    <div className="masala-container">
      <h2 className="masala-title">Masala</h2>
      <div className="masala-grid">
        {masala.map((item) => (
          <div className="masala-item" key={item._id}>
            <Link to={`/masala/${item._id}`}> {/* Wrap image in a Link for navigation */}
              <img className="masala-image" src={item.image} alt={item.name} />
              <div className="masala-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="masala-price">Price: ₹{item.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masala;
