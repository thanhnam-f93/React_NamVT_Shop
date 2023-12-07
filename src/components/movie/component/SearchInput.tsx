import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const SearchInput = ({ dataSearch, setDataSearch, title }) => {
  function handleChange(e) {
    setDataSearch({ ...dataSearch, textInput: e.target.value });
  }

  return (
    <>
      <label className="font-semibold pl-1" htmlFor="searchInput">
        {title}
      </label>
      <input
        type="text"
        name="Input text"
        id="searchInput"
        className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="Input text"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchInput;
