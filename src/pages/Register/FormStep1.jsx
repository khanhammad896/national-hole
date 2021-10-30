import React from "react";
import styled from "styled-components";
const FormStep1 = ({ handleTabs }) => {
  return (
    <FormStep1Wrapper>
      <form>
        <div className="item-two">
          <div className="label">
            <label for="firstname">FIRST NAME:</label>
          </div>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="lastname">Last Name:</label>
          </div>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="email">Email:</label>
          </div>
          <input type="text" name="email" id="email" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="date">Date of hole in one</label>
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
            <label for="coursestate">Course state or country:</label>
          </div>
          <select required id="coursestate" name="coursestate" size="1">
            <option selected value>
              Select State
            </option>
          </select>
        </div>
        <div className="item-two">
          <div className="label">
            <label for="holenumber">Hole Number:</label>
          </div>
          <select required id="holenumber" name="holenumber" size="1">
            <option selected value>
              1
            </option>
          </select>
        </div>
        <div className="item-two">
          <div className="label">
            <label for="yardage">yardage:</label>
          </div>
          <input type="text" name="yardage" id="yardage" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="club">club used:</label>
          </div>
          <select required id="club" name="club" size="1">
            <option selected value>
              Select
            </option>
          </select>
        </div>
        <div className="item-two submit-btn">
          <input
            type="submit"
            name="submit"
            value="Continue"
            id="submit"
            onClick={() => handleTabs(2)}
          />
        </div>
      </form>
    </FormStep1Wrapper>
  );
};

export default FormStep1;

const FormStep1Wrapper = styled.div`
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
  .item-two select {
    background: transparent !important;
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
  }

  input[type="submit"]:hover,
  input[type="submit"]:focus {
    background: #fff;
    color: #0d4a2b;
  }

  .submit-btn {
    width: 100% !important;
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
    form label {
      padding-left: 0 !important;
    }
  }
`;
