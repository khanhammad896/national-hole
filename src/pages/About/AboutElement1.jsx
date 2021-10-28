import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img0 from "../../assets/5.jpg";
const AboutElement1 = () => {
  return (
    <>
      <AboutElement1Wrapper>
        <div className="et-pb-section">
          <Grid container>
            <div className="et-pb-column et-pb-column1">
              <div className="et-pb-text">
                <h1>The National Hole In One Registry</h1>
                <h3>Since 2002 – Charlotte, North Carolina</h3>
                <p>
                  <b>NationalHoleInOneRegistry.com</b> is the worldwide official
                  website to register your Hole-In-One achievement. Our official
                  registry is comprised of golfers who recently scored a hole in
                  one on courses that you’ve probably played.
                </p>
                <p>
                  We maintain <Link>hole in one records</Link> and{" "}
                  <Link>facts and feats</Link> related to golfers making a hole
                  in one. Interested in commemorating your hole in one? We offer
                  Hole-In-One certificates and trophies through our partner at{" "}
                  <Link>HoleInOneTrophies.com</Link>. Get your recognition
                  products today.
                </p>
                <p>
                  Eureka Golf Products, Inc. is based in Pineville, NC and
                  currently operates 4 golf related websites. We produce,
                  assemble and manufacturer over 200 proprietary products
                  designed for the golf industry. We also hold a registered
                  trademark for “Hole in One” and have developed a line of
                  products around this trademark. We have been in business since
                  January, 2002.
                </p>
              </div>
              <div className="et-pb-button">
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="et-pb-column et-pb-column2">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img alt="img0" src={img0} />
                </span>
              </div>
            </div>
          </Grid>
        </div>
      </AboutElement1Wrapper>
    </>
  );
};

export default AboutElement1;

const AboutElement1Wrapper = styled.div`
  padding-block: 20px 54px;

  .et-pb-section {
    padding: 27px 0;
    width: 80%;
    position: relative;
    max-width: 1080px;
    margin: auto;
  }

  .et-pb-column1,
  .et-pb-column2 {
    width: 47.25%;
    margin-right: 5.5%;
  }
  .et-pb-column2 {
    margin: 0 !important;
  }
  .et-pb-text {
    margin-bottom: 5.82%;
  }

  .et-pb-text h1 {
    font-family: RobotoSlabLight;
    font-size: 30px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }

  h3 {
    font-family: Arial;
    font-size: 22px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }
  p {
    padding-bottom: 1em;
    font-size: 14px;
    font-family: Arial;
    font-weight: 500;
    color: #666;
    line-height: 23.8px;
  }
  a {
    color: #0d4a2b;
  }
  p:not(.has-background):last-of-type {
    padding-bottom: 0;
  }

  .et_pb_image,
  .et_pb_image_wrap {
    display: inline-block;
    position: relative;
    max-width: 100%;
  }

  .et_pb_image {
    margin-bottom: 13.174%;
    text-align: center;
  }

  .et_pb_image img {
    position: relative;
    max-width: 100%;
    height: auto;
  }

  .et-pb-button a {
    color: #ffffff !important;
    border-color: #0d4a2b;
    font-size: 16px;
    font-family: RalewayThin, Helvetica, Arial, Lucida, sans-serif !important;
    background-color: #0d4a2b;
    position: relative;
    padding: 0.3em 1em;
    border: 2px solid;
    border-radius: 5px;
    font-weight: 500;
    line-height: 1.7em !important;
    transition: all 300ms ease 0ms;
    display: inline-block;
  }

  .et-pb-button a:after {
    content: "\\35";
    font-size: 1.6em;
    color: #fff;
    transition: all 300ms ease 0ms;
    position: absolute;
    margin-left: -1em;
    opacity: 0;
    text-shadow: none;
    font-weight: 400;
    font-style: normal;
    font-variant: none;
    line-height: 1em;
    text-transform: none;
  }

  .et-pb-button a:hover {
    padding: 0.3em 2em 0.3em 0.7em;
    border: 2 px solid transparent;
  }
  @media screen and (max-width: 980px) {
    .et-pb-column {
      width: 100%;
      margin-bottom: 30px;
      margin-right: 0 !important;
    }
    .et_pb_image {
      margin: 0 !important;
    }
  }

  @media screen and (min-width: 150px) and (max-width: 840px) {
    .et-pb-section {
      margin-top: 50px;
    }
  }
`;
