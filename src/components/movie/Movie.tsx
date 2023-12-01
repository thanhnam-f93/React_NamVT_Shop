import React from "react";

const Movie = ({ imdbRating, runtime, quality, year, title, poster }) => {
  return (
    <>
      <li>
        <div className="movie-card">
          <a href="./movie-details.html">
            <figure className="card-banner">
              <img src={poster} alt={title} />
            </figure>
          </a>

          <div className="title-wrapper">
            <a href="./movie-details.html">
              <h3 className="card-title">{title}</h3>
            </a>

            <time dateTime="2022">{year}</time>
          </div>

          <div className="card-meta">
            <div className="badge badge-outline">{quality}</div>

            <div className="duration">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 128v144h96"
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
