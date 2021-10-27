import React from "react";
import styled from "styled-components";
import icon from "../assets/10.png";

const TextDivider2 = ({ dark, text }) => {
  return (
    <>
      <TextDivider2Wrapper icon={icon}>
        <h3 className={dark ? "icon-before dark-image" : "icon-before"}>
          {text}
        </h3>
      </TextDivider2Wrapper>
    </>
  );
};

export default TextDivider2;

const TextDivider2Wrapper = styled.div`
  margin-bottom: 50px;

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

  .icon-before:after {
    content: "";
    height: 1px;
    top: 50%;
    position: absolute;
    width: calc(100% - 330px);
    right: 0;
    background: #fff !important;
  }

  .dark-image:after {
    background: #000 !important;
  }
`;
