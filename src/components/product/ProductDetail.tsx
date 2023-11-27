import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { callAPIFetch } from "../../service/api";
import { CONSTANTS } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../model/Product";
function ProductDetail() {
  const { id } = useParams();
  const initProduct = {
    price: CONSTANTS.EMPTY,
    name: CONSTANTS.EMPTY,
    image: CONSTANTS.EMPTY,
    description: CONSTANTS.EMPTY,
    total: CONSTANTS.EMPTY,
    id: CONSTANTS.EMPTY,
  };

  const navigate = useNavigate();
  useEffect(() => {
    callAPIFetch(CONSTANTS.URL.DOG + id, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: "Good job!",
          text: "Update product Success",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Have not data..${err}`,
        });
      });
  }, []);

  return (
    <>
      {/* <!-- Main modal --> */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Detail Product</h1>

        {/* <!-- Product Form --> */}
        <form>
          {/* <!-- Product Name --> */}
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* <!-- Product Image URL --> */}
          <div className="mb-4">
            <label
              htmlFor="productImage"
              className="block text-sm font-medium text-gray-600"
            >
              Product Image URL:
            </label>
            <input
              type="text"
              id="productImage"
              name="productImage"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* <!-- Product Description --> */}
          <div className="mb-4">
            <label
              htmlFor="productDescription"
              className="block text-sm font-medium text-gray-600"
            >
              Product Description:
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              rows={3}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          {/* <!-- Product Total --> */}
          <div className="mb-4">
            <label
              htmlFor="productTotal"
              className="block text-sm font-medium text-gray-600"
            >
              Product Total:
            </label>
            <input
              type="number"
              id="productTotal"
              name="productTotal"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Product Price --> */}
          <div className="mb-6">
            <label
              htmlFor="productPrice"
              className="block text-sm font-medium text-gray-600"
            >
              Product Price:
            </label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductDetail;
