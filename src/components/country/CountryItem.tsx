import React from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../utils/constant";

const CountryItem = ({
  index,
  flags,
  name,
  code,
  region,
  subregion,
  languages,
  population,
}) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <p>{index + 1}</p>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">
        <img
          src={flags}
          alt="Loading Image"
          className="object-cover h-16 w-24 rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{name}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{code}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{region}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{subregion}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{languages}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
        <p>{population}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-base font-medium">
        <button
          type="button"
          onClick={() => {
            navigate(CONSTANTS.PAGE.COUNTRY_INFO, { state: { name: name } });
          }}
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Detail
        </button>
      </td>
    </tr>
  );
};

export default CountryItem;
