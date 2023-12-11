import React from "react";

const NewMovie = () => {
  return (
    <>
      <body id="topm">
        {/* - #HEADER */}

        <header className="header" data-header>
          <div className="container">
            <div className="overlay" data-overlay></div>

            <NavLink to="/" className="logo">
              <img
                className="w-9 h-9"
                src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                alt="Redux-Saga"
              />
            </NavLink>

            <div className="header-actions">
              <button className="search-btn">
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
              </button>

              <div className="lang-wrapper">
                <label htmlFor="language">
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
                </label>

                <select name="language" id="language">
                  <option value="en">EN</option>
                  <option value="au">AU</option>
                  <option value="ar">AR</option>
                  <option value="tu">TU</option>
                </select>
              </div>

              <button className="btn btn-primary">Sign in</button>
            </div>

            <button className="menu-open-btn" data-menu-open-btn>
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
            </button>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <NavLink to="/" className="logo">
                  <img
                    className="w-9 h-9"
                    src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                    alt="Redux-Saga"
                  />
                </NavLink>

                <button className="menu-close-btn" data-menu-close-btn>
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
                </button>
              </div>

              <ul className="navbar-list">
                <li>
                  <NavLink to="./index.html" className="navbar-link">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-link">
                    Movie
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-link">
                    Tv Show
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-link">
                    Web Series
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-link">
                    Pricing
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-social-list">
                <li>
                  <NavLink to="#" className="navbar-social-link">
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
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-social-link">
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
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-social-link">
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
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-social-link">
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
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="navbar-social-link">
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
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <article>
            {/* <!-- 
    - #HERO
  --> */}

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
                      <NavLink to="#">Romance,</NavLink>

                      <NavLink to="#">Drama</NavLink>
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

            <section className="top-rated">
              <div className="container">
                <p className="section-subtitle">Online Streaming</p>

                <h2 className="h2 section-title">Top Rated Movies</h2>

                <ul className="filter-list">
                  <li>
                    <button className="filter-btn">Movies</button>
                  </li>

                  <li>
                    <button className="filter-btn">TV Shows</button>
                  </li>

                  <li>
                    <button className="filter-btn">Documentary</button>
                  </li>

                  <li>
                    <button className="filter-btn">Sports</button>
                  </li>
                </ul>

                <ul className="movies-list">
                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-1.png"
                            alt="Sonic the Hedgehog 2 movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">Sonic the Hedgehog 2</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">2K</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT122M">122 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.8</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-2.png"
                            alt="Morbius movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">Morbius</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">HD</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT104M">104 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>5.9</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-3.png"
                            alt="The Adam Project movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">The Adam Project</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">4K</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT106M">106 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.0</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-4.png"
                            alt="Free Guy movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">Free Guy</h3>
                        </NavLink>

                        <time dateTime="2021">2021</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">4K</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT115M">115 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.7</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-5.png"
                            alt="The Batman movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">The Batman</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">4K</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT176M">176 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.9</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-6.png"
                            alt="Uncharted movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">Uncharted</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">HD</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT116M">116 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.0</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-7.png"
                            alt="Death on the Nile movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">Death on the Nile</h3>
                        </NavLink>

                        <time dateTime="2022">2022</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">2K</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT127M">127 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>6.5</data>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="movie-card">
                      <NavLink to="./movie-details.html">
                        <figure className="card-banner">
                          <img
                            src="./assets/images/movie-8.png"
                            alt="The King's Man movie poster"
                          />
                        </figure>
                      </NavLink>

                      <div className="title-wrapper">
                        <NavLink to="./movie-details.html">
                          <h3 className="card-title">The King's Man</h3>
                        </NavLink>

                        <time dateTime="2021">2021</time>
                      </div>

                      <div className="card-meta">
                        <div className="badge badge-outline">HD</div>

                        <div className="duration">
                          {/* <ion-icon name="time-outline"></ion-icon> */}

                          <time dateTime="PT131M">131 min</time>
                        </div>

                        <div className="rating">
                          {/* <ion-icon name="star"></ion-icon> */}

                          <data>7.0</data>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 
  <!-- 
    - #CTA
  --> */}

            <section className="cta">
              <div className="container">
                <div className="title-wrapper">
                  <h2 className="cta-title">Trial start first 30 days.</h2>

                  <p className="cta-text">
                    Enter your email to create or restart your membership.
                  </p>
                </div>

                <form action="" className="cta-form">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="email-field"
                  />

                  <button type="submit" className="cta-form-btn">
                    Get started
                  </button>
                </form>
              </div>
            </section>
          </article>
        </main>

        {/* 
<!-- 
- #FOOTER
--> */}

        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="footer-brand-wrapper">
                <NavLink to="/" className="logo">
                  <img
                    className="w-9 h-9"
                    src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                    alt="Redux-Saga"
                  />
                </NavLink>

                <ul className="footer-list">
                  <li>
                    <NavLink to="./index.html" className="footer-link">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="footer-link">
                      Movie
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="footer-link">
                      TV Show
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="footer-link">
                      Web Series
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="footer-link">
                      Pricing
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="divider"></div>

              <div className="quicklink-wrapper">
                <ul className="quicklink-list">
                  <li>
                    <NavLink to="#" className="quicklink-link">
                      Faq
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="quicklink-link">
                      Help center
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="quicklink-link">
                      Terms of use
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="quicklink-link">
                      Privacy
                    </NavLink>
                  </li>
                </ul>

                <ul className="social-list">
                  <li>
                    <NavLink to="#" className="social-link">
                      {/* <ion-icon name="logo-facebook"></ion-icon> */}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="social-link">
                      {/* <ion-icon name="logo-twitter"></ion-icon> */}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="social-link">
                      {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="social-link">
                      {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">
                &copy; 2022 <NavLink to="#">Movie Center</NavLink>. All Rights
                Reserved
              </p>

              <img
                src="./assets/images/footer-bottom-img.png"
                alt="Online banking companies logo"
                className="footer-bottom-img"
              />
            </div>
          </div>
        </footer>

        {/* <!-- 
- #GO TO TOP
--> */}

        <NavLink to="#top" className="go-top" data-go-top>
          {/* <ion-icon name="chevron-up"></ion-icon> */}
        </NavLink>
      </body>
    </>
  );
};

export default NewMovie;
