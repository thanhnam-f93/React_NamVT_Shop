import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeVideo } from "../../redux/actions/movie";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
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
        {/* <ReactPlayer
          width={300}
          height={445}
          style={{ marginLeft: "305px", top: "0px" }}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        /> */}
        <video controls autoPlay loop muted>
          <source src="https://youtu.be/KyXKGurjX_4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
