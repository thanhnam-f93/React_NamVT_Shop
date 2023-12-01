import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateData, loadData } from "../../redux/actions/movie";
import Header from "./Header";
import Footer from "./Footer";
import Silde from "./Silde";
import Movie from "./Movie";
import DetailMovie from "./DetailMovie";
import ListMoviePlay from "./ListMoviePlay";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="top">
        <Header />
        <main>
          <article>
            {/* <Silde />
            <DetailMovie /> */}

            <Outlet />

            <ListMoviePlay />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
