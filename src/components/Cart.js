const Cart = (props) => {
  return (
    <div>
      <h1>Cart</h1>
      {props.cart.map((item, index) => {
        return (
          <div className="container" key={index}>
            <h2>{item.itemName}</h2>
            <p>{item.itemPrice}</p>
          </div>
        );
      })}
      <div className="order-container">
        <div className="total">
          <h3>Order Total: ${Math.round(props.total * 100) / 100}</h3>
        </div>
        <div className="btn-container">
          <button className="clear-btn" onClick={props.clearCart}>
            Clear cart
          </button>
          <button className="checkout-btn" onClick={props.checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
