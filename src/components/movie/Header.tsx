import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const navigate = useNavigate();
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
            <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
              2
            </p>
            <button
              className="search-btn pl-0"
              onClick={() => {
                navigate("/");
              }}
            >
              <FaCartShopping />
            </button>
            <NavLink to="/movie">
              <span className="font-bold text-white">Management</span>
            </NavLink>
            {/*  */}
            <NavLink to="/signin">
              <button className="btn btn-primary">Sign in</button>
            </NavLink>
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
                <NavLink to="/movie-play" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Home
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/movie-play" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Movie
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/movie" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Manage
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/statistic" className="navbar-link">
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Statistic
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/pricing" className="navbar-link">
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
