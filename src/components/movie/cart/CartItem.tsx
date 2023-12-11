import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increase, decrease, remove } from "../../../redux/actions/movie";
import Swal from "sweetalert2";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const updateItem = (action: string) => {
    if (action == "cong") {
      dispatch(increase(cart));
    } else {
      if (cart.total == 0) return;
      dispatch(decrease(cart));
    }
  };

  function removeItem() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Product in Cart has been deleted.",
          icon: "success",
        });
        dispatch(remove(cart));
      }
    });
  }

  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={cart.image}
            alt="IMG cart"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{cart.name}</h3>
              <p className="ml-4">{cart.price}$</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{cart.year}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex items-center">
              <button
                className="bg-gray-200 rounded-l-lg px-2 py-1 font-bold "
                onClick={() => updateItem("tru")}
              >
                -
              </button>
              <span className="mx-5 text-gray-600">{cart.total}</span>
              <button
                className="bg-gray-200 rounded-r-lg px-2 py-1 font-bold "
                onClick={() => {
                  updateItem("cong");
                }}
              >
                +
              </button>
            </div>
            <div className="flex">
              <button
                onClick={removeItem}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
