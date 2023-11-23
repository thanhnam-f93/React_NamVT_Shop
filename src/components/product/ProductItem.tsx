import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, ProductContext } from "./../../data/Context";
import "./../../css/card.css";
import { NavLink } from "react-router-dom";
import callAPI from "../../service/api";
import { CONSTANTS } from "../../utils/constant";
import Swal from "sweetalert2";

function ProductItem(product) {
  const { setTotalCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addCart = () => {
    let cartData = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      total: 0,
    };
    callAPI(CONSTANTS.URL.CART, CONSTANTS.METHOD.POST, JSON.stringify(cartData))
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS[404]) {
          navigate(CONSTANTS.PAGE[404]);
        } else if (response.status == CONSTANTS.STATUS[500]) {
          throw new Error(`Product added to cart`);
        }
      })
      .then((data) => {
        getTotalCart();
        Swal.fire({
          title: "Good job!",
          text: "Add product Success",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const getTotalCart = () => {
    callAPI(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS[404]) {
          navigate(CONSTANTS.PAGE[404]);
        } else if (response.status == CONSTANTS.STATUS[500]) {
          throw new Error("Conection Error");
        }
        return response.json();
      })
      .then((data) => {
        setTotalCart(data.length);
      })
      .catch((err) => {
        alert(err);
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
      <button className=" bottom-0 mr-0 py-0" onClick={addCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
