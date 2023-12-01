import React from "react";

const Silde = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Filmlane</p>

            <h1 className="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, & More.
            </h1>

            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 18</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="#">Romance,</a>

                <a href="#">Drama</a>
              </div>

              <div className="date-time">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>

                  <time dateTime="2022">2022</time>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                    />
                  </svg>

                  <time dateTime="PT128M">128 min</time>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                />
              </svg>

              <span>Watch now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Silde;
