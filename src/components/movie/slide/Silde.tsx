import React, { useEffect, useState } from "react";
import SildeItem from "./SildeItem";
import { movie } from "../../../../db.json";
const Silde = () => {
  const slides = movie.filter((movie) => movie.comingSoon);
  const renderSlide = slides.map((item, index) => {
    return <SildeItem key={index} {...item} />;
  });
  //
  const [index, setIndex] = useState(0);

  const delay = 6000;
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
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {renderSlide}
      </div>
    </div>
  );
};

export default Silde;
