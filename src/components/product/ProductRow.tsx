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
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
        callAPIFetch(CONSTANTS.URL.DOG + id, CONSTANTS.METHOD.DELETE, null)
          .then((response: { ok: any; status: any; json: () => any }) => {
            if (!response.ok || response.status == CONSTANTS.STATUS.NOT_FOUND) {
              navigate(CONSTANTS.PAGE[404]);
            }
          })
          .then((data) => {
            console.log("data", data);
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
      <td className="px-2 py-2 whitespace-nowrap text-end text-base font-medium">
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
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
