import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreateData,
  loadData,
  loadMovieComingSoon,
} from "../../redux/actions/movie";
import Movie from "./Movie";
const ListMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const allMovie = useSelector((state: any) => state.movie.listMovie);
  const movieComingSoon = useSelector((state: any) => state.movie.movieComing);

  console.log("movieComingSoon: ", movieComingSoon);

  useEffect(() => {
    dispatch(loadMovieComingSoon());
    dispatch(loadData());
  }, []);

  const renderMovie = allMovie?.map((movie, index) => {
    return <Movie key={index} {...movie} />;
  });
  const renderMovieComing = movieComingSoon?.map((movie, index) => {
    return <Movie key={index} {...movie} />;
  });
  const renderMovieField = (
    <h1 className="bg-red-600 font-bold">Network Error </h1>
  );
  return (
    <>
      {/* Upcoming Movie */}
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>

          <h2 className="h2 section-title">Upcoming Movies</h2>

          <ul className="filter-list">
            <li>
              <button className="filter-btn">Movies</button>
            </li>

            <li>
              <button className="filter-btn">TV Shows</button>
            </li>

            <li>
              <button className="filter-btn">Anime</button>
            </li>

            <li>
              <button className="filter-btn">Sports</button>
            </li>
          </ul>

          <ul className="movies-list">
            {movieComingSoon?.length > 0 ? renderMovieComing : renderMovieField}
          </ul>
        </div>
      </section>
      {/*  */}
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>

          <h2 className="h2 section-title">Top Rated Movies</h2>

          <ul className="filter-list">
            <li>
              <button className="filter-btn">Movies</button>
            </li>

            <li>
              <button className="filter-btn">TV Shows</button>
            </li>

            <li>
              <button className="filter-btn">Documentary</button>
            </li>

            <li>
              <button className="filter-btn">Sports</button>
            </li>
          </ul>

          <ul className="movies-list">
            {allMovie?.length > 0 ? renderMovie : renderMovieField}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ListMovie;
