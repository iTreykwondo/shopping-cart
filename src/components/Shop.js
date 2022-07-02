import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    setProducts(data);

    return data;
  };

  useEffect(() => {
    loadProducts();
    console.log(products);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Shop Page</h1>
    </div>
  );
};

export default Shop;
