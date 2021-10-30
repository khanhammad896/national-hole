import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow-1.png";
import arrow2 from "../../assets/arrow-2.png";

import icon from "../../assets/Home-National-Hole-In-One-Registry-1.png";

import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

const RegisterElement1 = () => {
  const [tabIndex, setTabIndex] = React.useState(1);

  const formHandler = () => {
    if (tabIndex === 1) {
      return <FormStep1 handleTabs={handleTabs} />;
    }
    if (tabIndex === 2) {
      return <FormStep2 handleTabs={handleTabs} />;
    }

    if (tabIndex === 3) {
      return <FormStep3 handleTabs={handleTabs} />;
    }
  };
  const handleTabs = (value) => {
    setTabIndex(value);
  };
  return (
    <>
      <RegisterElement1Wrapper arrow={arrow} icon={icon} arrow2={arrow2}>
        <div className="et-pb-section">
          <div className="et-pb-row">
            <div>
              <div className="et-pb-code">
                <div className="et-pb-code-inner">
                  <div className="cf-forms">
                    <div className="sd-shortcode">
                      <div className="sd-butt">
                        <h2>REGISTER YOUR HOLE IN ONE</h2>
                      </div>
                      <div className="sd-li cf-lw">
                        <ul className="cf-new-list">
                          <li
                            className={
                              tabIndex === 1
                                ? "active step1"
                                : "not-active step1"
                            }
                          >
                            <span className="show-none">1</span>
                            <div className="cf-show-me-on-mobile">
                              <h4 className="cf-big">FIRST STEP</h4>
                              Vital Information
                            </div>
                          </li>
                          <li
                            className={
                              tabIndex === 2
                                ? "active step2 active-1"
                                : "not-active step2 active-1"
                            }
                          >
                            <span className="show-none">2</span>
                            <div className="cf-show-me-on-mobile">
                              <h4 className="cf-big">SECOND STEP</h4>
                              Vital Information
                            </div>
                          </li>
                          <li
                            className={
                              tabIndex === 3
                                ? "active step3"
                                : "not-active step3"
                            }
                          >
                            <span className="show-none">3</span>
                            <div className="cf-show-me-on-mobile">
                              <h4 className="cf-big">THIRD STEP</h4>
                              Vital Information
                            </div>
                          </li>
                        </ul>
                        <h3 className="new-title">
                          {" "}
                          If you are one of the SPECIAL FEW to make a hole in
                          one, you have the opportunity to record your success
                          in our national registry!
                        </h3>
                      </div>
                      {formHandler()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RegisterElement1Wrapper>
    </>
  );
};

export default RegisterElement1;

const RegisterElement1Wrapper = styled.div`
  .et-pb-section {
    padding: 20px 0 0 0;
  }
  .et-pb-row {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
  }

  .sd-butt h2 {
    color: #484848 !important;
    text-shadow: none;
    font-weight: 600 !important;
    line-height: 27px;
    font-family: RobotoSlabLight, serif;
    font-size: 26px;
    padding-bottom: 10px;
  }

  .sd-li,
  .cf-lw {
    margin: 0 !important;
  }

  .cf-new-list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 25px;
    width: 100%;
    float: left;
    background: #bebebe;
    border-radius: 5px;
    line-height: 26px;
    list-style: none;
  }
  .not-active,
  .active {
    float: left;
    width: 33.333%;
    background: transparent;
    color: #0d4a2b;
    font-size: 14px;
    padding: 8px 10px;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    line-height: 35px;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .active {
    background: #0d4a2b !important;
    color: #fff;
  }
  .active span {
    background: #000 !important;
  }
  .cf-new-list li span,
  .active span {
    position: absolute;
    left: 10px;
    top: 6px;
    background: #484848;
    border-radius: 50%;
    line-height: 40px;
    width: 40px;
    height: 40px;
    margin: 0;
    float: left;
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }

  .cf-new-list li div,
  .active div {
    padding-left: 52px;
    width: 100%;
    float: left;
    line-height: normal;
    color: #fff;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
  }
  .active div {
    color: #b1e35d !important;
  }

  .cf-new-list li div h4,
  .active div h4 {
    padding-bottom: 0;
    margin: 0;
    font-size: 18px;
    line-height: normal;
    display: block;
    font-weight: 700;
    color: #333;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
  }
  .active div h4 {
    color: #fff !important;
  }

  .new-title {
    margin-bottom: 30px;
    line-height: 25px;
    display: inline-block !important;
    font-weight: 700;
    padding-bottom: 10px;
    color: #333;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    font-size: 22px;
  }

  @media only screen and (min-width: 481px) {
    .not-active:after,
    .active:after {
      content: "";
      background: url(${(props) => props.arrow});
      display: block;
      position: absolute;
      width: 37px;
      height: 100%;
      right: -1px;
      top: 0;
      z-index: 999;
      background-repeat: no-repeat;
      background-size: cover;
    }
    // .active:after {
    //   background: url(${(props) => props.arrow});
    // }
    .step3:after {
      background: none !important;
    }
  }
`;
