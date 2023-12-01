import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import Modal from "react-modal";
const TestRedux = () => {
  //   const store: any = useStore();
  //   console.log("store", store);

  // const dispatch = useDispatch();
  const counter = useSelector((state: any) => {
    console.log("state", state);
    return state;
  });

  const closeModal = () => {
    console.log("Actions");

    // dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <h1>REUDX-SAGA</h1>
    </>
  );
};

export default TestRedux;
