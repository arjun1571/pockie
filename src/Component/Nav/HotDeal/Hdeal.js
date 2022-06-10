import "./Hdeal.css";
import React, { useEffect, useState } from "react";
import Hitem from "../HotDealItem/Hitem";

const Hdeal = () => {
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.slice(0, 2));
      });
  }, []);

  const [product, setProduct] = useState([]);
  return (
    <div>
      <h2>Hot Deal</h2>
      <br />
      <div>
        {product.map((product) => (
          <Hitem product={product} key={product.id}></Hitem>
        ))}
      </div>
    </div>
  );
};

export default Hdeal;
