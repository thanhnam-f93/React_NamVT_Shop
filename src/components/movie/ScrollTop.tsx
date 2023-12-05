import React from "react";
import { NavLink } from "react-router-dom";

const ScrollTop = () => {
  return (
    <>
      <NavLink
        className="go-top"
        onClick={() => document.getElementById("top")?.scrollIntoView()}
        to={""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </NavLink>
    </>
  );
};

export default ScrollTop;
