import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./../../data/Context";
import "./../../css/card.css";
import { NavLink } from "react-router-dom";
import { error } from "console";
function ProductItem(product) {
  const apiUrl = "http://localhost:3000/cart";
  const addProduct = () => {
    console.log("product", product);
    let cartData = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      total: 0,
    };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add other headers if needed
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        alert("Add product Success");
      })
      .catch((err) => {
        console.error("Error: ", err);
        alert("This Product was add Previous m- Duplicate Product");
      });
  };
  return (
    <div className="card">
      <img className="photo" src={product.image} alt="Dog not here.." />
      <NavLink to={`product/${product.id}`}>
        <strong>{product.name}</strong>
      </NavLink>
      <p className="price">{`Price: $${product.price}`}</p>
      <p className="text-justify px-3 py-2">{product.description}</p>
      {/* <p>Total: {product.total}</p> */}
      <button className=" bottom-0 mr-0 py-0" onClick={addProduct}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
