import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FactsElement1 from "./FactsElement1";
const Facts = () => {
  return (
    <>
      <FactsWrapper>
        <Navbar />
        <FactsElement1 />
        <Footer />
      </FactsWrapper>
    </>
  );
};

export default Facts;

const FactsWrapper = styled.div``;
