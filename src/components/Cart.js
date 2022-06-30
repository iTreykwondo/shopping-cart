import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
