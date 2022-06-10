import React from "react";
import "./PromoCard.css";

const PromoCard = (props) => {
  return (
    <div>
      <h1>{props.prduct.price}</h1>
    </div>
  );
};

export default PromoCard;
