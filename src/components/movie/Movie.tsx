import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeVideo, loadData } from "../../redux/actions/movie";
import { scrollTop } from "../../utils/Utils";

const Movie = (movie) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeVideo());
    scrollTop();
  };

  return (
    <>
      <li>
        <div className="movie-card" onClick={handleClick}>
          <NavLink to="detail" state={movie}>
            <figure className="card-banner">
              <img src={movie.poster} alt={movie.title} />
            </figure>
          </NavLink>

          <div className="title-wrapper">
            <h3 className="card-title">{movie.title}</h3>
            <time dateTime="2022">{movie.year}</time>
          </div>

          <div className="card-meta">
            <div className="badge badge-outline">{movie.quality}</div>

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

              <time dateTime="PT104M">{movie.runtime}</time>
            </div>

            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="27"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#fde90d"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>

              <data>{movie.imdbRating}</data>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Movie;
