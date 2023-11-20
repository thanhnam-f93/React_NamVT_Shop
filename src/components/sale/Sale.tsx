import React, { useEffect, useState,useContext } from "react";
import {CartContext} from './../../data/Context'
import ProductItem from "../product/ProductItem";
import data from "./../../../db.json";
const Sale = () => {
  const [product, setProdcut] = useState([]);

  useEffect(() => {
    setProdcut(data.dog);
 
  }, []);


  const renderTodo = product.map((product: any, index: any) => {
    return <ProductItem key={index} {...product} ></ProductItem>;
  });

  return (
    <>
      <div className="grid grid-cols-5 gap-9"> {renderTodo}</div>
    </>
  );
};

export default Sale;
