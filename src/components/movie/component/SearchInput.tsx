import React, { useEffect, useRef, useState } from "react";

const SearchInput = () => {
  function handleChange(): void {
    throw new Error("Function not implemented.");
  }
  const inputRef: any = useRef(null);
  return (
    <>
      <label className="sr-only">Search</label>
      <input
        ref={inputRef}
        type="text"
        name="searh-by"
        id="hs-table-with-pagination-search"
        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="Search items"
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
