import React from "react";
import { NavLink } from "react-router-dom";

const Movie = ({ imdbRating, runtime, quality, year, title, poster }) => {
  return (
    <>
      <li>
        <div className="movie-card">
          <NavLink to="play">
            <figure className="card-banner">
              <img src={poster} alt={title} />
            </figure>
          </NavLink>

          <div className="title-wrapper">
            <NavLink to="detail">
              <h3 className="card-title">{title}</h3>
            </NavLink>

            <time dateTime="2022">{year}</time>
          </div>

          <div className="card-meta">
            <div className="badge badge-outline">{quality}</div>

            <div className="duration">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <time dateTime="PT104M">{runtime}</time>
            </div>

            <div className="rating">
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

              <data>{imdbRating}</data>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Movie;
