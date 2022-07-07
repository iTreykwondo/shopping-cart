import React from "react";

const Product = (props) => {
  return (
    <div className="product-list">
      {props.products.map((item, index) => {
        return (
          <div
            className="product-card"
            key={index}
            onClick={(e) => props.addToCart(e, item)}
          >
            <img className="product-img" src={item.image} alt={item.title} />
            <div className="container">
              <h4>{item.title}</h4>
              <p> Rating: {item.rating.rate} stars</p>
              <div className="add-to-cart">
                <p>${item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
