import Product from "./Product";

const Shop = ({ products, addToCart }) => {
  return (
    <div>
      <Product products={products} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
