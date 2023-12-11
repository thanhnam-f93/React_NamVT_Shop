import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../movie/component/Header";
import Footer from "../movie/component/Footer";
import ListMoviePlay from "./ListMoviePlay";

const Home = () => {
  return (
    <>
      <div id="top">
        <Header />
        <main>
          <article>
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
