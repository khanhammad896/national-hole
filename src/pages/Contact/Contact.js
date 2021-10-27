import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { Grid } from "@mui/material";
import ContactElement1 from "./ContactElement1";
import ContactElement2 from "./ContactElement2";
import Footer from "../../components/Footer";
const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <Navbar />
        <Grid container direction="column">
          <ContactElement1 />
          <ContactElement2 />
          <Footer />
        </Grid>
      </ContactWrapper>
    </>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  width: 100%;
`;
