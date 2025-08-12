import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card m-3" style={{ width: "16rem" }}>


      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;