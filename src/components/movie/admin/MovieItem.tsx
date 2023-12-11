import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../../utils/constant";
import SortComponent from "../component/SortComponent";

const CountryItem = ({ movie, index }) => {
  // const navigate = useNavigate();

  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <p>{index + 1}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">
        <img
          src={movie.poster}
          alt="Loading Image"
          className="object-cover h-16 w-24 rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.title}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.country}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.year}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.rated}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.imdbRating}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{movie.runtime}</p>
      </td>

      <td className="px-2 whitespace-nowrap text-center text-base font-medium">
        <button
          type="button"
          onClick={() => {
            // navigate(CONSTANTS.PAGE.PRODUCT + `/${id}`);
          }}
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Detail
        </button>
        <span className="px-0">|</span>
        <button
          type="button"
          onClick={() => {
            // deleteProduct(id);
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

export default CountryItem;
