import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecordsElement1 from "./RecordsElement1";
import RecordsElement2 from "./RecordsElement2";
const Records = () => {
  return (
    <>
      <RecordsWrapper>
        <Navbar />
        <RecordsElement1 />
        <RecordsElement2 />
        <Footer />
      </RecordsWrapper>
    </>
  );
};

export default Records;

const RecordsWrapper = styled.div`
  width: 100%;
`;
