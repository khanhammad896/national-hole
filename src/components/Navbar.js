import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo-1.png";
const Navbar = () => {
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
                  <Link>Register</Link>
                </li>
                <li className="menu-item">
                  <Link>Registry Lookup</Link>
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

      <NavbarWrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={3} id="site-logo">
            <Link to="/">
              <img src={logo} alt="national-hole" />
              <div id="tag-line">
                <h1>National Hole-In-One Registry</h1>
                <h2>The Premier Worldwide Hole-In-One Golf Registry</h2>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} id="sd-socials">
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
                        <Link>Register</Link>
                      </li>
                      <li className="menu-item">
                        <Link>Registry Lookup</Link>
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
    justify-content: center;
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

  @media screen and (max-width: 1199px) {
    #site-logo {
      display: flex;
      justify-content: center;
    }
    #sd-socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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
`;
