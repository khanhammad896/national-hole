import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
const ContactElement1 = () => {
  return (
    <>
      <ContactElement1Wrapper>
        <div className="et-pb-section">
          <Grid container>
            <div className="et-pb-column et-pb-column1">
              <div className="et-pb-code-inner">
                <h1>Send Us A Message</h1>
                <div className="sd-form">
                  <div className="row">
                    <div className="row">
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="form-column form-column1"
                        >
                          <input
                            type="text"
                            name="sd-name"
                            size="40"
                            placeholder="Name"
                            id="sd-name"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          className="form-column form-column2"
                        >
                          <input
                            type="email"
                            name="sd-email"
                            size="40"
                            placeholder="Email"
                            id="sd-email"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          className="form-column form-column3"
                        >
                          <textarea
                            name="sd-message"
                            cols="4"
                            rows="10"
                            id="sd-message"
                            placeholder="Message"
                          ></textarea>
                        </Grid>
                        <Grid item xs={12} className="form-column form-column4">
                          <input type="submit" value="Submit" id="sd-send" />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="et-pb-column et-pb-column2">
              <div className="contact-form-info">
                <h3>NationalHoleInOneRegistry.com</h3>
                <p>
                  <strong>Business Hours:</strong> 10a-4pm M-F
                </p>
                <p>
                  <strong>Phone:</strong> (866) 233-6260
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    style={{ color: "#0d4a2b" }}
                    href="mailto:inquiry@nationalholeinoneregistry.com"
                  >
                    {" "}
                    inquiry@nationalholeinoneregistry.com{" "}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 1901 Associates Lane, Suite F
                  Charlotte, NC 28217
                </p>
              </div>
            </div>
          </Grid>
        </div>
      </ContactElement1Wrapper>
    </>
  );
};

export default ContactElement1;

const ContactElement1Wrapper = styled.div`
  padding: 10px 0;

  .et-pb-section {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    padding: 27px 0;
  }

  .et-pb-column1 {
    width: 64.833%;
    margin-right: 5.5%;
  }
  .et-pb-column2 {
    float: right;
    margin: 0;
    width: 29.667%;
  }

  .et-pb-code-inner h1 {
    font-family: RobotoSlabLight;
    font-size: 30px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }

  .sd-form {
    width: 100%;
    float: left;
  }

  .row {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 1130px;
  }

  .row:before,
  .row:after {
    content: " ";
    display: table;
  }
  .form-column {
    position: relative;
    // padding-right: 0.9375rem;
    float: left;
  }

  .form-column2 {
    padding-left: 0.9375rem;
  }

  .form-column4 {
    text-align: right;
  }
  .sd-form input[type="text"],
  .sd-form input[type="email"],
  .sd-form textarea {
    width: 100%;
    float: left;
    padding: 13px;
    background: #eee;
    border: 0;
    margin-bottom: 20px;
    font-size: 15px;
    color: #4e4e4e;
    font-family: Arial;
    font-size: 15px;
  }

  input[type="submit"] {
    background: #0d4a2b;
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px !important;
    cursor: pointer;
    border-radius: 5px !important;
    border-color: #0d4a2b !important;
    font-family: RalewayThin, sans-serif !important;
    padding: 10px 35px !important;
    width: auto !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    float: right;
    border: 0;
    padding: 11px 20px;
    margin-top: 20px;
    min-width: 150px;
  }

  input[type="submit"]:hover,
  input[type="submit"]:focus {
    background: #fff;
    color: #0d4a2b;
    border: 1px solid #0d4a2b;
  }

  .contact-form-info h3 {
    font-family: RobotoSlabLight, serif;
    font-size: 20px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }

  p {
    padding-bottom: 1em;
    font-family: Arial;
    color: #666;
    line-height: 1.7em;
    font-size: 14px;
  }

  @media screen and (max-width: 980px) {
    .et-pb-column {
      width: 100%;
      margin-bottom: 30px;
      margin-right: 0 !important;
    }
  }

  @media screen and (min-width: 150px) and (max-width: 840px) {
    .et-pb-section {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 599px) {
    .form-column2 {
      padding-left: 0 !important;
    }
  }
`;
