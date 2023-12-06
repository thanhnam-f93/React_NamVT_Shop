import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import "./../../../scss/_sort.scss"; // Import your CSS file

const SortComponent = ({ sortOrder, setSortOder }) => {
  const handleSort = (order) => {
    setSortOder(order);
  };

  return (
    <div className="group-sort">
      <button
        onClick={() => handleSort("asc")}
        className={`sort-button ${sortOrder === "asc" ? "active" : ""}`}
      >
        <FaSortUp />
      </button>
      <button
        onClick={() => handleSort("desc")}
        className={`sort-button ${sortOrder === "desc" ? "active" : ""}`}
      >
        <FaSortDown />
      </button>
    </div>
  );
};

export default SortComponent;
