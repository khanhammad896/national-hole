import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/1-1.jpg";
import TextDivider from "../../components/TextDivider";
import img0 from "../../assets/11.png";
import img1 from "../../assets/13.png";
import img2 from "../../assets/14.png";
import img3 from "../../assets/15.png";
import { Link } from "react-router-dom";
const HomeElement4 = () => {
  return (
    <>
      <HomeElement4Wrapper bgImg={bgImg}>
        <Grid container direction="column">
          <div className="et_pb_row et_pb_row1">
            <TextDivider text="WHAT DOES IT TAKE?" dark={false} />
          </div>
          <div className="et_pb_row et_pb_row2">
            <div className="et_pb_column et_pb_column1">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img alt="img0" src={img0} />
                </span>
              </div>
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <h4 className="sd-center sd-white">HOLES IN ONE PER YEAR</h4>
                </div>
              </div>
              <div className="et_pb_number_counter">
                <span>128,000</span>
              </div>
            </div>
            <div className="et_pb_column et_pb_column2 no-margin">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img alt="img0" src={img1} />
                </span>
              </div>
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <h4 className="sd-center sd-white">AVG. HANDICAP</h4>
                </div>
              </div>
              <div className="et_pb_number_counter">
                <span>14</span>
              </div>
            </div>
            <div className="et_pb_column et_pb_column3">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img alt="img0" src={img2} />
                </span>
              </div>
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <h4 className="sd-center sd-white">
                    AVG.YEARS OF EXPERIENCE
                  </h4>
                </div>
              </div>
              <div className="et_pb_number_counter">
                <span>24</span>
              </div>
            </div>
            <div className="et_pb_column et_pb_column4 no-margin">
              <div className="et_pb_image">
                <span className="et_pb_image_wrap">
                  <img alt="img0" src={img3} />
                </span>
              </div>
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <h4 className="sd-center sd-white">AVG. AGE</h4>
                </div>
              </div>
              <div className="et_pb_number_counter">
                <span>55</span>
              </div>
            </div>
          </div>
          <div className="et_pb_row et_pb_row3">
            <div className="et_pb_button_column et_pb_button_column1">
              <Link>Facts and Feats</Link>
            </div>
            <div className="et_pb_button_column et_pb_button_column2">
              <Link>Download Our Infographic</Link>
            </div>
            <div className="et_pb_button_column et_pb_button_column3">
              <Link>Official Records</Link>
            </div>
          </div>
        </Grid>
      </HomeElement4Wrapper>
    </>
  );
};

export default HomeElement4;

const HomeElement4Wrapper = styled.div`
  padding: 54px 0;
  width: 100%;
  background-image: url(${(props) => props.bgImg}) !important;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }

  .et_pb_row1,
  .et_pb_row3 {
    padding: 27px 0;
  }

  .et_pb_row2 {
    padding-bottom: 27px;
  }

  .et_pb_column {
    width: 20.875%;
    margin-right: 5.5%;
    float: left;
    text-align: center;
  }
  .et_pb_column4 {
    margin: 0;
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

  .et_pb_code {
    margin-bottom: 13.174%;
  }
  .et_pb_code_inner {
    position: relative;
  }
  .sd-center,
  .sd-white {
    min-height: 46px;
    font-size: 18px;
    text-align: center;
    font-family: Arial;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .sd-white {
    color: #fff;
  }
  .et_pb_number_counter {
    margin-top: 20px;
  }
  .et_pb_number_counter span {
    font-size: 51px;
    color: #fff;
    font-family: Arial;
    font-weight: 500;
  }

  .et_pb_button_column {
    width: 29.667%;
    margin-right: 5.5%;
    text-align: center;
  }

  .et_pb_button_column a {
    background: #0d4a2b;
    border-color: #0d4a2b;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    padding: 10px 35px;
    border: 1px solid #0d4a2b;
    font-size: 16px;
    text-align: center;
    outline: 0;
    font-family: RalewayThin;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }

  .et_pb_button_column3 {
    margin: 0;
  }
  .et_pb_row3 {
    display: flex;
  }

  @media screen and (max-width: 980px) {
    .et_pb_row {
      padding-bottom: 30px !important;
    }
    .et_pb_column {
      width: 47.25%;
      margin-right: 5.5%;
      margin-bottom: 30px;
    }
    .no-margin {
      margin-right: 0 !important;
    }

    .et_pb_row3 {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 !important;
    }
    .et_pb_button_column {
      width: 100%;
      margin-right: 0 !important;
      margin-bottom: 30px;
    }
    .et_pb_image {
      margin-bottom: 30px !important;
    }
    .et_pb_code {
      margin-bottom: 30px !important;
    }
  }

  @media screen and (max-width: 480px) {
    .et_pb_row {
      width: 100% !important;
      padding: 10px;
    }
    .et_pb_row2 {
      padding-top: 0px !important;
      padding-bottom: 10px !important;
    }
    .et_pb_column {
      margin: 0 0 30px 0;
      width: 100% !important;
    }
  }
`;
