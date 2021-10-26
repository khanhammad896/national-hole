import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import TextDivider from "../../components/TextDivider";
import { Link } from "react-router-dom";
import img0 from "../../assets/1-11.png";
import img1 from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.png";
import img4 from "../../assets/1-2.png";
const HomeElement3 = () => {
  return (
    <>
      <HomeElement3Wrapper>
        <div className="et_pb_row">
          <Grid container direction="column">
            <TextDivider dark={true} text="FEATURED PRODUCTS" />
            <div className="sd-products">
              <div className="sd-single-prod">
                <Link>
                  <img alt="product" src={img0} />
                  <span>Desk or Shelf Awards</span>
                </Link>
              </div>
              <div className="sd-single-prod">
                <Link>
                  <img alt="product" src={img1} />
                  <span>Scorecard Displays</span>
                </Link>
              </div>
              <div className="sd-single-prod">
                <Link>
                  <img alt="product" src={img2} />
                  <span>Click Here for Certificates and Frames</span>
                </Link>
              </div>
              <div className="sd-single-prod">
                <Link>
                  <img alt="product" src={img3} />
                  <span>Multiple Ball Displays</span>
                </Link>
              </div>
              <div className="sd-single-prod">
                <Link>
                  <img alt="product" src={img4} />
                  <span>Accessories</span>
                </Link>
              </div>
            </div>
          </Grid>
        </div>
      </HomeElement3Wrapper>
    </>
  );
};

export default HomeElement3;

const HomeElement3Wrapper = styled.div`
  width: 100%;
  padding: 54px 0;
  background: rgba(0, 0, 0, 0);

  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }
  .sd-single-prod {
    width: 20%;
    float: left;
    text-align: center;
    padding: 0 10px;
  }
  .sd-single-prod a {
    display: block;
    color: #0d4a2b;
    transition: all 0.5s ease-in-out;
  }

  .sd-single-prod a img {
    display: block;
    margin: 0 auto;
    padding: 4px 6px;
    border: 1px solid #ddd;
    max-width: 100%;
    height: auto;
  }

  .sd-single-prod a span {
    color: #333;
    display: block;
    margin-top: 10px;
    font-size: 13px;
  }
`;
