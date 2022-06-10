import React from "react";
import "./Catecard.css";

const Catecard = (props) => {
  return (
    <div className="main-style">
      <div className="Cate-style">
        <h4>{props.product.title}</h4>
        <p>${props.product.price}</p>
        <button className="btn-style">Add Now</button>
      </div>
    </div>
  );
};

export default Catecard;
