import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CONSTANTS } from "../../../utils/constant";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

const PayMoneyForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const submitData: SubmitHandler<any> = (data) => {
    console.log("Data,", data);
    payIt();
  };

  const movieCart = useSelector((state: any) => state.movie.movieCart);
  const totalMoney = useSelector((state: any) => state.movie.totalMoney);
  const [addtional, setAddtional] = useState(0);
  const listCart = movieCart?.map((item, index) => {
    return (
      <div
        className="flex flex-col rounded-lg bg-white sm:flex-row"
        key={index}
      >
        <img
          className="m-2 h-24 w-28 rounded-md border object-cover object-center"
          src={item.image}
          alt="Image Cart"
        />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{item.name}</span>
          <span className="float-right text-gray-400">
            Quantity: {item.total}
          </span>
          <p className="text-lg font-bold">Total: ${item.total * item.price}</p>
        </div>
      </div>
    );
  });
  function handleCheckboxChange(e) {
    const value = Number(e.target.value);
    const status = e.target.checked;
    // setIsChecked(!isChecked);
    setAddtional(status ? addtional + value : addtional - value);
  }

  function payIt() {
    Swal.fire({
      width: 550,
      position: "center",
      icon: "success",
      title: `Good job: Payment Success:  ${totalMoney} $`,
      showConfirmButton: false,
      timer: 3000,
    });

    setTimeout(() => {
      navigate(CONSTANTS.PAGE.MOVIE_PLAY);
    }, 3000);
  }

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <button
          onClick={() => {
            navigate("/movie-play");
          }}
          className="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
        >
          {"<"} Go back
        </button>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <NavLink
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </NavLink>
                <span className="font-semibold text-gray-900">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a gift.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {listCart.length ? listCart : <p>No Movie Here..</p>}
          </div>

          <p className="mt-8 text-lg font-medium">Addtional Option</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="checkbox"
                name="radio1"
                value={50}
                onChange={handleCheckboxChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="https://d6ce0no7ktiq.cloudfront.net/images/preview/2021/02/22/design-80374/template-sticker-600x600.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">
                    {" "}
                    Sticker + mini photo{" "}
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days -{" "}
                    <strong className="font-extrabold uppercase text-sky-800">
                      $50
                    </strong>
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="checkbox"
                name="radio2"
                value={200}
                onChange={handleCheckboxChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/golden-ticket-birthday-invitation-design-template-03400be12f7be89bcf2cc4d4f110bd8d_screen.jpg?ts=1594343898"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">
                    {" "}
                    Invitation tickets to attend conference to meet the actors
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 4-7 Days -{" "}
                    <strong className="font-extrabold uppercase text-sky-800">
                      $200
                    </strong>
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <form onSubmit={handleSubmit((data) => submitData(data))}>
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  {...register("email", {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                    pattern: /^[A-Za-z0-9]+$/i,
                  })}
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your Email address"
                  defaultValue={""}
                />
                {errors?.email?.type === "required" && (
                  <span className="text-red-600">Email is required</span>
                )}
                {errors?.email?.type === "minLength" && (
                  <span className="text-red-600">
                    Email must have at least 3 character{" "}
                  </span>
                )}
                {errors?.email?.type === "maxLength" && (
                  <span className="text-red-600">
                    Email can't exceed 20 character{" "}
                  </span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="text-red-600">
                    Email must have only number and character
                  </span>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="cardHolder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input
                  {...register("cardHolder", {
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                {errors?.cardHolder?.type === "pattern" && (
                  <span className="text-red-600">
                    Card Holder must includes number or Text
                  </span>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="carNo"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    {...register("cardNo", {
                      pattern: /^\d{12}$/,
                    })}
                    type="text"
                    id="carNo"
                    name="carNo"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  {errors?.cardNo?.type === "pattern" && (
                    <span className="text-red-600">
                      card number must includes number only and have 12
                      character
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  name="credit-cvc"
                  className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                      alt=""
                    />
                  </div>
                </div>
                <select
                  name="billing-state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">State</option>
                </select>
                <input
                  type="text"
                  name="billing-zip"
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    ${totalMoney}.00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Addtional</p>
                  <p className="font-semibold text-gray-900">${addtional}.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${totalMoney + addtional}.00
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayMoneyForm;
