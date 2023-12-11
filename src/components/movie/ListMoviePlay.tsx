import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadData,
  loadDataBy,
  loadMovieComingSoon,
} from "../../redux/actions/movie";
import Movie from "./Movie";
import { headerCategory } from "../../utils/data";
const ListMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const allMovie = useSelector((state: any) => state.movie.listMovie) || [];
  const movieComingSoon = useSelector((state: any) => state.movie.movieComing);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(loadMovieComingSoon());
    dispatch(loadData(page));
    setData(allMovie);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = async () => {
    window.addEventListener("scroll", handleScroll);
    setLoading(true);
    dispatch(loadData(page));
    const newData: any = [...data, ...allMovie];
    setData(newData);

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    // Auto trigger action when scroll to bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  };

  const renderLabels = headerCategory?.map((label, index) => {
    return (
      <li key={index}>
        <button
          onClick={() => {
            setData([]);
            setPage(1);
            dispatch(loadDataBy(label));
          }}
          className="filter-btn"
        >
          {label}
        </button>
      </li>
    );
  });
  const renderMovie = data?.map((movie, index) => {
    return <Movie key={index} {...movie} />;
  });
  const renderMovieComing = movieComingSoon?.map((movie, index) => {
    return <Movie key={index} {...movie} />;
  });

  return (
    <>
      {/* Upcoming Movie */}
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>
          <h2 className="h2 section-title">Upcoming Movies</h2>
          <ul className="filter-list"></ul>
          <ul className="movies-list">
            {movieComingSoon?.length > 0
              ? renderMovieComing
              : loading && <p>Loading...</p>}
          </ul>
        </div>
      </section>
      {/*  */}
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>

          <h2 className="h2 section-title">Top Hot Movies</h2>

          <ul className="filter-list">{renderLabels}</ul>

          <ul className="movies-list">
            {data?.length > 0 ? renderMovie : loading && <p>Loading...</p>}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ListMovie;
