const CartItem = ({ item, removeFromCart }) => (
  <div className="card m-3" style={{ width: "16rem" }}>
    <div className="card-body text-center">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">${item.price.toFixed(2)}</p>
      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
        Remove from Cart
      </button>
    </div>
  </div>
);

export default CartItem;
