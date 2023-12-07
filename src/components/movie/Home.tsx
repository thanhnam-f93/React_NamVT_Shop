import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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
