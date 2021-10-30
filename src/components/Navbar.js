import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo-1.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("slider").style.top = "0";
    } else {
      document.getElementById("slider").style.top = "-110px";
    }
  }

  return (
    <>
      <SliderNavbar id="slider">
        <Grid container className="slider-row">
          <div className="slider-column slider-column1">
            <Link to="/">
              <img src={logo} alt="national-hole" />
              <div className="tag-line">
                <h1>National Hole-In-One Registry</h1>
                <h2>The Premier Worldwide Hole-In-One Golf Registry</h2>
              </div>
            </Link>
          </div>
          <div className="slider-column slider-column2">
            <div className="slider-navbar">
              <ul>
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="menu-item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="menu-item">
                  <Link to="/look-up">Registry Lookup</Link>
                </li>
                <li className="menu-item">
                  <Link>Certificates</Link>
                </li>
                <li className="menu-item">
                  <Link>Products</Link>
                </li>
                <li className="menu-item">
                  <Link>Facts & Feats</Link>
                </li>
                <li className="menu-item">
                  <Link to="./contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </SliderNavbar>
      <MobileMenu>
        <div className="sd-top">
          <div className="row">
            <div className="cat-parent" onClick={() => setShowMenu(!showMenu)}>
              <i className="icon">
                <FaBars />
              </i>
            </div>
            <div
              className={
                showMenu ? "sd-mobile-menu show-menu" : "sd-mobile-menu"
              }
            >
              <div className="top-menu">
                <ul className="mobile-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link>Certificates</Link>
                  </li>
                  <li>
                    <Link>Products</Link>
                  </li>
                  <li>
                    <Link>Facts and Feats</Link>
                  </li>
                  <li>
                    <Link>Records</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/look-up">Search Registry</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mobile-logo">
              <Link to="/">
                <img src={logo} alt="national-hole" />
              </Link>
            </div>
            <div className="simple-mob-text">
              <span>Over 90,828 Registrations Submitted!</span>
            </div>
          </div>
        </div>
      </MobileMenu>

      <NavbarWrapper>
        <Grid container>
          <Grid item id="site-logo">
            <Link to="/">
              <img src={logo} alt="national-hole" />
              <div id="tag-line">
                <h1>National Hole-In-One Registry</h1>
                <h2>The Premier Worldwide Hole-In-One Golf Registry</h2>
              </div>
            </Link>
          </Grid>
          <Grid item id="sd-socials">
            <span>
              Holes In One Submitted: 90,790
              <Link className="sd-btn hide-on-mobile">Register Now!</Link>
            </span>
            <div id="site-nav">
              <div className="nav-bar">
                <div className="menu-widget-area">
                  <div className="menu-main-menu-container">
                    <ul className="menu-main-item">
                      <li className="menu-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/register">Register</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/look-up">Registry Lookup</Link>
                      </li>
                      <li className="menu-item">
                        <Link>Certificates</Link>
                      </li>
                      <li className="menu-item">
                        <Link>Products</Link>
                      </li>
                      <li className="menu-item">
                        <Link>Facts & Feats</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="./contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  padding: 10px 0;
  width: 100%;

  .MuiGrid-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 1130px;
  }

  #site-logo,
  #sd-socials {
    padding-inline: 0.9375rem;
    float: left;
  }
  #sd-socials {
    float: right;
  }

  #site-logo a {
    display: inline-block;
    float: left;
    text-decoration: none;
  }

  #site-logo a img {
    max-width: 90px;
    float: left;
    height: auto;
  }
  #tag-line {
    margin-left: 15px;
    float: left;
  }

  #tag-line h1 {
    color: #0d4a2b;
    font-family: RobotoSlabLight;
    font-size: 21px;
    line-height: 1em;
    margin-block: 20px 10px;
    font-weight: 500;
  }
  #tag-line h2 {
    font-size: 13px;
    font-family: RalewayThin;
    color: #333;
    line-height: 1em;
    padding-bottom: 10px;
    margin: 0;
  }

  #sd-socials span {
    font-family: RobotoSlabLight;
    font-size: 19px;
    margin-top: 10px;
    display: block;
    color: #0d4a2b;
    text-align: right;
  }

  a.sd-button,
  a.hide-on-mobile {
    margin-left: 5px;
    padding: 8px 15px;
    font-size: 13px;
    position: relative;
    top: -3px;
    background: #0d4a2b;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    border: 1px solid #0d4a2b;
    text-align: center;
    outline: 0;
    font-family: RalewayThin;
    font-weight: 600;
    text-decoration: none;
  }
  .nav-bar {
    text-align: center;
    padding-top: 10px;
  }

  .menu-main-item {
    text-align: right;
    list-style: none;
  }
  .menu-item {
    display: inline-block;
    text-align: center;
  }
  .menu-item a {
    display: block;
    font-size: 13px;
    padding: 7px 5px;
    border-radius: 5px;
    color: #231f20;
    font-family: Arial;
    font-weight: 600;
    line-height: 1.7em;
    transition: background-color 0.3s linear, color 0.3s linear;
  }
  .menu-item a:hover {
    color: #fff;
    background: #484848;
  }

  @media only screen and (min-width: 641px) {
    #site-log {
      width: 41.66667%;
    }
    #sd-socials {
      width: 58.33333%;
      flex-grow: 1;
    }
  }
  @media screen and (min-width: 841px) and (max-width: 1039px) {
    #site-logo,
    #sd-socials {
      width: 100% !important;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    #sd-socials span {
      text-align: center;
    }
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const SliderNavbar = styled.div`
  padding: 5px 0;
  position: fixed;
  top: -110px;
  width: 100%;
  background: #fff;
  transition: top 0.5s ease-in-out;
  box-shadow: 0 0 3px #aaa;
  z-index: 10;

  .slider-row {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 1130px;
  }

  .slider-row:before {
    content: " ";
    display: table;
  }

  .slider-column {
    position: relative;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    float: left;
  }

  .slider-column2 {
    float: right;
  }

  .slider-column1 a {
    display: inline-block;
    float: left;
    color: #0d4a2b;
  }

  .slider-column1 a img {
    max-width: 55px !important;
    height: auto;
    float: left;
  }

  .tag-line {
    float: left;
    margin-left: 15px;
    font-size: 18px;
  }

  .tag-line h1 {
    font-family: RobotoSlabLight, serif;
    color: #0d4a2b;
    padding-bottom: 10px;
    line-height: 1em;
    margin-top: 10px;
  }

  .tag-line h2 {
    font-size: 11px;
    font-family: RalewayThin, sans-serif;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }

  .slider-navbar {
    margin-top: 10px;
    padding: 0 !important;
    border: 0 !important;
    text-align: right;
  }

  .slider-navbar ul {
    list-style: none;
  }
  .slider-navbar ul li {
    display: inline-block;
    text-align: center;
  }

  .slider-navbar ul li a {
    display: block;
    font-size: 13px;
    padding: 7px 6px;
    border-radius: 5px;
    color: #231f20;
    font-weight: 600;
    font-family: Arial;
    transition: all 0.5s ease-in-out;
  }

  .slider-navbar ul li a:hover {
    color: #fff;
    background: #484848;
  }
  @media only screen and (min-width: 641px) {
    .slider-column1 {
      width: 41.66667%;
    }
    .slider-column2 {
      width: 58.33333%;
    }
  }

  @media screen and (min-width: 841px) and (max-width: 1039px) {
    .slider-column1,
    .slider-column2 {
      width: 100% !important;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: 150px) and (max-width: 1100px) {
    .tag-line h1 {
      font-size: 16px !important;
      margin-top: 10px;
    }
    .tag-line h2 {
      font-size: 14px !important;
    }
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  .sd-top {
    width: 100%;
    float: left;
    text-align: right;
    border-bottom: 3px solid #0d492b;
  }
  .row {
    // display: block !important;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;
    border-bottom: 3px solid #0d4a2b;
    display: none;
    align-items: center;
  }
  .row:before {
    content: " ";
    display: table;
  }

  .cat-parent {
    width: 50px;
    float: left;
    text-align: center;
  }

  .icon {
    display: block;
    padding: 8px;
    font-size: 34px;
    background: #0d4a2b;
    color: #fff;
    cursor: pointer;
  }

  .mobile-logo {
    width: 46px;
    float: left;
    margin: 2px 10px 0;
  }
  .mobile-logo a {
    display: block;
  }
  .mobile-logo a img {
    float: left;
    max-width: 100%;
    height: auto;
  }

  .simple-mob-text {
    float: right;
    flex-grow: 1;
    padding: 0 13px;
  }
  .simple-mob-text span {
    font-family: RobotoSlabLight, serif;
    font-size: 13px;
    display: block;
    text-align: right;
    color: #0d4a2b;
    line-height: 1.7em;
  }

  .sd-mobile-menu {
    position: absolute;
    width: 100%;
    text-align: left;
    top: -1000px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7em;
  }
  .show-menu {
    top: 40px !important;
  }
  .mobile-menu {
    list-style: none;
  }
  .mobile-menu li a {
    padding: 10px;
    background: #0d4a2b;
    color: #fff;
    display: block;
    font-size: 17px;
    border-bottom: 1px solid #155434;
    font-family: RalewayThin, sans-serif;
  }
  @media screen and (max-width: 840px) {
    .row {
      display: flex;
    }
  }
`;
