import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav>
      <div className="logo">
        <h2>Fake Store</h2>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart({cart.length})</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
