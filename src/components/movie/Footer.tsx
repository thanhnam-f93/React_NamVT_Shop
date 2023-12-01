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
              &copy; 2022 <NavLink to="#">codewithsadee</NavLink>. All Rights
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
