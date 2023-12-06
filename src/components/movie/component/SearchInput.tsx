import React, { useEffect, useRef, useState } from "react";

const SearchInput = ({ dataSearch, setDataSearch, title }) => {
  function handleChange(e) {
    setDataSearch({ ...dataSearch, textInput: e.target.value });
  }
  const inputRef: any = useRef(null);
  return (
    <>
      <label htmlFor="searchInput">{title}</label>
      <input
        ref={inputRef}
        type="text"
        name="searh-by"
        id="searchInput"
        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="Input text"
        onClick={() => {
          inputRef.current?.focus();
          inputRef.current.style.backgroundColor = "white";
        }}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchInput;
