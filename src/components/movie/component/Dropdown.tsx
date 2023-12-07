import React from "react";

const Dropdown = ({ data, dataSearch, setDataSearch, title, id }) => {
  return (
    <>
      <label className="font-semibold pl-1" htmlFor={id}>
        {title}
      </label>

      <select
        id={id}
        onChange={(e) => {
          if (title == "Movie Classification") {
            setDataSearch({ ...dataSearch, rated: e.target.value });
          } else {
            setDataSearch({ ...dataSearch, typeSearch: e.target.value });
          }
        }}
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {data.map((option, index) => {
          return (
            <option key={index} value={option.data}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
