import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem";
import { CONSTANTS } from "../../../utils/constant";
import { callAPIFetch } from "../../../service/api";
const Sale = () => {
  const [product, setProdcut] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getDataCart();
  }, []);

  const getDataCart = () => {
    callAPIFetch(CONSTANTS.URL.DOG, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
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
      {product.length > 0 ? (
        <div className="grid grid-cols-5 gap-9"> {renderTodo}</div>
      ) : (
        <div className="grid grid-cols-5 gap-9">
          {" "}
          <h2>Network Error</h2>
        </div>
      )}
    </>
  );
};

export default Sale;
