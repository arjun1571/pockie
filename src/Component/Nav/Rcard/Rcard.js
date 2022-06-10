import React from "react";
import "./Rcard.css";

const Rcard = (props) => {
  return (
    <div>
      <div className="Rcard-style">
        <h3>{props.product.title}</h3>
        <p>{props.product.description}</p>
      </div>
    </div>
  );
};

export default Rcard;
