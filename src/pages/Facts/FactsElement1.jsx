import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { factsData } from "../../data/factsData.json";
import banner from "../../assets/HIO-4.jpg";
const FactsElement1 = () => {
  const [expanded, setExpanded] = useState([]);
  const handleExpansion = (value) => {
    let new_array = expanded;
    if (!new_array.includes(value)) {
      new_array.push(value);
    } else {
      const new_array1 = new_array.filter((i) => i !== value);
      new_array = new_array1;
    }
    setExpanded(new_array);
  };
  console.log("Expansion List >>> ", expanded);
  return (
    <>
      <FactsElement1Wrapper>
        <div className="et_pb_section">
          <div className="et_pb_row">
            <div className="et_pb_column et_pb_column1">
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <h3 class="line-heght">
                    <b>Enjoy our fascinating hole-in-one facts.</b> <br />
                    Discover just how special you are!
                  </h3>
                  <p></p>
                  <p>
                    Looking for recognition products? Check our our{" "}
                    <Link>PRODUCTS</Link>
                  </p>
                </div>
              </div>
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <center>
                    <Link to="/records" className="sd-btn">
                      View Records Here
                    </Link>
                  </center>
                </div>
              </div>
              {factsData.map((factData) => (
                <div className="et_pb_code" key={factData.factsNo}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        expanded.includes(factData.factsNo) ? (
                          <IoIosRemoveCircle />
                        ) : (
                          <IoIosAddCircle />
                        )
                      }
                      onClick={() => handleExpansion(factData.factsNo)}
                    >
                      {factData.factsHeading}
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{factData.factsPara}</p>
                      <ul>
                        {factData.factsBullet.map((bullet) => (
                          <li key={factData.factsBullet.indexOf(bullet)}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="et_pb_column et_pb_column2">
              <div className="et_pb_code">
                <div className="et_pb_code_inner">
                  <center>
                    <Link className="sd-btn">Download Our Infographic</Link>
                  </center>
                </div>
              </div>
              <div className="et_pb_image">
                <Link>
                  <span className="et_pb_image_wrap">
                    <img src={banner} alt="img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FactsElement1Wrapper>
    </>
  );
};

export default FactsElement1;

const FactsElement1Wrapper = styled.div`
  .et_pb_section {
    padding-top: 20px;
    position: relative;
    background-color: #fff;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7em;
    color: #666;
  }
  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }
  .et_pb_code_inner {
    position: relative;
  }
  h3.line-heght {
    line-height: 30px;
    font-family: RobotoSlabLight, serif;
    font-size: 22px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
  }
  p {
    padding-bottom: 1em;
  }

  a {
    color: #0d4a2b;
  }

  p:not(.has-background):last-of-type {
    padding-bottom: 0;
    font-size: 14px;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    line-height: 1.7em;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
    color: #666;
  }
  a.sd-btn {
    background: #0d4a2b;
    border-color: #0d4a2b;
    border-radius: 5px;
    color: #ffffff;
    display: inline-block;
    padding: 10px 35px;
    border: 1px solid #0d4a2b;
    font-size: 16px;
    text-align: center;
    outline: 0;
    font-family: RalewayThin, sans-serif;
    font-weight: 600;
  }

  .MuiAccordion-root {
    border: 1px solid #d9d9d9;
    box-shadow: none;
    padding: 20px !important;
  }

  .MuiAccordionSummary-root {
    min-height: unset;
    margin: 0;
    padding: 0;
  }
  .MuiAccordionSummary-content {
    transition: none;
    margin: 0;
    color: #333;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-weight: 500;
    line-height: 1em;
    font-size: 16px;
    word-wrap: break-word;
  }

  .MuiAccordionSummary-expandIconWrapper {
    font-size: 18px;
    color: #ccc;
  }
  .MuiButtonBase-root {
    min-height: 0px !important;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }

  .MuiAccordionDetails-root {
    padding: 20px 0 !important;
    display: block;
    width: 100%;
    float: left;
    position: relative;
  }
  .MuiAccordionDetails-root ul {
    padding: 0 0 23px 1em;
    line-height: 26px;
    list-style-type: disc;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    color: #666;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }

  ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  .et_pb_image a {
    color: #0d4a2b;
  }

  .et_pb_image .et_pb_image_wrap {
    display: inline-block;
    position: relative;
    max-width: 100%;
  }
  .et_pb_image img {
    position: relative;
    max-width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 1350px) {
    .et_pb_section {
      padding: 54px 0;
    }
    .et_pb_row {
      padding: 27px 0;
    }
  }
  @media (min-width: 981px) {
    .et_pb_section {
      padding: 4% 0;
    }
    .et_pb_row {
      padding: 2% 0;
    }
    .et_pb_column {
      width: 47.25%;
      margin-right: 5.5%;
      float: left;
    }

    .et_pb_column2 {
      margin-right: 0 !important;
    }
    .et_pb_code {
      margin-bottom: 5.82%;
    }
  }
`;
