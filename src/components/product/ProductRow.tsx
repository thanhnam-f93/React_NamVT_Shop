import React from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../utils/constant";
import Swal from "sweetalert2";
import { callAPIFetch } from "../../service/api";

const ProductRow = ({
  index,
  price,
  name,
  image,
  description,
  total,
  id,
  setTotalRecord,
}) => {
  const navigate = useNavigate();

  function deleteProduct(id: string) {
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
        callAPIFetch(CONSTANTS.URL.DOG + id, CONSTANTS.METHOD.DELETE, null)
          .then((response: { ok: any; status: any; json: () => any }) => {
            if (!response.ok || response.status == CONSTANTS.STATUS.NOT_FOUND) {
              navigate(CONSTANTS.PAGE[404]);
            }
          })
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
            updateTotal();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Delete failure..${err}`,
            });
            navigate(CONSTANTS.PAGE[500]);
          });
      }
    });
  }
  // call API throught axios
  const updateTotal = () => {
    callAPIFetch(CONSTANTS.URL.DOG, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        setTotalRecord(data.length);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Have not data..${err}`,
        });
      });
  };
  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <p>{index + 1}</p>
        </div>
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">
        <img
          src={image}
          alt="Loading Image"
          className="object-cover h-16 w-24 rounded"
        />
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{name}</p>
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <textarea
          name=""
          id=""
          cols={25}
          rows={2}
          className="border-0 bg-neutral-100 border-spacing-2"
          defaultValue={description.slice(0, 50) + `.....`}
        ></textarea>
        <p></p>
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{price}</p>
      </td>
      <td className="px-2 py-2 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{total}</p>
      </td>
      <td className="px-2 whitespace-nowrap text-end text-base font-medium">
        <button
          type="button"
          onClick={() => {
            navigate(CONSTANTS.PAGE.PRODUCT + `/${id}`);
          }}
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Detail
        </button>
        <span className="px-2">|</span>
        <button
          type="button"
          onClick={() => {
            deleteProduct(id);
          }}
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 py-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
