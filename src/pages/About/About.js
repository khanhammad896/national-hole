import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactElement2 from "../Contact/ContactElement2";
import AboutElement1 from "./AboutElement1";
const About = () => {
  return (
    <>
      <AboutWrapper>
        <Navbar />
        <AboutElement1 />
        <ContactElement2 />
        <Footer />
      </AboutWrapper>
    </>
  );
};

export default About;

const AboutWrapper = styled.div`
  width: 100%;
`;
