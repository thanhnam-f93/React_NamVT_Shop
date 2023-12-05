import React from "react";
import ScrollTop from "./ScrollTop";
import footerImg from "./../../images/footer-bottom-img.png";
import { NavLink } from "react-router-dom";
import ContactBar from "./ContactBar";
const Footer = () => {
  return (
    <>
      <ContactBar />
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
              <NavLink to="./index.html" className="logo">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fafcff"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fafcff"
                        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                      />
                    </svg>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="15.5"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#fafcff"
                        d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                      />
                    </svg>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="17.5"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#f1f4f9"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 20223 <NavLink to="#">Movie Center</NavLink>. All Rights
              Reserved
            </p>

            <img
              src={footerImg}
              alt="Online banking companies logo"
              className="footer-bottom-img"
            />
          </div>
        </div>
      </footer>

      <ScrollTop />
    </>
  );
};

export default Footer;
