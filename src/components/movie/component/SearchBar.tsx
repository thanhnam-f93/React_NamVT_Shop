import React, { createRef, useEffect, useRef, useState } from "react";
import "rc-slider/assets/index.css";
import { CONSTANTS } from "../../../utils/constant";
import RadioStatus from "../component/RadioStatus";
import RangeYear from "../component/RangeYear";
import Dropdown from "../component/Dropdown";
import SearchInput from "../component/SearchInput";
import { useDispatch } from "react-redux";
import { loadDataBy } from "../../../redux/actions/movie";
import { optionsSearch, opstionsRated } from "../../../utils/data";
import Swal from "sweetalert2";
const SearchBar = ({ dataSearch, setDataSearch }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("Data Collect: ", dataSearch);
    if (dataSearch.typeSearch && !dataSearch.textInput) {
      Swal.fire({
        title: "Mission?",
        text: `You chossed search with - ${dataSearch.typeSearch} 
             .Please provide data input`,
        icon: "question",
      });

      return;
    }

    dispatch(loadDataBy(dataSearch));
  };
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-12">
        <div className="col-span-2 px-2">
          <RadioStatus dataSearch={dataSearch} setDataSearch={setDataSearch} />{" "}
        </div>
        <div className="col-span-2 px-2">
          <RangeYear dataSearch={dataSearch} setDataSearch={setDataSearch} />
        </div>

        <div className="col-span-2 px-2 ">
          <Dropdown
            id={"search-dropdown1"}
            data={opstionsRated}
            dataSearch={dataSearch}
            setDataSearch={setDataSearch}
            title={"Movie Classification"}
          />
        </div>
        <div className="col-span-1 px-1 "></div>
        <div className="col-span-2 px-2">
          <SearchInput
            dataSearch={dataSearch}
            setDataSearch={setDataSearch}
            title={"Search Item"}
          />
        </div>
        <div className="col-span-2 px-2">
          <Dropdown
            id={"search-dropdown2"}
            data={optionsSearch}
            dataSearch={dataSearch}
            setDataSearch={setDataSearch}
            title={"Type Search"}
          />
        </div>
        <div className="col-span-1 px-5 pt-6">
          <button
            onClick={handleSubmit}
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

export default SearchBar;
