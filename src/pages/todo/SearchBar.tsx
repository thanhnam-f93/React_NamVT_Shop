import React, { useEffect, useRef, useState } from "react";
import "rc-slider/assets/index.css";
import { CONSTANTS } from "../../utils/constant";
import RadioStatus from "../../components/movie/component/RadioStatus";
import RangeYear from "../../components/movie/component/RangeYear";
import Dropdown from "../../components/movie/component/Dropdown";
import SearchInput from "../../components/movie/component/SearchInput";
const TestRedux = () => {
  const opstions = [
    CONSTANTS.ALL,
    CONSTANTS.NAME,
    CONSTANTS.CODE,
    CONSTANTS.FULL_NAME,
    CONSTANTS.REGION,
    CONSTANTS.SUBREGION,
    CONSTANTS.LANGUAGE,
  ];
  const inputRef: any = useRef(null);
  function setSearchBy(value: string) {
    throw new Error("Function not implemented.");
  }

  function handleChange(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-12">
        <RadioStatus />
        <div className="col-span-2 px-2">
          <RangeYear />
        </div>
        <div className="col-span-2 px-2">
          <Dropdown data={opstions} />
        </div>
        <div className="col-span-2 px-2 ">
          <Dropdown data={opstions} />
        </div>
        <div className="col-span-2 px-2">
          <SearchInput />
        </div>
        <div className="col-span-1 px-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default TestRedux;
