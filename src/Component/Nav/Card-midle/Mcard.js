import React from "react";
import "./Mcard.css";
const Mcard = (props) => {
  return (
    <div className="Mcard-style">
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
      <h4>${props.product.price}</h4>
      <p>{props.product.description}</p>
    </div>
  );
};

export default Mcard;
