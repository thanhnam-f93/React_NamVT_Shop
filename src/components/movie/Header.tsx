import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <a href="./index.html" className="logo">
            <img
              className="w-9 h-9"
              src="https://cdn.worldvectorlogo.com/logos/redux.svg"
              alt="Redux-Saga"
            />
          </a>

          <div className="header-actions">
            <button className="search-btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </button>
            <span className="font-bold text-white">Management</span>
            {/*  */}
            <button className="btn btn-primary">Sign in</button>
          </div>

          <button className="menu-open-btn" data-menu-open-btn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
              />
            </svg>
          </button>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="./index.html" className="logo">
                <img
                  className="w-9 h-9"
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  alt="Redux-Saga"
                />
              </a>

              <button className="menu-close-btn" data-menu-close-btn>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                  />
                </svg>
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <NavLink to="/" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Home
                  </span>
                </NavLink>
                {/* <a href="./index.html" className="navbar-link">
                  Home
                </a> */}
              </li>

              <li>
                <NavLink to="/" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Movie
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Tv Show
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Web Series
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Pricing
                  </span>
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-social-list">
              <li>
                <a href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
