import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import img0 from "../../assets/5.jpg";
import { recordsData } from "../../data/RecordsData.json";
const RecordsElement1 = () => {
  return (
    <>
      <RecordsElement1Wrapper>
        <div className="et-pb-section">
          <Grid container>
            <div className="et-pb-column et-pb-column1">
              <div className="et_pb_text">
                <div className="et_pb_text_inner">
                  <p>&nbsp;</p>
                  <h3>Official Hole-In-One Records</h3>
                  <ul className="sd-underline">
                    {recordsData.map((recordData) => (
                      <li key={recordData.recordNo}>
                        <a href={`#${recordData.recordLink}`}>
                          {recordData.recordText}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
      </RecordsElement1Wrapper>
    </>
  );
};

export default RecordsElement1;

const RecordsElement1Wrapper = styled.div`
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
  .et_pb_text {
    text-align: left;
  }
  .et_pb_text_inner {
    position: relative;
    padding-bottom: 0;
  }
  p {
    padding-bottom: 1em;
  }
  h3 {
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-size: 22px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }

  .et_pb_image,
  .et_pb_image_wrap {
    display: inline-block;
    position: relative;
    max-width: 100%;
  }
  .et_pb_text ul {
    padding-bottom: 1em;
    padding: 0 0 23px 1em;
    line-height: 26px;
    list-style-type: disc;
  }
  ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  ul.sd-underline li a {
    text-decoration: underline;
    color: #0d4a2b;
    font-family: Arial;
    font-size: 14px;
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
  @media only screen and (min-width: 1350px) {
    .et_pb_row {
      padding: 27px 0;
    }
  }
  @media (min-width: 981px) {
    .et_pb_row {
      padding: 2% 0;
    }
  }

  .et_pb_row {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
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
