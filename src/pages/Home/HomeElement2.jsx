import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import img0 from "../../assets/1.png";
import img1 from "../../assets/2.png";
import img2 from "../../assets/4.png";

const HomeElement2 = () => {
  return (
    <>
      <HomeElement2Wrapper>
        <div className="et_pb_section">
          <Grid container>
            <Grid item className="et_pb_column et_pb_column0">
              <div className="et_pb_code_inner">
                <div className="cf-home-dark-col">
                  <span className="cf-image">
                    <img src={img0} alt="img0" />
                  </span>
                  <span className="cf-image-text">
                    <p></p>
                    <h3>REGISTER</h3>
                    <p></p>
                    <p>
                      Register your hole-in-one and assure your amazing feat is
                      historically recorded.
                    </p>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item className="et_pb_column et_pb_column1">
              <div className="et_pb_code_inner">
                <div className="cf-home-dark-col">
                  <span className="cf-image">
                    <img src={img1} alt="img0" />
                  </span>
                  <span className="cf-image-text">
                    <p></p>
                    <h3>COMMEMORATE</h3>
                    <p></p>
                    <p>
                      Take this opportunity to purchase an official National
                      Hole-In-One Registry certificate and other products
                    </p>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item className="et_pb_column et_pb_column2">
              <div className="et_pb_code_inner">
                <div className="cf-home-dark-col">
                  <span className="cf-image">
                    <img src={img2} alt="img0" />
                  </span>
                  <span className="cf-image-text">
                    <p></p>
                    <h3>CELEBRATE YOUR ACE</h3>
                    <p></p>
                    <p>
                      Have your achievement known to players around the world.
                      Shop our recognition products here.
                    </p>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </HomeElement2Wrapper>
    </>
  );
};

export default HomeElement2;

const HomeElement2Wrapper = styled.div`
  background-color: #484848 !important;
  padding: 54px 0;

  .et_pb_section {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }
  .MuiGrid-container {
    margin: auto;
  }
  .et_pb_column {
    width: 29.667%;
  }

  .et_pb_column0,
  .et_pb_column1 {
    margin-right: 5.5%;
  }
  .et_pb_code_inner {
    position: relative;
  }
  .cf-image {
    float: left;
    width: 25%;
  }
  .cf-image img {
    max-width: 100%;
    height: auto;
  }
  .cf-image-text {
    float: left;
    width: 75%;
    color: #fff;
  }
  p {
    padding-bottom: 1rem;
  }
  .cf-image-text h3 {
    color: #fff;
    font-size: 19px;
    font-family: RobotoSlabLight;
    font-weight: 500;
  }
  p:not(.has-background):last-of-type {
    font-family: Arial;
    font-weight: 500;
    line-height: 1.7em;
    font-size: 14px;
  }

  @media screen and (max-width: 980px) {
    .et_pb_column {
      width: 100%;
    }
  }
`;
