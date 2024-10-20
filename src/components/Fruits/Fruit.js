import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Fruits.css'; // Import your CSS file

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Mock data for fruits
    const mockFruits = [
      {
        "_id": "1",
        "name": "Black Grapes",
        "description": "Sweet and juicy black grapes.",
        "price": 350,
        "image": "black grap.jpg"
      },
      {
        "_id": "2",
        "name": "Apple",
        "description": "All-purpose flour for baking.",
        "price": 250,
        "image": "apple.jpeg"
      },
      {
        "_id": "3",
        "name": "Banana",
        "description": "Fresh green cabbage.",
        "price": 100,
        "image": "bana.jpeg"
      },
      {
        "_id": "4",
        "name": "Blueberry",
        "description": "Crunchy and healthy carrots.",
        "price": 699,
        "image": "blueberry.jpeg"
      },
      {
        "_id": "5",
        "name": "Cherry",
        "description": "Sweet red cherries.",
        "price": 400,
        "image": "cherry.jpeg"
      },
      {
        "_id": "6",
        "name": "Orange",
        "description": "Fresh coriander leaves for seasoning.",
        "price": 150,
        "image": "orange.jpeg"
      },
      {
        "_id": "7",
        "name": "lemon",
        "description": "Aromatic curry leaves for cooking.",
        "price": 100,
        "image": "lemon.jpg"
      },
      {
        "_id": "8",
        "name": "Custard Apple",
        "description": "Delicious custard dessert.",
        "price": 250,
        "image": "custard.jpg"
      },
      {
        "_id": "9",
        "name": "Dragon Fruit",
        "description": "Exotic dragon fruit with a sweet flavor.",
        "price": 500,
        "image": "dragon.png"
      },
      {
        "_id": "10",
        "name": "Mango",
        "description": "Fresh and flavorful onions.",
        "price": 60,
        "image": "mango.jpg"
      },
      {
        "_id": "11",
        "name": "Green Grapes",
        "description": "Sweet and crunchy green grapes.",
        "price": 300,
        "image": "green-grapes.jpg"
      },
      {
        "_id": "12",
        "name": "Guava",
        "description": "Tropical guava with a unique taste.",
        "price": 275,
        "image": "guava.jpg"
      },
      {
        "_id": "14",
        "name": "Jackfruit",
        "description": "Large tropical fruit with a sweet taste.",
        "price": 450,
        "image": "jack.jpg"
      },
      {
        "_id": "15",
        "name": "Kiwi",
        "description": "Tangy kiwi fruit.",
        "price": 225,
        "image": "kivi.jpeg"
      },
      {
        "_id": "16",
        "name": "Watermelon",
        "description": "Aromatic curry leaves for cooking.",
        "price": 100,
        "image": "watermelon.jpeg"
      },
      {
        "_id": "17",
        "name": "Water Apple",
        "description": "Delicious custard dessert.",
        "price": 250,
        "image": "water.jpeg"
      },
      {
        "_id": "18",
        "name": "Starwberry",
        "description": "Exotic dragon fruit with a sweet flavor.",
        "price": 500,
        "image": "starw.jpeg"
      },
      {
        "_id": "19",
        "name": "Star Fruit",
        "description": "Fresh and flavorful onions.",
        "price": 199,
        "image": "star.jpg"
      },
      {
        "_id": "20",
        "name": "Sapota",
        "description": "Sweet and crunchy green grapes.",
        "price": 350,
        "image": "sapota.jpg"
      },
      {
        "_id": "22",
        "name": " Rose Guava",
        "description": "Tropical guava with a unique taste.",
        "price": 275,
        "image": "rose go.jpeg"
      },
      {
        "_id": "23",
        "name": "Rambutan",
        "description": "Large tropical fruit with a sweet taste.",
        "price": 450,
        "image": "Rambutan.jpg"
      },
      {
        "_id": "24",
        "name": "Pomegranate",
        "description": "Tangy kiwi fruit.",
        "price": 225,
        "image": "pome.jpg"
      },
      {
        "_id": "25",
        "name": "Pineapple",
        "description": "Tangy kiwi fruit.",
        "price": 225,
        "image": "pine.jpg"
      },
    ];
    setFruits(mockFruits); // Setting mock data
  }, []);

  return (
    <div className="fruits-container">
      <h2 className="fruits-title">Fruits</h2>
      <div className="fruits-grid">
        {fruits.map((fruit) => (
          <div className="fruit" key={fruit._id}>
            <Link to={`/fruit/${fruit._id}`}> {/* Wrap image in a Link for navigation */}
              <img className="fruit-image" src={fruit.image} alt={fruit.name} />
              <div className="fruit-info">
                <h3>{fruit.name}</h3>
                <p>{fruit.description}</p>
                <p className="fruit-price">Price: ₹{fruit.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
