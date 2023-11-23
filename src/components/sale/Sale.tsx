import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../product/ProductItem";
import { CONSTANTS } from "../../utils/constant";
import callAPI from "../../service/api";
const Sale = () => {
  const [product, setProdcut] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getDataCart();
  }, []);

  const getDataCart = () => {
    callAPI(CONSTANTS.URL.DOG, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok || response.status == CONSTANTS.STATUS[404]) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        setProdcut(data);
      })
      .catch((error: string) => {
        navigate(CONSTANTS.PAGE[500]);
      });
  };

  const renderTodo = product.map((product: any, index: any) => {
    return <ProductItem key={index} {...product}></ProductItem>;
  });

  return (
    <>
      <div className="grid grid-cols-5 gap-9"> {renderTodo}</div>
    </>
  );
};

export default Sale;
