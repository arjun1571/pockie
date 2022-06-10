import React from "react";
import "./Mbuttom.css";

const Mbuttom = (props) => {
  return (
    <div className="in-style">
      <div className="Cart-style">
        <h4>{props.product.title}</h4>
        <p>${props.product.price}</p>
        <button className="buttn-style">Add Now</button>
      </div>
    </div>
  );
};

export default Mbuttom;
