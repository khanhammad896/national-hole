import React from "react";
import styled from "styled-components";
import icon from "../../assets/Home-National-Hole-In-One-Registry-1.png";
const LookUpElement1 = () => {
  return (
    <>
      <LookUpElement1Wrapper icon={icon}>
        <div className="et-pb-section">
          <div className="et-pb-row">
            <div className="et-pb-code">
              <div className="sd-title">
                <h1>National Hole-In-One Registry Lookup</h1>
                <p>
                  Look up a Hole in One. Enter the criteria below that you want
                  to search on. All values are optional, but you must pick at
                  least one.
                </p>
              </div>
            </div>
            <form>
              <div className="item-two">
                <div className="label">
                  <label for="date">Hole-In-One Date</label>
                </div>
                <input
                  className="date"
                  type="text"
                  name="date"
                  id="date"
                  readOnly="true"
                />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="firstname">FIRST NAME:</label>
                </div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  readOnly="true"
                />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="lastname">Last Name:</label>
                </div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  readOnly="true"
                />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="coursename">Course Name:</label>
                </div>
                <input type="text" name="coursename" id="coursename" />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="coursecity">Course City:</label>
                </div>
                <input type="text" name="coursecity" id="coursecity" />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="holenumber">Hole Number:</label>
                </div>
                <input type="text" name="holenumber" id="holenumber" />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="certificateid">Certificate ID:</label>
                </div>
                <input type="text" name="certificateid" id="certificateid" />
              </div>
              <div className="item-two">
                <div className="label">
                  <label for="submit">When Ready, Click Submit Below:</label>
                </div>
                <input type="submit" name="submit" value="Submit" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </LookUpElement1Wrapper>
    </>
  );
};

export default LookUpElement1;

const LookUpElement1Wrapper = styled.div`
  width: 100%;
  .et-pb-section {
    padding: 15px 0;
  }

  .et-pb-row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    padding: 0 0 27px 0;
  }
  .sd-title {
    padding: 27px 0;
  }
  .sd-title h1 {
    font-family: RobotoSlabLight, sans-serif;
    font-size: 30px;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
    line-height: 1em;
  }
  .sd-title p {
    color: #666;
    background-color: #fff;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7em;
  }
  .item-two {
    width: 50%;
    float: left;
    padding: 0 10px;
    min-height: 100px;
    color: #666;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    line-height: 1.7em;
  }
  .label {
    font-family: RobotoSlabLight, serif;
    font-weight: 700;
    color: #000;
  }
  form label {
    font-size: 14px;
    display: block;
    margin-bottom: 6px;
    font-family: RobotoSlabLight, serif;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    padding-left: 15px;
    text-transform: uppercase;
  }
  .date {
    background: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-position: 98% center;
  }
  .item-two input,
  .item-two select,
  .item-two textarea {
    max-width: 100%;
    width: 100%;
    padding: 10px;
    height: auto;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 16px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    clear: both;
    height: 44px;
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
    font-family: "Raleway", sans-serif !important;
    padding: 10px 35px !important;
    width: auto !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    float: right;
  }

  input[type="submit"]:hover,
  input[type="submit"]:focus {
    background: #fff;
    color: #0d4a2b;
  }

  @media screen and (min-width: 150px) and (max-width: 840px) {
    .et-pb-section {
      margin-top: 50px;
    }
  }

  @media screen and (min-width: 150px) and (max-width: 549px) {
    .item-two {
      width: 100% !important;
    }
    form label {
      font-size: 13px !important;
    }
  }

  @media screen and (max-width: 480px) {
    .et-pb-row {
      width: 100% !important;
      padding: 10px;
    }
    form label {
      padding-left: 0 !important;
    }
  }
`;
