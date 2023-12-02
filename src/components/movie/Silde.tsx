import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateData, loadData } from "../../redux/actions/movie";
import SildeItem from "./SildeItem";
import { movie } from "../../../db.json";
const Silde = () => {
  // http://localhost:3000/movie?_sort=year&_order=desc&_limit=5
  // const dispatch = useDispatch();
  // const slides = useSelector((state: any) => state.movie.listMovie)

  const slides = movie.filter((movie) => movie.comingSoon);

  const renderSlide = slides.map((item, index) => {
    return <SildeItem key={index} {...item} />;
  });
  //
  const [index, setIndex] = useState(0);

  const delay = 3000;
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    // <div className="slideshow"> Old Code
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {renderSlide}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>

    // <>
    //   {" "}
    //   <section className="hero">
    //     <div className="container">
    //       <div className="hero-content">
    //         <p className="hero-subtitle">Filmlane</p>

    //         <h1 className="h1 hero-title">
    //           Unlimited <strong>Movie</strong>, TVs Shows, & More.
    //         </h1>

    //         <div className="meta-wrapper">
    //           <div className="badge-wrapper">
    //             <div className="badge badge-fill">PG 18</div>

    //             <div className="badge badge-outline">HD</div>
    //           </div>

    //           <div className="ganre-wrapper">
    //             <a href="#">Romance,</a>

    //             <a href="#">Drama</a>
    //           </div>

    //           <div className="date-time">
    //             <div>
    //               {/* <ion-icon name="calendar-outline"></ion-icon> */}

    //               <time dateTime="2022">2022</time>
    //             </div>

    //             <div>
    //               {/* <ion-icon name="time-outline"></ion-icon> */}

    //               <time dateTime="PT128M">128 min</time>
    //             </div>
    //           </div>
    //         </div>

    //         <button className="btn btn-primary">
    //           {/* <ion-icon name="play"></ion-icon> */}

    //           <span>Watch now</span>
    //         </button>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

export default Silde;
