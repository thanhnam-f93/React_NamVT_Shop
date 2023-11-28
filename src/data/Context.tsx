import React, { createContext } from "react";

const CartContext = createContext({
  totalCart: 0,
  setTotalCart: () => {},
});
CartContext.displayName = "CartContext";
export { CartContext };
