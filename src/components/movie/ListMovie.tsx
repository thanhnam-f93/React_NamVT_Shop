import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateData, loadData } from "../../redux/actions/movie";
import Movie from "./Movie";
const ListMovie = () => {
  const dispatch = useDispatch();
  const allMovie = useSelector((state: any) => state.movie.listMovie);

  console.log("Data: ", allMovie);

  const renderMovie = allMovie?.map((movie) => {
    <Movie
      imdbRating={movie.imdbRating}
      runtime={movie.runtime}
      quality={movie.quality}
      year={movie.year}
      title={movie.title}
      poster={movie.poster}
    />;
  });
  const renderMovieField = (
    <h1 className="bg-red-600 font-bold">Network Error </h1>
  );
  return (
    <div>
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
          {allMovie?.length > 0 ? renderMovie : renderMovieField}
          <ul className="movies-list"></ul>
        </div>
      </section>
    </div>
  );
};

export default ListMovie;
