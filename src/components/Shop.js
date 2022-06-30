import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1>Shop Page</h1>
    </div>
  );
};

export default Shop;
