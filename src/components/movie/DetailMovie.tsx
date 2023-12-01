import React from "react";

const DetailMovie = () => {
  return (
    <>
      <section className="movie-detail">
        <div className="container">
          <figure className="movie-detail-banner">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
              alt="Free guy movie poster"
            />

            <button className="play-btn">
              {/* <ion-icon name="play-circle-outline"></ion-icon> */}
            </button>
          </figure>

          <div className="movie-detail-content">
            <p className="detail-subtitle">New Episodes</p>

            <h1 className="h1 detail-title">
              Free <strong>Guy</strong>
            </h1>

            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 13</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="#">Comedy,</a>

                <a href="#">Action,</a>

                <a href="#">Adventure,</a>

                <a href="#">Science Fiction</a>
              </div>

              <div className="date-time">
                <div>
                  {/* <ion-icon name="calendar-outline"></ion-icon> */}

                  <time dateTime="2021">2021</time>
                </div>

                <div>
                  {/* <ion-icon name="time-outline"></ion-icon> */}

                  <time dateTime="PT115M">115 min</time>
                </div>
              </div>
            </div>

            <p className="storyline">
              A bank teller called Guy realizes he is a background character in
              an open world video game called Free City that will soon go
              offline.
            </p>

            <div className="details-actions">
              <button className="share">
                {/* <ion-icon name="share-social"></ion-icon> */}

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>
              </div>

              <button className="btn btn-primary">
                {/* <ion-icon name="play"></ion-icon> */}

                <span>Watch Now</span>
              </button>
            </div>

            <a
              href="./assets/images/movie-4.png"
              download
              className="download-btn"
            >
              <span>Download</span>

              {/* <ion-icon name="download-outline"></ion-icon> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailMovie;
