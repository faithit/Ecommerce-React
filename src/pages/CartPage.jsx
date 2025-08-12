import React from "react";
import CartItem  from "../components/CartItem.jsx";

function CartPage({ cart, removeFromCart }) {
  return (
    <div className='container'>
      <h1>YOUR CART</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
}

export default CartPage;