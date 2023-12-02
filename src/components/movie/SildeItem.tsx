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
              backgroundImage: `url(${movie.poster})`,
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
                    <a href="#">Romance,</a>

                    <a href="#">Drama</a>
                  </div>

                  <div className="date-time">
                    <div>
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

                      <time dateTime="2022">{movie.year}</time>
                    </div>

                    <div>
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

                      <time dateTime="PT128M">{movie.runtime} min</time>
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
