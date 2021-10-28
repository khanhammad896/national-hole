import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
const LookUp = () => {
  return (
    <>
      <LookUpWrapper>
        <Navbar />
      </LookUpWrapper>
    </>
  );
};

export default LookUp;

const LookUpWrapper = styled.div`
  width: 100%;
`;
