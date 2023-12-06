import React, { useEffect, useRef, useState } from "react";
import "rc-slider/assets/index.css";
import { CONSTANTS } from "../../utils/constant";
import RadioStatus from "../../components/movie/component/RadioStatus";
import RangeYear from "../../components/movie/component/RangeYear";
import Dropdown from "../../components/movie/component/Dropdown";
import SearchInput from "../../components/movie/component/SearchInput";
const SearchBar = () => {
  const optionsSearch = ["All", "Name", "Country", "Director", "Actors"];
  const opstionsRated = ["All", "PG-13", "R", "TV-MA", "TV-14", "N/A"];
  const [dataSearch, setDataSearch] = useState({});
  const handleSubmit = () => {
    console.log("Data Collect: ", dataSearch);
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
