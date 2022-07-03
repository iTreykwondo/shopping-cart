import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Product from "./Product";

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
      <Product products={products} />
    </div>
  );
};

export default Shop;
