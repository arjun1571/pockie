import "./Shop.css";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Mcard from "../Card-midle/Mcard";
import Rcard from "../Rcard/Rcard";

const Shop = () => {
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.slice(0, 1));
      });
  }, []);

  const [product, setProduct] = useState([]);

  return (
    <div className="home-container">
      <div className="left-product">
        {product.map((product) => (
          <Card product={product} key={product.id}></Card>
        ))}
      </div>
      <div className="midel-product">
        {product.map((product) => (
          <Mcard product={product} key={product.id}></Mcard>
        ))}
      </div>
      <div className="right-container">
        {product.map((product) => (
          <Rcard product={product} key={product.id}></Rcard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
