import React, { ChangeEvent, useEffect, useState, useReducer } from "react";
import { CONSTANTS } from "../../utils/constant";
import { AxiosError, AxiosResponse } from "axios";
import { Product } from "../../model/Product";
import Swal from "sweetalert2";
import { callAPIFetch } from "../../service/api";
import { Link, useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";

const ProductList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const navigate = useNavigate();

  const initialState = { currentPage: 1 };
  const reducer = (state: { currentPage: number }, action: { type: any }) => {
    switch (action.type) {
      case "next":
        return { currentPage: state.currentPage + 1 };
      case "prev":
        return { currentPage: state.currentPage - 1 };
      case "goto":
        return { currentPage: state.currentPage };
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let input = event.target.value;
    setSearchInput(input);
  }
  // get all data when start page - No search, default page = 1
  useEffect(() => {
    callAPI(CONSTANTS.EMPTY);
  }, []);
  // upate data when input data search or next page
  useEffect(() => {
    callAPI(searchInput);
  }, [state.currentPage]);

  // call API throught axios
  const callAPI = (searchInput: string) => {
    callAPIFetch(
      searchInput.length != 0
        ? CONSTANTS.URL.DOG + `?name_like=${searchInput}`
        : CONSTANTS.URL.DOG,
      CONSTANTS.METHOD.GET,
      null
    )
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        setTotalRecord(data.length);
        let oldOffset =
          (Number(state.currentPage) - 1) * CONSTANTS.RECORD_ON_PAGE;
        let newOffset = state.currentPage * CONSTANTS.RECORD_ON_PAGE;
        let dataDisplay = data.slice(oldOffset, newOffset);
        setDataProduct(dataDisplay);
        setTotalPage(Math.ceil(dataProduct.length / 10));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Have not data..${err}`,
        });
      });
  };
  //Action Search
  const searchProduct = () => {
    state.currentPage = 1;
    callAPI(searchInput);
  };
  // List Product on page - default 10 record:
  const renderProduct = dataProduct.map((item: Product, index: number) => {
    return (
      <ProductRow
        key={index}
        index={index}
        image={item.image}
        name={item.name}
        description={item.description}
        price={item.price}
        total={item.total}
        id={item.id}
        setTotalRecord={setTotalRecord}
      />
    );
  });
  // Render GUI:
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4 inline-flex">
              <div className="relative max-w-xs ">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  name="hs-table-with-pagination-search"
                  id="hs-table-with-pagination-search"
                  className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Search items"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="pl-2">
                <button
                  onClick={searchProduct}
                  type="button"
                  className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  Search
                </button>
              </div>
              <div className="pl-2">
                <Link to={CONSTANTS.PAGE.PRODUCT_NEW} />
                <button
                  onClick={() => {
                    navigate("/product/new");
                  }}
                  type="button"
                  className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-blue-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  New Product
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0">
                      <div className="flex items-center h-5">
                        {/* <input
                          id="hs-table-pagination-checkbox-all"
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label
                          htmlFor="hs-table-pagination-checkbox-all"
                          className="sr-only"
                        ></label> */}
                        <p>#</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {dataProduct.length ? (
                    renderProduct
                  ) : (
                    <tr className="text-center">
                      <td>Have No Product Search</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-1">
                <button
                  disabled={state.currentPage == 1}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span
                    aria-hidden="true"
                    onClick={() => {
                      dispatch({ type: "prev" });
                    }}
                  >
                    « Previous
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
                {/* <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                  aria-current="page">
                  Example
                </button>*/}
                <input
                  type="text"
                  id="quantity-input"
                  value={state.currentPage}
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="relative flex items-center max-w-[3rem] bg-gray-50 border-0 h-11 text-center"
                  placeholder="Input page"
                  onChange={(e) => {
                    e.preventDefault();
                    if (
                      Number(e.target.value) > Number(totalPage) ||
                      isNaN(Number(e.target.value))
                    ) {
                      Swal.fire({
                        title: "input over total page or illegal!",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `,
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `,
                        },
                      });
                      return;
                    }
                    state.currentPage = Number(e.target.value);
                    dispatch({ type: "goto" });
                  }}
                />
                <button
                  disabled={state.currentPage == totalPage}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Next</span>
                  <span
                    onClick={() => {
                      dispatch({ type: "next" });
                    }}
                    aria-hidden="true"
                  >
                    Next »
                  </span>
                </button>
                <div className="py-1 px-4 text-red-600 end-0 font-semibold">
                  <span>&nbsp; Record: &nbsp;</span>&nbsp;
                  {(state.currentPage - 1) * 10 + 1} &nbsp;<span>to </span>
                  &nbsp; {state.currentPage * 10}
                  &nbsp;
                  <span>&nbsp;off</span> {totalPage} Page
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
