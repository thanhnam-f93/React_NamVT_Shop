import React, { createContext } from 'react';
const CartContext = React.createContext([]);
const ProductContext = createContext({
    currentProduct: [],
    changeCurrentProduct: () => {},
  });
CartContext.displayName = "CartContext";
ProductContext.displayName = "ProductContext";
export { CartContext,ProductContext};