import React from "react";
import { Link, useLocation } from "react-router-dom";

const DetailMovie = () => {
  const location = useLocation();
  const movie = location.state;
  // list category of movie
  const category = movie.genre.split(",");
  //

  return (
    <>
      <section className="movie-detail">
        <div className="container">
          <figure className="movie-detail-banner">
            <img src={movie.poster} alt="Free guy movie poster" />

            <button className="play-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="90"
                width="90"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
                />
              </svg>
            </button>
          </figure>

          <div className="movie-detail-content grid-flow-row-dense grid-cols-10">
            <div className="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="27"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ebd700"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>

            <p className="detail-subtitle col-span-9">
              {movie.imdbRating} / {movie.imdbVotes} Votes
            </p>

            <h1 className="h1 detail-title">
              <strong>{movie.title}</strong>
            </h1>
            <p className="detail-subtitle">Country: {movie.country}</p>
            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-fill">{movie.rated}</div>

                <div className="badge badge-outline">{movie.quality}</div>
              </div>

              <div className="ganre-wrapper">
                {category.map(
                  (
                    item:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined,
                    index: React.Key | null | undefined
                  ) => {
                    return (
                      <div key={index}>
                        <Link
                          to="/movie-play/"
                          state={`http://localhost:3000/movie/?genre_like=${item}`}
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="date-time">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="17.5"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#f4ca57"
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>

                  <time dateTime="2021">{movie.year}</time>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="17.5"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#f4ca57"
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>

                  <time dateTime="PT115M">{movie.runtime}</time>
                </div>
              </div>
            </div>
            <p className="storyline">{movie.plot}</p>
            <div className="details-actions">
              <button className="share">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="21"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#fafcff"
                    d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
                  />
                </svg>

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>
              </div>

              <button className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="15"
                  viewBox="0 0 384 512"
                >
                  <path fill="#fafcff" d="M384 256L0 32V480L384 256z" />
                </svg>

                <span>Watch Now</span>
              </button>
            </div>
            <a
              href="./assets/images/movie-4.png"
              download
              className="download-btn"
            >
              <span>Download</span>

              {/* <ion-icon name="download-outline"></ion-icon> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailMovie;
