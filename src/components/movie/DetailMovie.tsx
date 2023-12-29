import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Video from "./Video";
import { useDispatch, useSelector } from "react-redux";
import { addCart, increase, openVideo } from "../../redux/actions/movie";
import Swal from "sweetalert2";
import CartList from "./cart/CartList";
import ActorList from "./ActorList";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movie = location.state;
  const disPlay = useSelector((state: any) => state.movie.disPlay);
  const error = useSelector((state: any) => state.movie.error);
  const movieCart = useSelector((state: any) => state.movie.movieCart);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Have not data..${error}`,
      });
    }
  }, [error]);
  // list category of movie
  const category = movie.genre.split(",");
  function addMovieCart() {
    setModalOpen(true);
    const cart = {
      movieId: movie.id,
      userId: localStorage.getItem("userId"),
      image: movie.poster,
      name: movie.title,
      price: movie.price,
      year: movie.year,
      total: 1,
      time: new Date(),
    };

    dispatch(checkDuplicate(cart) ? addCart(cart) : increase(cart));
  }
  const checkDuplicate = (newCart) => {
    for (let index = 0; index < movieCart.length; index++) {
      const element = movieCart[index];
      if (element.movieId == newCart.movieId) {
        return false;
      }
    }
    return true;
  };
  //

  return (
    <>
      <CartList isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <section className="movie-detail">
        <div className="container">
          <div className="grid grid-cols-1 gap-4">
            {/*  */}
            <figure className="movie-detail-banner">
              <img src={movie.poster} alt="Free guy movie poster" />

              <button
                className="play-btn"
                onClick={() => {
                  dispatch(openVideo());
                }}
              >
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
            {/*  */}

            <ActorList actors={movie.imagesActor} />
          </div>

          <div className="movie-detail-content grid-flow-row-dense grid-cols-10">
            <p className="detail-subtitle col-span-9">
              {[movie.imdbRating, movie.imdbVotes].includes("N/A")
                ? "Comming Soon"
                : `${movie.imdbRating} Star / ${movie.imdbVotes} Votes`}
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
                        <NavLink
                          to="/movie-play/"
                          state={`https://react-namvt-default-rtdb.firebaseio.com/movie.json/?genre_like=${item}`}
                        >
                          {item}
                        </NavLink>
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
                    height="32"
                    width="32"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#f9df34"
                      d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
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
                <NavLink to="https://www.facebook.com/">
                  {" "}
                  <span>Share</span>
                </NavLink>
              </button>

              <div className="title-wrapper">
                <p className="title">Price Movie</p>
                <div className="grid grid-cols-2 pt-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffea61"
                      d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
                    />
                  </svg>
                  <p className="font-extrabold text-yellow-600 ">
                    {movie.price}
                  </p>
                </div>
              </div>

              <button className="btn btn-primary" onClick={addMovieCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="15"
                  viewBox="0 0 384 512"
                >
                  <path fill="#fafcff" d="M384 256L0 32V480L384 256z" />
                </svg>

                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {disPlay != "none" && <Video />}

        {/*  */}
      </section>
    </>
  );
};

export default DetailMovie;
