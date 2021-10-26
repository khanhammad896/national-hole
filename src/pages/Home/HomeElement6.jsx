import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/1-1-1-1.jpg";
import TextDivider from "../../components/TextDivider";
import symbols from "../../assets/10.png";
import img0 from "../../assets/man_headshot_22.png";
import img1 from "../../assets/man_headshot_21.png";
import img2 from "../../assets/woman_headshot_21.png";

const HomeElement6 = () => {
  return (
    <>
      <HomeElement6Wrapper bgImg={bgImg} symbols={symbols}>
        <div className="et-pb-section">
          <Grid container direction="column">
            <div className="et-pb-row et-pb-row1">
              <TextDivider text="HOLE-IN-ONE STORIES" dark={false} />
              <div className="quoted">
                <h2>
                  Greatest Moment of my life. Toughest Par 3 on the course. I
                  will never forget it!
                </h2>
              </div>
              <div className="su-tabs-nav sd-taby">
                <Grid container>
                  <Grid item xs={12} sm={12} md={4} lg={4} component="span">
                    <div>
                      <div className="sd-test-image sd-white-image">
                        <img src={img0} alt="man" />
                      </div>
                      <div className="sd-test-text">
                        <h4>Johan R. Silbernagel</h4>
                        <p>
                          <span className="sd-date">March 9th</span>
                        </p>
                        <p>Ancala Country Club – Scottsdale, Arizona</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} component="span">
                    <div>
                      <div className="sd-test-image">
                        <img src={img1} alt="man" />
                      </div>
                      <div className="sd-test-text">
                        <h4>Dennis Lloyd Irace</h4>
                        <p>
                          <span className="sd-date">April 19th</span>
                        </p>
                        <p>
                          Plantation Golf Club(Cranes Roost) – Leesburg, Florida
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} component="span">
                    <div>
                      <div className="sd-test-image">
                        <img src={img2} alt="woman" />
                      </div>
                      <div className="sd-test-text">
                        <h4>Sharon Word</h4>
                        <p>
                          <span className="sd-date">May 9th</span>
                        </p>
                        <p>Lakes West – Sun City, Arizona</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </div>
      </HomeElement6Wrapper>
    </>
  );
};

export default HomeElement6;

const HomeElement6Wrapper = styled.div`
  padding: 54px 0;
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  .et-pb-section {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }

  .et-pb-row1 {
    padding-top: 27px;
  }

  .quoted {
    width: 100%;
    float: left;
    padding: 40px;
    text-align: center;
    position: relative;
    margin: 20px 0;
  }
  .quoted h2 {
    font-family: Arial;
    font-size: 26px;
    font-style: italic;
    color: #fff;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .quoted:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: url(${(props) => props.symbols});
    width: 46px;
    height: 35px;
    object-fit: none;
    background-position: -580px -36px;
  }
  .quoted:after {
    content: "";
    position: absolute;
    right: 0;
    border: 0;
    background: url(${(props) => props.symbols});
    width: 46px;
    height: 35px;
    object-fit: none;
    background-position: -519px -34px;
  }

  .su-tabs-nav.sd-taby {
    width: 100%;
    float: left;
  }

  .su-tabs-nav span {
    display: inline-block;
    margin-right: 3px;
    padding: 10px 15px;
    min-height: 40px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    margin: 0 !important;
  }
  .sd-test-image {
    width: 30%;
    float: left;
    transition: all 0.5s ease-in-out;
  }
  .sd-test-image img {
    background: #bbb;
    border-radius: 50%;
    border: 3px solid #828282;
    max-width: 100%;
    height: auto;
  }

  .sd-white-image img {
    background: #fff;
  }

  .sd-test-text {
    width: 70%;
    float: left;
    padding-left: 15px;
    color: #fff;
  }
  .sd-test-text h4 {
    font-weight: 500;
    font-size: 15px;
    color: #fff;
    font-family: Arial;
    padding-bottom: 10px;
  }
  p {
    padding-bottom: 1em;
  }
  .sd-date {
    padding: 0 !important;
    min-height: auto !important;
  }
  p:not(.has-background):last-of-type {
    padding-bottom: 0;
  }
`;
