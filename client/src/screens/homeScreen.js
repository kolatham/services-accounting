import React from "react";
import Product from "../components/product";
import products from "../products";

export default function homeScreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
