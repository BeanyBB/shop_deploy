import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Store!</h1>
        <p>Explore our collection of unique and stylish products.</p>
      </div>
      <div className="products-preview">
        <h2>Featured Products</h2>
        <div className="product-images">
          {/* Add some placeholder images or decorative elements */}
          {/* Example: <img src={placeholder_image_url} alt="Product Preview" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
