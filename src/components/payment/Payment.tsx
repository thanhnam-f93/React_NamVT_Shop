import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentItem from "./PaymentItem";
import callAPI from "../../service/api";
import { CONSTANTS } from "./../../utils/constant";
const Payment = () => {
  const [money, setMoney] = useState(Number(localStorage.getItem("money")));
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const getDataCart = () => {
    callAPI(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS[404]) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data: string | any[]) => {
        setCart(data);
      })
      .catch((error: string) => {
        navigate(CONSTANTS.PAGE[500]);
      });
  };
  useEffect(() => {
    getDataCart();
  }, []);
  //
  useEffect(() => {
    return () => {
      localStorage.setItem("money", "0");
    };
  }, []);

  const renderTodo = cart.map((item: any, index: any) => {
    return (
      <div key={index}>
        <PaymentItem
          item={item}
          cart={cart}
          setCart={setCart}
          money={money}
          setMoney={setMoney}
        ></PaymentItem>
      </div>
    );
  });
  const renderFaild = <h1 className="bg-red-600 font-bold">Network Error </h1>;
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/*  */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Payment
          </button>
        </div>
        {/*  */}
        <div className="mt-8">
          {/*  */}
          {cart.length > 0 ? renderTodo : renderFaild}
        </div>
        {/*  */}
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">{`$${money}`}</span>
        </div>
      </div>
    </>
  );
};

export default Payment;
