import { Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import TextDivider1 from "../../components/TextDivider1";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { pageData } from "../../data/tableData.json";
const HomeElement5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };
  const handlePagination = (value) => {
    setCurrentSlide(value);
  };
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  return (
    <>
      <HomeElement5Wrapper>
        <div className="et_pb_row et_pb_row1">
          <Grid container direction="column">
            <p></p>
            <TextDivider1
              text="LATEST HOLE-IN-ONE ACHIEVERS"
              dark={true}
              button={true}
            />
            <span id="registration_count">90,797 Registrations Submitted</span>
            <div className="carousel-wrapper">
              <Carousel
                showIndicators={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                selectedItem={currentSlide}
                onChange={updateCurrentSlide}
              >
                {pageData.map((page) => (
                  <div className="carousel-item">
                    <ul className="cf-hole-list" key={page.pageNo}>
                      <li className="main-head">
                        <span>Name</span>
                        <span>Hole-In-One Date</span>
                        <span>Course</span>
                        <span>Hole #</span>
                        <span>Yardage</span>
                        <span>Club</span>
                      </li>
                      {page.tableData.map((data) => (
                        <li className="inner-list">
                          <Link to="/">
                            <span>{data.name}</span>
                            <span>{data.holeInOneDate}</span>
                            <span>{data.course}</span>
                            <span>{data.holeNo}</span>
                            <span>{data.yardage}</span>
                            <span>{data.club}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="carousel-pagination">
              <div id="prev-button" onClick={prev}>
                Prev
              </div>

              <div id="num-buttons">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    className={
                      currentSlide === i - 1
                        ? "page-numbers-active"
                        : "page-numbers"
                    }
                    onClick={() => handlePagination(i - 1)}
                  >
                    {i}
                  </span>
                ))}
              </div>

              <div id="next-button" onClick={next}>
                Next
              </div>
            </div>
          </Grid>
        </div>
      </HomeElement5Wrapper>
    </>
  );
};

export default HomeElement5;

const HomeElement5Wrapper = styled.div`
  padding: 54px 0;

  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }

  .et_pb_row1 {
    padding: 27px 0;
  }

  p {
    padding-bottom: 1em;
  }
  #registration_count {
    width: 100%;
    float: left;
    padding: 20px 0;
    text-align: right;
    font-weight: 700;
    font-size: 16px;
    font-style: italic;
    color: #666;
    line-height: 1.7em;
    font-family: Arial;
  }

  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .carousel-item {
    // width: 1080px;
    width: 100%;
    // min-width: 624px;
  }
  .cf-hole-list {
    margin: 0 !important;
    padding: 0 !important;
    list-style-type: none;
    border: 1px solid #ccc;
    width: 100%;
    float: left;
    box-sizing: border-box;
    border-right: 0;
  }
  .cf-hole-list li {
    width: 100%;
    float: left;
    font-weight: 600;
    color: #333;
    list-style-type: none;
  }
  .main-head {
    border-bottom: 1px solid #ccc;
  }
  .cf-hole-list li span {
    padding: 13px;
    width: 10%;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    height: 42px;
    display: block;
    color: #0d4a2b;
    font-size: 11px;
    font-family: RalewayThin;
    font-weight: 600;
    text-align: left;
  }

  .main-head span {
    height: auto !important;
  }

  ul.cf-hole-list li span:nth-child(1) {
    width: 20%;
  }
  ul.cf-hole-list li span:nth-child(2),
  ul.cf-hole-list li span:nth-child(3) {
    width: 25%;
  }

  ul.cf-hole-list li a {
    color: #333;
    font-weight: 600;
  }

  .carousel-pagination {
    margin-top: 25px;
    display: flex;
  }
  #num-buttons {
    flex-grow: 1;
    text-align: center;
  }

  #prev-button,
  #next-button {
    background: #0d4a2b !important;
    opacity: 1 !important;
    border-radius: 5px !important;
    text-transform: capitalize;
    font-family: RalewayThin, sans-serif;
    font-weight: 500;
    font-size: 16px !important;
    margin: 5px;
    padding: 3px 10px;
    color: #fff;
    display: inline-block;
    cursor: pointer;
  }

  .page-numbers,
  .page-numbers-active {
    font-size: 15px;
    width: 30px;
    height: 30px;
    display: inline-block;
    padding: 5px;
    line-height: 18px;
    margin: 0 3px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .page-numbers-active {
    background: #0d4a2b;
    color: #eee;
    border-color: #fff;
    border-radius: 5px;
  }
`;
