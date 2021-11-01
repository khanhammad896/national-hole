import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import certificate from "../../assets/HIOT-Family-Certificates.jpg";
const Certificate = () => {
  return (
    <>
      <CertificateWrapper>
        <Navbar />
        <div className="et_pb_section">
          <div className="et_pb_row et_pb_row1">
            <p>
              After registering&nbsp;your achievement, you will see a preview of
              your official National Hole-In-One Certificate.&nbsp; You will
              then have the option to purchase this certificate, which is
              printed on high quality 65 lb. cover paper and mailed to you with
              Free Shipping!
            </p>
            <p>
              In addition, we offer a large selection of frames and plaques that
              can accommodate your certificate.&nbsp; These plaques are shipped
              with the certificate installed and ready to be proudly hung on a
              wall or displayed on a desk or shelf.
            </p>
            <p>
              <i>
                Click{" "}
                <u>
                  <Link to="/register">here</Link>
                </u>{" "}
                to register your Hole In One now!
              </i>
            </p>
            <p>
              <em>
                Click{" "}
                <span style={{ textDecoration: "underline" }}>
                  <Link to="/">here</Link>
                </span>{" "}
                to purchase your Hole-in-One Certificates and Awards!
              </em>
            </p>
          </div>
          <div className="et_pb_row et_pb_row2">
            <div className="et_pb_image">
              <Link>
                <span className="et_pb_image_wrap">
                  <img src={certificate} alt="certificate" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </CertificateWrapper>
    </>
  );
};

export default Certificate;
const CertificateWrapper = styled.div`
  width: 100%;

  .et_pb_section {
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    background-color: #fff;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    color: #666;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    line-height: 1.7em;
    font-size: 14px;
  }
  .et_pb_row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }
  .et_pb_row2 {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

  p {
    padding-bottom: 1em;
  }
  p:not(.has-background):last-of-type {
    padding-bottom: 0;
  }
  a {
    color: #0d4a2b;
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
      //   padding: 54px 0;
    }
    .et_pb_row {
      padding: 27px 0;
    }
  }

  @media (min-width: 981px) {
    .et_pb_section {
      //   padding: 4% 0;
    }
  }
`;
