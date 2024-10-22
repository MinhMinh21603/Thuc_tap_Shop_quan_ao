// components/ProductCard.js
import React from 'react';

interface ProductCardProps{
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="sale-badge">Sale</span>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <p>{product.category}</p>
        <h4>{product.name}</h4>
        <div className="product-prices">
          <span>${product.newPrice}</span>
          <span className="old-price">${product.oldPrice}</span>
        </div>
        <div className="product-rating">
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <div className="product-actions">
          <button>+ Add to Cart</button>
          <button>❤️</button>
          <button>👁️</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
