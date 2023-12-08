import React from "react";
import { NavLink } from "react-router-dom";

const Silde = (movie) => {
  return (
    <>
      <div className="slide">
        <NavLink to="detail" state={movie}>
          <section
            className="hero"
            style={{
              backgroundImage: `url(${movie.landscape})`,
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Coming Soon</p>

                <h1 className="h1 hero-title">
                  <strong>{movie.title}</strong>
                </h1>

                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">{movie.rated}</div>

                    <div className="badge badge-outline">{movie.quality}</div>
                  </div>

                  <div className="ganre-wrapper">
                    {/* <a href="#">Romance,</a>

                    <a href="#">Drama</a> */}
                  </div>

                  <div className="date-time">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="28"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#f9e71f"
                          d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                        />
                      </svg>

                      <time className="text-2xl px-2 underline" dateTime="2022">
                        {movie.year}
                      </time>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#f9df34"
                          d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                        />
                      </svg>

                      <time
                        className="text-sxl px-2 underline"
                        dateTime="PT128M"
                      >
                        {movie.runtime} min
                      </time>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary">
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

                  <span>Watch now</span>
                </button>
              </div>
            </div>
          </section>
        </NavLink>
      </div>
    </>
  );
};

export default Silde;
