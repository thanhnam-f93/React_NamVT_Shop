import React, { ChangeEvent, useState } from "react";
import { CONSTANTS } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { callAPIFetch } from "../../service/api";
import Swal from "sweetalert2";
export default function ProductNew() {
  const navigate = useNavigate();
  const initProduct = {
    price: CONSTANTS.EMPTY,
    name: CONSTANTS.EMPTY,
    image: CONSTANTS.EMPTY,
    description: CONSTANTS.EMPTY,
    total: CONSTANTS.EMPTY,
  };
  const [formData, setFormData] = useState(initProduct);
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function createProduct(e) {
    e.preventDefault();
    if (validation()) {
      callAPIFetch(
        CONSTANTS.URL.DOG,
        CONSTANTS.METHOD.POST,
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
          resetForm();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Have not data..${err}`,
          });
        });
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Data input required All field`,
    });
  }
  //Reset data input
  function resetForm() {
    const inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
      input.value = "";
    }
    document.getElementsByTagName("textarea")[0].value = "";
  }
  // Validate simple
  function validation() {
    return !Object.values(formData).includes(CONSTANTS.EMPTY);
  }
  return (
    <>
      {/* <!-- Main modal --> */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Create New Product</h1>

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
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* <!-- Product Image URL --> */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Product Image URL:
            </label>
            <input
              type="text"
              id="productImage"
              name="image"
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
              name="productTotal"
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

          {/* <!-- Submit Button --> */}
          <div className="flex justify-end">
            <button
              onClick={createProduct}
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
