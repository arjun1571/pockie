import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="Card-style">
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
      <h4>${props.product.price}</h4>
      <button className="btn-style">Order Now</button>
    </div>
  );
};

export default Card;
