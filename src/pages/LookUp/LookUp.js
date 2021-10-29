import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LookUpElement1 from "./LookUpElement1";
const LookUp = () => {
  return (
    <>
      <LookUpWrapper>
        <Navbar />
        <LookUpElement1 />
        <Footer />
      </LookUpWrapper>
    </>
  );
};

export default LookUp;

const LookUpWrapper = styled.div`
  width: 100%;
`;
