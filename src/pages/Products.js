import React from 'react';
import marylin_monroe from "./product_img/marylin_monroe.jpeg";
import theo_rose from "./product_img/theo_rose.jpeg";
import david_bowie from "./product_img/david_bowie.webp";
import marlene_dietrich from "./product_img/marlene_dietrich.jpeg";
import frank_sinatra from "./product_img/frank_sinatra.webp";
import jane_fonda from "./product_img/jane_fonda.webp";
import './Products.css';

function Products() {

  const products = [
    { id: 1, name: 'Marylin Monroe', image: marylin_monroe, price: '$19.99' },
    { id: 2, name: 'Theodore Roosevelt', image: theo_rose, price: '$29.99' },
    { id: 3, name: 'Frank Sinatra', image: frank_sinatra, price: '$39.99' },
    { id: 4, name: 'Marlene Dietrich', image: marlene_dietrich, price: '$49.99' },
    { id: 5, name: 'Jane Fonda', image: jane_fonda, price: '$59.99' },
    { id: 6, name: 'David Bowie', image: david_bowie, price: '$69.99' },
  ]; 

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
