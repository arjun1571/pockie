import React from "react";
import "./Rbuttom.css";
const Rbuttom = (props) => {
  return (
    <div>
      <div className="Rbuttom-style">
        <h3>{props.product.title}</h3>
        <p>{props.product.price}</p>
      </div>
    </div>
  );
};

export default Rbuttom;
