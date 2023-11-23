import React, { createContext } from "react";
import { Cart } from "../model/Cart";
const CartContext = createContext({
  totalCart: 0,
  setTotalCart: () => {},
});
const ProductContext = createContext({
  // totalProductCart: 0,
  // changeTotalProductCart: () => {},
});
CartContext.displayName = "CartContext";
ProductContext.displayName = "ProductContext";
export { CartContext, ProductContext };
