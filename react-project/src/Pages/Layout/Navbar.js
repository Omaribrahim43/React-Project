import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" role="navigation">
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="search">
                <a href="#">
                  <i className="material-icons">search</i>
                </a>
              </div>
              <div className="tel">
                <a href="tel:03301234567">
                  <i className="material-icons">phone in talk</i> 0330 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="navbar-header">
          <a href="index.html" className="logo" title="Craft beer landing page">
            <img src="assets/images/logo.svg" alt="Craft Beer HTML Template" />
          </a>
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul id="menu-primary" className="nav navbar-nav">
            <li className="active">
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/AllMovies">AllMovies</Link>

            </li>
            <li>
            <Link to="/profile">profile</Link>

            </li>
            <li>
              <a href="shortcodes.html">About us</a>
            </li>
            {/* <li className="dropdown">
              <a href="news.html">News</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="news-single.html">News single</a>
                </li>
              </ul>
            </li> */}
            <li>
            <Link to="/ContactUs">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
