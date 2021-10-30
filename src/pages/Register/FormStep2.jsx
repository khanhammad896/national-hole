import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const FormStep2 = ({ handleTabs }) => {
  return (
    <FormStep2Wrapper>
      <form>
        <div className="item-two">
          <div className="label">
            <label for="witness1">witness #1:</label>
          </div>
          <input type="text" name="witness1" id="witness1" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="witness2">witness #2:</label>
          </div>
          <input type="text" name="witness2" id="witness2" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="witness3">witness #3:</label>
          </div>
          <input type="text" name="witness3" id="witness3" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="par">par</label>
          </div>
          <select required id="par" name="par" size="1">
            <option selected value>
              3
            </option>
          </select>
        </div>
        <div className="item-two">
          <div className="label">
            <label for="gender">gender:</label>
          </div>
          <select required id="gender" name="gender" size="1">
            <option selected value>
              Not Selected
            </option>
          </select>
        </div>

        <div className="item-two">
          <div className="label">
            <label for="agegroup">age group:</label>
          </div>
          <select required id="agegroup" name="agegroup" size="1">
            <option selected value>
              Select
            </option>
          </select>
        </div>

        <div className="item-two">
          <div className="label">
            <label for="handicap">handicap:</label>
          </div>
          <input type="text" name="handicap" id="handicap" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="ballused">ball used:</label>
          </div>
          <input type="text" name="ballused" id="ballused" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="clubbrand">club brand:</label>
          </div>
          <input type="text" name="clubbrand" id="clubbrand" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="numberofhios">number of hio's:</label>
          </div>
          <input type="text" name="numberofhios" id="numberofhios" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="yearsgolfing">years glofing:</label>
          </div>
          <input type="text" name="yearsgolfing" id="yearsgolfing" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="golferaddress">golfer's address:</label>
          </div>
          <input type="text" name="golferaddress" id="golferaddress" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="golfercity">golfer's city:</label>
          </div>
          <input type="text" name="golfercity" id="golfercity" />
        </div>
        <div className="item-two">
          <div className="label">
            <label for="golferstate">golfer's st/country:</label>
          </div>
          <select required id="golferstate" name="golferstate" size="1">
            <option selected value>
              Select State
            </option>
          </select>
        </div>
        <div className="item-two">
          <div className="label">
            <label for="golferzip">golfer's zip code:</label>
          </div>
          <input type="text" name="golferzip" id="golferzip" />
        </div>
        <div className="item-two comment">
          <div className="label">
            <label for="comment">
              Tell Us Your Story! Additional Comments:
            </label>
          </div>
          <input type="text" name="comment" id="comment" />
        </div>
        <div className="item-two terms-text">
          <b>No Credit Card Needed</b>
          <p>
            By clicking “Register Now” you agree to our{" "}
            <Link to="/">Terms of Service and Privacy Policy.</Link>
          </p>
        </div>
        <div className="item-two submit-btn">
          <input
            type="submit"
            name="submit"
            value="Register Now"
            id="submit"
            onClick={() => handleTabs(3)}
          />
        </div>
      </form>
    </FormStep2Wrapper>
  );
};

export default FormStep2;

const FormStep2Wrapper = styled.div`
  .item-two {
    width: 33.333%;
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
    font-family: RobotoSlabLight !important;
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

  .submit-btn,
  .terms-text {
    width: 50% !important;
  }

  .terms-text {
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    color: #666;
    line-height: 1.7em;
    -webkit-font-smoothing: antialiased;
    font-size: 14px !important;
  }

  .terms-text a {
    color: #0d4a2b;
  }
  .comment {
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
