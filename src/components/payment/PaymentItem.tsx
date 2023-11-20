import React, { useEffect, useState } from "react";

const PaymentItem = ({
  item,
  setProduct,
  totalRecord,
  setTotalRecord,
  money,
  setMoney,
}) => {
  const apiUrl = `http://localhost:3000/cart/`;
  const [total, setTotal] = useState(0);
  let updateMoney: number = Number(localStorage.getItem("money"));
  const updateItem = (action: string) => {
    let updateTotal: number;

    if (action == "cong") {
      updateTotal = total + 1;
    } else {
      if (total == 0) return;
      updateTotal = total - 1;
    }
    setTotal(updateTotal);
    updateMoney += calculatorMoney(updateTotal);
    setMoney(updateMoney);
    localStorage.setItem("money", JSON.stringify(money));
  };

  // useEffect(() => {
  //   () => {

  //     localStorage.setItem("money", money);
  //   };
  // }, [total]);

  //
  const removeItem = (id: any) => {
    const confirm = window.confirm("Are you sure delete product from cart ?");
    if (confirm) {
      fetch(apiUrl + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          alert("Delete OK");
        })
        .then((data) => {
          // Handle the response data
          let coutRecord = totalRecord - 1;
          setTotalRecord(coutRecord);
        })
        .catch((err) => {
          console.error("Error: ", err);
          alert("Delete Failure, check Serve now");
        });
    }
  };
  //
  const calculatorMoney = (num: number) => {
    return num * Number(item.price);
  };
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
