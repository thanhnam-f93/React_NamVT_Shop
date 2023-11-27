import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, ProductContext } from "./../../data/Context";
import { CONSTANTS } from "../../utils/constant";
import { callAPIFetch } from "../../service/api";
import Swal from "sweetalert2";
const PaymentItem = ({ item, cart, setCart, money, setMoney }) => {
  const navigate = useNavigate();
  const { totalCart, setTotalCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const updateItem = (action: string) => {
    let updateTotal: number;
    let updateMoney: number;
    if (action == "cong") {
      updateTotal = total + 1;
      updateMoney = money + item.price;
    } else {
      if (total == 0) return;
      updateTotal = total - 1;
      updateMoney = money - item.price;
    }
    setMoney(updateMoney);
    setTotal(updateTotal);

    localStorage.setItem("money", JSON.stringify(money));
  };
  const getDataCart = () => {
    callAPIFetch(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok || response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data: string | any[]) => {
        setCart(data);
        setTotalCart(data.length);
      })
      .catch((error: string) => {
        navigate(CONSTANTS.PAGE[500]);
      });
  };
  const removeItem = (id: any) => {
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
        callAPIFetch(CONSTANTS.URL.CART + id, CONSTANTS.METHOD.DELETE, null)
          .then((response: { ok: any; status: any; json: () => any }) => {
            if (!response.ok || response.status == CONSTANTS.STATUS.NOT_FOUND) {
              navigate(CONSTANTS.PAGE[404]);
            }
          })
          .then((data) => {
            getDataCart();
            let updateMoney: number;
            updateMoney = Number(money) - item.price * total;
            setMoney(updateMoney);
          })
          .catch((err) => {
            navigate(CONSTANTS.PAGE[500]);
          });
      }
    });
  };
  //

  return (
    <>
      <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt="Product image"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <button
                className="bg-gray-200 rounded-l-lg px-2 py-1 font-bold "
                onClick={() => updateItem("tru")}
              >
                -
              </button>
              <span className="mx-5 text-gray-600">{total}</span>
              <button
                className="bg-gray-200 rounded-r-lg px-2 py-1 font-bold "
                onClick={() => {
                  updateItem("cong");
                }}
              >
                +
              </button>
            </div>
            <div>
              <button
                className="bg-red-600  rounded ml-5"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
            <div className="py-5 pl-3">
              <span>Price: $</span>
            </div>
            <span className="ml-auto font-bold">{item.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentItem;
