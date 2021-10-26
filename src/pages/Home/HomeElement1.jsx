import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/home_page_hero-min.jpg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const HomeElement1 = () => {
  return (
    <>
      <HomeElement1Wrapper bgImg={bgImg}>
        <div className="et_pb_section et_pb_section_0 sd-top-section-form et_pb_with_background et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <Grid container>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6} id="et_last_child">
                <div id="slider-form">
                  <p></p>
                  <div className="cf-register-form-2">
                    <p></p>
                    <div className="mobile-content"></div>
                    <p></p>
                    <h2>Register Your Hole-In-One Now</h2>
                    <p></p>
                    <p>
                      If you are one of the{" "}
                      <Link style={{ color: "#0d4a2b" }}>SPECIAL FEW</Link> to
                      make a hole in one, you have the opportunity to record
                      your success in the national registry! Please enter your
                      information, the date of your Hole-In One and click
                      Continue.
                    </p>
                    <div className="sd-shortcode">
                      <form>
                        <div className="item-left">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            required
                          />
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            required
                          />
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                          />
                          <input
                            type="text"
                            name="d_of_h"
                            id="firstName"
                            placeholder="Hold In One Date"
                            required
                            className="date disabled"
                            data-required="true"
                            aria-required="true"
                          />
                          <input
                            type="text"
                            name="courseName"
                            id="courseName"
                            placeholder="Course Name"
                            required
                          />
                          <input
                            type="text"
                            name="courseCity"
                            id="courseCity"
                            placeholder="Course City"
                            required
                          />
                          <select
                            id="course-state"
                            name="course_state"
                            size="1"
                            required
                          >
                            <option value>Course State / Country</option>
                          </select>
                          <select
                            id="h_number"
                            name="h_number"
                            size="1"
                            required
                          >
                            <option value>Hole Number</option>
                          </select>
                          <input
                            type="text"
                            name="yardage"
                            id="yardage"
                            placeholder="Yardage"
                            required
                          />
                          <select id="club" name="club" size="1" required>
                            <option value>Club</option>
                          </select>
                        </div>
                        <div className="item-fullWidth">
                          <input type="submit" name="home_p" value="Continue" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </HomeElement1Wrapper>
    </>
  );
};

export default HomeElement1;

const HomeElement1Wrapper = styled.div`
  .et_pb_section_0 {
    background-image: url(${(props) => props.bgImg}) !important;
    background-position: center;
    background-size: cover;
  }

  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    height: 100%;
  }

  //   #et_last_child {
  //     text-align: right;
  //   }
  #slider-form {
    float: right;
    padding: 0;
  }
  #slider-form p {
    color: #484848;
    text-shadow: none !important;
    font-size: 13px;
    text-align: left;
    padding: 0 8px;
    margin: 0;
    font-family: Arial;
    font-weight: 500;
    line-height: 23.8px;
  }
  .cf-register-form-2 {
    width: 450px;
    float: right;
    background-color: #fff;
    padding: 20px;
  }
  #slider-form h2 {
    font-family: RalewayThin;
    color: #484848 !important;
    text-shadow: none;
    font-weight: 300 !important;
    margin-top: 10px;
    font-size: 26px;
    margin-inline: 0;
    padding-bottom: 10px;
  }
  .item-left {
    width: 100%;
    float: left;
    margin-top: 10px;
    display: block;
  }

  #slider-form input[type="text"] {
    padding: 10px !important;
  }

  #slider-form input,
  #slider-form select {
    width: 48%;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 22px;
    margin: 0 1% 16px;
    float: left;
    height: 44px;
    border-radius: 0;
    font-family: RalewayThin;
    color: #4e4e4e;
    background-color: #fff;
    padding: 10px !important;
  }

  #slider-form input[type="submit"] {
    background: #0d4a2b;
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px !important;
    cursor: pointer;
    border-radius: 5px !important;
    border-color: #0d4a2b !important;
    font-family: RalewayThin !important;
    padding: 10px 35px !important;
    width: auto !important;
    transition: all 0.3s ease-in-out;
  }
  #slider-form input[type="submit"]:hover {
    background: #fff;
    color: #0d4a2b;
  }
`;
