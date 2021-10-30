import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../../assets/cart.png";
import logo from "../../assets/NHIOR.jpg";
import logo2 from "../../assets/new-logo.png";
import trophies from "../../assets/featured_products_step_3.png";
import golfer from "../../assets/golfer.png";
import edit from "../../assets/edit.png";
const FormStep3 = () => {
  return (
    <>
      <FormStep3Wrapper bgImg={logo}>
        <div className="inner">
          <div className="column column1">
            <div className="cf-outline">
              <div className="sd-center" style={{ cursor: "pointer" }}>
                <h4 className="congrates">
                  <span className="cf-red">Congratulations!</span>
                  Your registration number is{" "}
                  <span className="cf-green">91782.</span>
                </h4>
                <h3 className="new-style purchase">
                  Purchase Your Hole-In-One Certificates and Awards Now
                </h3>
                <div className="ten-per-off">
                  <div className="sd-center">
                    <span>
                      <per>10</per>
                      OFF
                    </span>
                  </div>
                </div>
                <div className="cf-dark-section">
                  <h3 className="new-style coupon_code">
                    Use Coupon Code: <span class="cf-coupon-code">NHIOR10</span>
                  </h3>
                  <p class="must_order">
                    Must order in the Next 24 hours. Min $30 purchase
                  </p>
                </div>
              </div>
            </div>
            <div className="sd-center">
              <Link className="cart-btn">
                <button className="buynow">
                  <img src={cart} alt="cart" />
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="sd-center">
              <h3 class="sd-new-cer">Certificate Preview</h3>
            </div>
            <div className="certificate">
              <Link>
                <img className="new-logo-cert" src={logo2} alt="new-logo" />
                <h1 class="new-hole-in-one">Hole-in-One</h1>
                <div class="name-cert">tester tester</div>
                <div class="name-course">Tester </div>
                <div className="city-state">
                  <div class="city-course c-s">New york,&nbsp;</div>
                  <div class="state-course c-s"> NY</div>
                </div>
                <div class="sd-new-date">October 23, 2021 </div>
                <div class="sd-extra-info">
                  <div class="hole hyc">
                    <span>Hole</span> : 1
                  </div>
                  <div class="yardage hyc">
                    <span>Yardage</span> : 2
                  </div>
                  <div class="club hyc">
                    <span>Club Used</span> : 1 Iron
                  </div>
                </div>
                <div class="sd-witness">
                  <div class="inner_witness">
                    <span class="name">tester</span>
                    <span class="witness">Witness</span>
                  </div>{" "}
                  <div class="inner_witness">
                    <span class="name">tester</span>
                    <span class="witness">Witness</span>
                  </div>{" "}
                  <div class="inner_witness">
                    <span class="name">tester</span>
                    <span class="witness">Witness</span>
                  </div>{" "}
                </div>
              </Link>
            </div>
          </div>
          <div className="column column2">
            <div className="sd-center">
              <div className="cf-outline" style={{ cursor: "pointer" }}>
                <img className="cf-pro-images" src={trophies} alt="trophies" />
                <div className="cf-dark-section class-cf-2">
                  <div className="postioning-img">
                    <img className="golfer" src={golfer} alt="golfer" />
                    <div className="cf-right-outline-link">
                      <Link>Click Here to view</Link>
                      <h3>Featured Products</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-sd">
              <div className="cf-reg-info">
                <h3>Registry Information</h3>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Name</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>tester tester</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Email</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>tester2@yopmail.com</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Address</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>
                      <span>tester</span> <span>New york</span> <span>NY</span>{" "}
                      <span>76400</span>
                    </span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Hole-in-one Date</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>10/23/2021</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Course Name</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>Tester</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Hole</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>1</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Yardage</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>2</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Club</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>1 Iron</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Witnesses</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>tester , tester , tester</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Par</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>3</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Gender</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>M</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Age Group</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>40-49</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Handicap</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span> no</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Ball</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>white</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Club Brand</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>test</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Holes-in-One</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span> 2</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Years Golfing</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span>12</span>
                  </div>
                </div>
                <div class="single-detail">
                  <div class="cf-label">
                    <span>Comments</span>
                    <span class="cf-q">:</span>
                  </div>
                  <div class="cf-filled-info">
                    <span> Tester</span>
                  </div>
                </div>
                <Link className="cart-btn" to="/">
                  <button class="buynow">
                    <img src={edit} alt="edit" /> Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FormStep3Wrapper>
    </>
  );
};

export default FormStep3;

const FormStep3Wrapper = styled.div`
  .inner {
    padding: 10px 0 10px 0px !important;
    width: 100% !important;
    float: left;
  }
  .column {
    position: relative;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    float: left;
    margin-bottom: 40px;
  }
  .column2 {
    float: right;
  }

  .cf-outline {
    border: 1px solid #484848;
    border-radius: 3px;
    width: 100%;
    float: left;
    margin-bottom: 20px;
  }
  .sd-center {
    text-align: center;
  }
  .cf-outline .congrates {
    padding-bottom: 0;
    margin-bottom: 15px;
    margin: 20px 0;
    display: block;
    font-weight: 700;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    color: #333;
    line-height: 1em;
    font-size: 18px;
  }
  span.cf-red {
    display: block;
    font-size: 18px;
    color: #d91b0c;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .cf-outline .purchase {
    margin-bottom: 0;
    text-align: center;
    padding: 0 50px;
    display: block;
    font-weight: 700;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-size: 22px;
    color: #333;
    line-height: 1em;
  }

  .ten-per-off span {
    background: #d91b0c;
    color: #fff;
    display: inline-block;
    padding: 10px 25px;
    font-weight: 700;
    font-size: 24px;
    position: relative;
    top: 21px;
    border: 2px solid #fff;
    border-radius: 5px;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
  }
  .ten-per-off span per {
    position: relative;
    padding-right: 16px;
  }
  .ten-per-off span per:after {
    content: "%";
    font-size: 11px;
    position: absolute;
    top: 2px;
    right: 3px;
  }
  .cf-dark-section {
    width: 100%;
    float: left;
    background: #484848;
    padding: 40px 15px 15px;
    color: #666;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    line-height: 1.7em;
  }

  .coupon_code {
    margin: 0 !important;
    padding: 0;
    color: #fff;
    font-size: 20px;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    line-height: 1em;
    display: block;
    font-weight: 700;
  }
  span.cf-coupon-code {
    font-size: 140%;
  }
  .must_order {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7em;
  }
  .cart-btn button {
    font-size: 18px !important;
    width: 100%;
    max-width: fit-content !important;
    font-family: inherit;
  }
  button.buynow {
    width: auto;
    padding: 10px 40px;
    border: 1px solid #0d492b;
    line-height: 22px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    max-width: 160px;
    clear: both;
    margin: 0 !important;
    background: #0d492b;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    border-radius: 5px;
  }
  a.cart-btn img {
    float: left;
    margin-right: 7px;
    max-width: 100%;
    height: auto;
  }
  h3.sd-new-cer {
    margin-top: 15px;
    display: block;
    font-weight: 700;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-size: 22px;
    padding-bottom: 10px;
    color: #333;
    line-height: 1em;
  }
  .certificate {
    width: 100%;
    background: url(${(props) => props.bgImg});
    background-size: contain;
    background-repeat: no-repeat;
    border: 4px double #0d4a2b;
    padding: 20px;
    float: left;
    margin-bottom: 40px;
    background-position: -60px 100px;
    text-align: center;
  }
  .certificate a {
    color: #0d4a2b;
  }
  img.new-logo-cert {
    max-width: 80px;
    height: auto;
  }
  h1.new-hole-in-one {
    font-weight: 900;
    font-size: 31px;
    font-family: "times-new-roman";
    color: #0d492b;
    padding-bottom: 10px;
  }
  .name-cert {
    width: 100%;
    float: left;
    font-size: 29px;
    line-height: 29px;
    color: #000;
    font-family: "times-new-roman";
    font-weight: 600;
  }
  .name-course {
    width: 100%;
    float: left;
    font-size: 19px;
    font-family: "times-new-roman";
    margin: 0;
    color: #000;
    line-height: 25px;
  }
  .city-state {
    width: 100%;
    float: left;
    font-size: 19px;
    font-family: "times-new-roman";
    margin-bottom: 0px;
    color: #000;
  }
  .city-course,
  .c-s,
  .state-course,
  .hole,
  .yardage .club,
  .hyc {
    display: inline-block;
  }
  .yardage.hyc {
    margin: 0 10px;
  }
  .sd-new-date {
    width: 100%;
    float: left;
    font-size: 19px;
    font-family: "times-new-roman";
    margin-bottom: 10px;
    color: #000;
  }
  .sd-extra-info {
    width: 100%;
    float: left;
    font-size: 17px;
    font-family: "times-new-roman";
    margin-bottom: 10px;
    color: #000;
  }
  .sd-extra-info span {
    font-weight: 600;
  }
  .sd-witness {
    width: 100%;
    float: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px !important;
  }
  .inner_witness {
    display: inline-block;
    margin: 0 5px;
  }
  .inner_witness span.name {
    display: block;
    text-align: left;
    font-weight: 600;
    border-bottom: 1px solid;
  }
  span.witness {
    text-align: left;
    display: block;
  }
  img.cf-pro-images {
    max-width: 400px;
    padding: 14.05px 0px;
    height: auto;
  }
  .class-cf-2 {
    padding-top: 19px;
  }
  .postioning-img {
    position: relative;
  }
  img.golfer {
    position: absolute;
    left: 10px;
    top: 0;
    max-width: 100%;
    height: auto;
  }
  .cf-right-outline-link {
    text-align: left;
    padding-left: 60px;
  }
  .cf-right-outline-link a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
  }
  .cf-right-outline-link h3 {
    color: #fff;
    margin: 0;
    font-size: 33px;
    display: block;
    font-weight: 700;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    padding-bottom: 10px;
    line-height: 1em;
  }
  .right-sd {
    width: 100%;
    float: left;
  }
  .cf-reg-info {
    margin-top: 15px;
  }
  .cf-reg-info h3:first-child {
    color: #484848;
    font-weight: bold;
    display: block;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-size: 22px;
    padding-bottom: 10px;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
  }
  .single-detail {
    margin-bottom: 4.5px;
    width: 100%;
    float: left;
    line-height: 17px;
    font-family: Arial, Helvetica, sans-serif;
    color: #666;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: 14px !important;
  }
  .cf-label {
    width: 37%;
    float: left;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .cf-label span {
    font-weight: 600;
  }
  span.cf-q {
    float: right;
    font-weight: normal;
  }
  .cf-filled-info {
    width: 63%;
    float: left;
  }
  .cf-reg-info a.cart-btn {
    margin-top: 10px;
    display: inline-block;
  }
  @media only screen and (min-width: 641px) {
    .column {
      width: 50%;
    }
  }
`;
