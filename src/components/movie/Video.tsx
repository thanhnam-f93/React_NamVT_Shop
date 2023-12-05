import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeVideo } from "../../redux/actions/movie";
import YouTube from "react-youtube";
const Video = () => {
  const dispatch = useDispatch();
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      dispatch(closeVideo());
    }
  });
  return (
    <div id="play" className="play ">
      <div className="play-movie ">
        <video controls autoPlay loop muted>
          <source src="https://youtu.be/KyXKGurjX_4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
