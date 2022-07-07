import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (e, item) => {
    e.preventDefault();
    let itemObj = {
      itemName: item.title,
      itemPrice: item.price,
    };

    setCart(cart.concat(itemObj));
  };

  const loadProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    setProducts(data);

    return data;
  };

  const total = cart.reduce((partialSum, a) => partialSum + a.itemPrice, 0);

  const checkout = () => {
    alert(`Thank you for your purchase!`);
    setCart([]);
  };

  useEffect(() => {
    loadProducts();
    console.log(products);
  }, []);

  useEffect(() => {
    console.log(cart);
    console.log(total);
  }, [cart]);

  return (
    <div>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route
          path="cart"
          element={<Cart cart={cart} total={total} checkout={checkout} />}
        />
      </Routes>
    </div>
  );
}

export default App;
