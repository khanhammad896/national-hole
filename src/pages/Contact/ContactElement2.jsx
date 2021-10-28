import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextDivider2 from "../../components/TextDivider2";
import img0 from "../../assets/1-10.png";
import img1 from "../../assets/1-3.png";
import img2 from "../../assets/1-12.png";
import img3 from "../../assets/1.jpg";
import img4 from "../../assets/1-9.png";
const ContactElement2 = () => {
  return (
    <>
      <ContactElement2Wrapper>
        <div className="et-pb-section">
          <Grid container direction="column">
            <TextDivider2 text="VISIT ALL OF OUR WEBSITES" dark={true} />
            <ul>
              <li>
                <Link>
                  <img src={img0} alt="partners" />
                  <p>HoleInOneTrophies.com</p>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={img1} alt="partners" />
                  <p>First Tee</p>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={img2} alt="partners" />
                  <p>Hole In One Insurance</p>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={img3} alt="partners" />
                  <p>Premier Aerials</p>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={img4} alt="partners" />
                  <p>Eureka Golf</p>
                </Link>
              </li>
            </ul>
          </Grid>
        </div>
      </ContactElement2Wrapper>
    </>
  );
};

export default ContactElement2;

const ContactElement2Wrapper = styled.div`
  padding: 10px 0 20px 0;

  .et-pb-section {
    position: relative;
    width: 80%;
    margin: auto;
    max-width: 1080px;
    padding: 27px 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 25px 0 20px;
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 26px;
  }
  ul li {
    float: left;
    display: inline-block;
    width: 20%;
    text-align: center;
  }

  a {
    color: #0d4a2b;
  }
  a img {
    max-width: 100%;
    height: auto;
  }
  p:not(.has-background):last-of-type {
    padding-bottom: 0;
  }
  @media screen and (min-width: 150px) and (max-width: 580px) {
    ul li {
      width: 50% !important;
      min-height: 140px;
      padding: 0 7px;
    }
  }
  @media screen and (max-width: 480px) {
    .et-pb-section {
      width: 100%;
      padding: 10px !important;
    }
  }
`;
