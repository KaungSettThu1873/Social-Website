/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="bgColor">
        <div className="navbar  ">
          <div className="row container-fluid  ">
            <img
              className="  col-1 logoSize rounded-circle"
              src="/image/LogoForSocialWeb.jpg"
            />
            <form class="d-flex col-3" role="search">
              <input
                class="form-control me-2 rounded-pill  "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>

            <button
              type="button"
              className="btn  btn-outline-dark  border-0 col-1 offset-2"
            >
              Home
            </button>
            <button
              type="button"
              className="btn  btn-outline-dark  border-0 col-1"
            >
              Friends
            </button>
            <button
              type="button"
              className="btn  btn-outline-dark  border-0 col-1"
            >
              Videos
            </button>
            <button
              type="button"
              className="btn  btn-outline-dark  border-0 col-1 "
            >
              Groups
            </button>
            <button
              type="button"
              className="btn  btn-outline-dark  border-0 col-1 "
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
