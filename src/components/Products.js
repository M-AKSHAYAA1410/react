import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Products.css'; // Import your CSS file

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data instead of fetching from API
    const mockProducts = [
      {
        "_id": "1",
        "name": "Fresh Vegetables",
        "category": "vegetable",
        "description": "A stylish bookshelf to organize your books and decor.",
        "image": "veg.jpg",
      },
      {
        "_id": "2",
        "name": "Fresh Fruits",
        "category": "fruits",
        "description": "A comfortable chair for your living room.",
        "image": "ft.jpg",
      },
      {
        "_id": "3",
        "name": "Spices Collection",
        "category": "masala",
        "description": "A set of essential spices for your kitchen.",
        "image": "masala.webp",
      },
      {
        "_id": "4",
        "name": "Salt & Sugar",
        "category": "sugar",
        "description": "Natural Himalayan salt for cooking.",
        "image": "salt.jpeg",
      },
      {
        "_id": "5",
        "name": "Rice",
        "category": "rice", // Mark this product as a fruit
        "description": "Organic rice for your meals.",
        "image": "rice.jpeg",
      },
      {
        "_id": "6",
        "name": "Flour",
        "category": "flour",
        "description": "Perfect for baking and cooking.",
        "image": "flour.jpeg",
      }
    ];
    setProducts(mockProducts); // Setting mock data
  }, []);

  const getProductLink = (product) => {
    if (product.category === 'fruits') {
      return '/fruits'; // Navigate to the Fruits page
    } else if (product.category === 'vegetable') {
      return '/vegetable'; // Navigate to the Vegetables page
    } else if (product.category === 'masala') {
      return '/masala'; // Navigate to the Masala page
   } else if (product.category === 'sugar') {
    return '/sugar'; // Navigate to the Sugar page
  } else if (product.category === 'rice') {
    return '/rice'; // Navigate to the Sugar page
   }
   else if (product.category === 'flour') {
    return '/flour'; // Navigate to the Sugar page
   }
    return ''; // Fallback to home or products page if no specific category
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <Link to={getProductLink(product)} className="clickable"> {/* Link to category-specific pages */}
              <img className="product-image" src={product.image} alt={product.name} />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
