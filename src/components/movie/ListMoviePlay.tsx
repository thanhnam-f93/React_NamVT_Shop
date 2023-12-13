import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadData,
  loadDataCategory,
  loadMovieComingSoon,
} from "../../redux/actions/movie";
import MovieI from "./Movie";
import { headerCategory } from "../../utils/data";
import { Movie } from "../../model/Movie";
const ListMoviePlay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("");
  const dispatch = useDispatch();
  const allMovie = useSelector((state: any) => state.movie.listMovie) || [];
  const totalPage = useSelector((state: any) => state.movie.totalPage) || 0;
  const movieComingSoon = useSelector((state: any) => state.movie.movieComing);

  const fetchData = async () => {
    if (page > totalPage) return;
    window.addEventListener("scroll", handleScroll);
    setLoading(true);
    if (!option) {
      dispatch(loadData(page));
    } else if (headerCategory.includes(option)) {
      dispatch(loadDataCategory({ page: page, category: option }));
    }
    const newData: any = [...data, ...allMovie];
    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, option]);

  const renderLabels = headerCategory?.map((label, index) => {
    return (
      <li key={index}>
        <button
          onClick={async () => {
            setData([]);
            setOption(label);
            setPage(1);
          }}
          className="filter-btn"
        >
          {label}
        </button>
      </li>
    );
  });
  const renderMovie = data?.map((movie: Movie, index: number) => {
    return <MovieI key={index} {...movie} />;
  });
  const renderMovieComing = movieComingSoon?.map(
    (movie: Movie, index: number) => {
      return <MovieI key={index} {...movie} />;
    }
  );

  const handleScroll = () => {
    // Auto trigger action when scroll to bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight * 0.8
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(loadMovieComingSoon());
    dispatch(loadData(page));
    setData(allMovie);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

export default ListMoviePlay;
