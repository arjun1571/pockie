import "./Categories.css";
import React, { useEffect, useState } from "react";
import Catecard from "../Catecard/Catecard";

const Categories = () => {
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.slice(0, 12));
      });
  }, []);

  const [product, setProduct] = useState([]);
  return (
    <div>
      <br />
      <h2>Shop By Categories</h2>
      <br />
      <div className="left-product">
        {product.map((product) => (
          <Catecard product={product} key={product.id}></Catecard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
