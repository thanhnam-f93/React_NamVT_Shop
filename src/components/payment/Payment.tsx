import React, { useContext, useEffect, useState } from "react";
import PaymentItem from "./PaymentItem";
import { CartContext } from "../../data/Context";
const Payment = () => {
  const [money, setMoney] = useState(Number(localStorage.getItem("money")));
  const [products, setProduct] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const getDataCart = () => {
    const apiUrl = "http://localhost:3000/cart";
    // Make the POST request
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data
        setTotalRecord(data.length);
        setProduct(data);
      })
      .catch((error: string) => {
        // Handle errors during the request
        alert(
          "Have error while call data from Json server, Please reCheck it Or restart JSon serve" +
            error
        );
      });
  };
  useEffect(() => {
    getDataCart();
  }, []);
  //
  useEffect(() => {
    return () => {
      localStorage.removeItem("money");
    };
  }, []);

  const renderTodo = products.map((item: any, index: any) => {
    return (
      <>
        <div key={index}>
          <PaymentItem
            item={item}
            setProduct={setProduct}
            totalRecord={totalRecord}
            setTotalRecord={setTotalRecord}
            money={money}
            setMoney={setMoney}
          ></PaymentItem>
        </div>
      </>
    );
  });

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
          {renderTodo}
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
