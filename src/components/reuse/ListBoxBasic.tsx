import React from "react";

const ListBox2 = ({ searchBy, setSearchBy }) => {
  const opstions = [
    "Name",
    "Code",
    "Full name",
    "Region",
    "Subregion",
    "Language",
  ];

  return (
    <>
      <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        <option selected>Search All</option>
        <option
          onClick={() => {
            setSearchBy("name");
          }}
        >
          Name
        </option>
        <option
          onClick={() => {
            setSearchBy("alpha");
          }}
        >
          Code
        </option>
        <option
          onClick={() => {
            setSearchBy("fullname");
          }}
        >
          Full Name
        </option>
        <option
          onClick={() => {
            setSearchBy("region");
          }}
        >
          Region
        </option>
        <option
          onClick={() => {
            setSearchBy("subregion");
          }}
        >
          Subregion
        </option>
        <option
          onClick={() => {
            setSearchBy("lang");
          }}
        >
          Language
        </option>
      </select>
    </>
  );
};

export default ListBox2;
