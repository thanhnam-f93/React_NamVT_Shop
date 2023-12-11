import React, { useRef } from "react";

import { NavLink } from "react-router-dom";
const ListMovie = () => {
  const mailRef = useRef();
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="cta-title">Trial start first 30 days.</h2>

            <p className="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form className="cta-form">
            <input
              ref={mailRef}
              id="emailSubmit"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="email-field"
            />
            <NavLink
              to={{ pathname: "/signup" }}
              state={{ email: mailRef?.current?.value }}
            >
              <button type="button" className="cta-form-btn">
                Get started
              </button>
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
};

export default ListMovie;
