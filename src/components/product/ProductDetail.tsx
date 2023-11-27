import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { callAPIFetch } from "../../service/api";
import { CONSTANTS } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
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
  const [formData, setFormData] = useState(initProduct);
  const navigate = useNavigate();
  useEffect(() => {
    getDetail(id);
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const getDetail = (id: string | undefined) => {
    callAPIFetch(CONSTANTS.URL.DOG + id, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data);
        console.log("Get detail OK", data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Have not data..${err}`,
        });
      });
  };
  const updateProduct = (id: string | undefined) => {
    callAPIFetch(
      CONSTANTS.URL.DOG + id,
      CONSTANTS.METHOD.PUT,
      JSON.stringify(formData)
    )
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
        navigate(CONSTANTS.PAGE.PRODUCT_LIST);
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
    <>
      {/* <!-- Main modal --> */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Detail Product</h1>

        {/* <!-- Product Form --> */}
        <form>
          {/* Image Product */}
          <div className="pb-5">
            <img
              src={formData.image}
              className="w-full z-0 h-full object-fill example rounded-lg"
            />
          </div>
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
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.name}
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
              defaultValue={formData.image}
              onChange={handleChange}
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
              name="description"
              rows={3}
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.description}
              onChange={handleChange}
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
              name="total"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.total}
              onChange={handleChange}
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
              name="price"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="inline-flex">
            {/* <!-- Back Button --> */}
            <div className="pr-20 pl-10 flex justify-start ">
              <button
                onClick={() => navigate(-1)}
                type="button"
                className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-orange-300 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
              >
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </div>
            {/* <!-- Submit Button --> */}
            <div className="pl-20 flex justify-end">
              <button
                onClick={() => updateProduct(id)}
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductDetail;
