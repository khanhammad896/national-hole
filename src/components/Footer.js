import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <p>
          Copyright © 2019 NationalHoleInOneRegistry.com.{" "}
          <span>All Rights Reserved.</span>
        </p>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  float: left;
  background-color: #484848;
  text-align: center;

  p {
    color: #fff;
    font-family: Arial;
    font-weight: 500;
    line-height: 23.8px;
    font-size: 14px;
  }
`;
