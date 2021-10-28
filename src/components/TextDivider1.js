import React from "react";
import styled from "styled-components";
import icon from "../assets/10.png";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search-solid.svg";
const TextDivider1 = ({ dark, text, button }) => {
  return (
    <>
      <TextDivider1Wrapper icon={icon} searchIcon={searchIcon}>
        <h3 className={dark ? "icon-before dark-image" : "icon-before"}>
          {text}
          {button && (
            <span className="sd-new-anchor">
              <Link>Registry Lookup</Link>
            </span>
          )}
        </h3>
      </TextDivider1Wrapper>
    </>
  );
};

export default TextDivider1;

const TextDivider1Wrapper = styled.div`
  //   margin-bottom: 20px;

  .icon-before {
    position: relative;
    padding: 10px 30px;
    font-size: 20px;
    clear: both;
    font-family: RobotoSlabLight;
    font-weight: 300 !important;
    color: #fff;
  }

  .dark-image {
    color: #000 !important;
  }

  .icon-before:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 21px;
    height: 40px;
    background: url(${(props) => props.icon});
    background-position: -373px -32px !important;
  }

  .dark-image:before {
    background: url(${(props) => props.icon});
    background-position: -416px -32px !important;
  }

  .sd-new-anchor {
    float: right;
  }
  .sd-new-anchor a {
    background: #0d4a2b;
    color: #fff !important;
    padding: 12px 35px;
    position: relative;
    z-index: 9;
    border-radius: 5px;
    font-size: 16px;
    font-family: RalewayThin;
    font-weight: 500;
  }
  .sd-new-anchor a:before {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f002";
    margin-right: 5px;
  }

  @media screen and (min-width: 150px) and (max-width: 780px) {
    .sd-new-anchor {
      width: 100%;
      line-height: 50px;
      margin-top: 15px;
      display: block;
      float: none !important;
      margin-left: -30px;
    }
    .sd-new-anchor a {
      font-size: 13px !important;
    }
  }
`;
