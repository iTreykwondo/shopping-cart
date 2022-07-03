import React from "react";

const Product = (props) => {
  return (
    <div className="product-list">
      {props.products.map((item, index) => {
        return (
          <div className="product-card" key={index}>
            <img className="product-img" src={item.image} alt={item.title} />
            <div className="container">
              <h4>{item.title}</h4>
              <p> Rating: {item.rating.rate} stars</p>
              <div className="add-to-cart">
                <p>${item.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
