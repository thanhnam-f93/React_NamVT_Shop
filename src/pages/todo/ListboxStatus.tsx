import { select } from "@material-tailwind/react";
import React from "react";
import { CONSTANTS } from "../../utils/constant";

const ListboxStatus = ({ setSearchBy }) => {
  const opstions = [CONSTANTS.COMPLETED, CONSTANTS.IMPROGRESS];

  return (
    <>
      <select
        onChange={(e) => {
          setSearchBy(e.target.value);
        }}
        className="px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      >
        {opstions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default ListboxStatus;
