import React from "react";
import "./Hitem.css";
const Hitem = (props) => {
  return (
    <div className="Hitem-style">
      <div className="HCard-style">
        <h4>{props.product.title}</h4>
        <p>${props.product.price}</p>
        <button className="bttn-style">Order Now</button>
      </div>
    </div>
  );
};

export default Hitem;
