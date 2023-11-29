import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

const TestRedux = () => {
  //   const store: any = useStore();
  //   console.log("store", store);

  // const dispatch = useDispatch();
  const counter = useSelector((state: any) => {
    console.log("state", state);
    return state;
  });

  const increment = () => {
    console.log("Actions");

    // dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default TestRedux;
