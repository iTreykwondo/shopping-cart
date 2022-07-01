import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Fake Store</h2>
      </div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
