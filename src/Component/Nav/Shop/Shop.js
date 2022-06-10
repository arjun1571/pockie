import "./Shop.css";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Mcard from "../Card-midle/Mcard";
import Rcard from "../Rcard/Rcard";
import Mbuttom from "../Mbuttom/Mbuttom";
import Rbuttom from "../Rbuttom/Rbuttom";

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
      <div>
        <div className="midel-product">
          {product.map((product) => (
            <Mcard product={product} key={product.id}></Mcard>
          ))}
        </div>
        {product.map((product) => (
          <Mbuttom product={product} key={product.id}></Mbuttom>
        ))}
        <div></div>
      </div>
      <div>
        {product.map((product) => (
          <Rcard product={product} key={product.id}></Rcard>
        ))}

        {product.map((product) => (
          <Rbuttom product={product} key={product.id}></Rbuttom>
        ))}
      </div>
    </div>
  );
};

export default Shop;
