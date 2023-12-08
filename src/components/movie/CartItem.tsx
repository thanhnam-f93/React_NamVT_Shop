import React, { useState } from "react";

const CartItem = ({ money, setMoney }) => {
  const data = {
    id: "1",
    poster:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/a05681c-13.jpg",
    title: "Movie",
    price: 90,
    year: "2024",
    total: 5,
  };
  const [total, setTotal] = useState(0);

  const updateItem = (action: string) => {
    let updateTotal: number;
    let updateMoney: number;
    if (action == "cong") {
      updateTotal = total + 1;
      setTotal(updateTotal);
      updateMoney = money + data.price * total;
      setMoney(updateMoney);
    } else {
      if (total == 0) return;
      updateTotal = total - 1;
      setTotal(updateTotal);
      updateMoney = money + data.price * total;
      setMoney(updateMoney);
    }
  };

  function removeItem() {
    console.log("Remove", data.id);
  }

  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={data.poster}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{data.title}</a>
              </h3>
              <p className="ml-4">{data.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{data.year}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            {/* <p className="text-gray-500">Qty 1</p> */}
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
