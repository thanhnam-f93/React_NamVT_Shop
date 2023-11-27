import React from "react";

const CountryItem = ({
  flags,
  name,
  code,
  region,
  subregion,
  languages,
  population,
}) => {
  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <input
            id="checkbox"
            type="checkbox"
            className="border-gray-200  rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <label htmlFor="hs-table-pagination-checkbox-2" className="sr-only">
            Checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">
        <img
          src={flags}
          alt="Loading Image"
          className="object-cover h-16 w-24 "
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
          className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Detail
        </button>
      </td>
    </tr>
  );
};

export default CountryItem;
