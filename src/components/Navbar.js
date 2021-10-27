import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo-1.png";
const Navbar = () => {
  return (
    <>
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
