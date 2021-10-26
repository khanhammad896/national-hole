import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import HomeElement1 from "./HomeElement1";
import HomeElement2 from "./HomeElement2";
const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Navbar />
        <div id="et-main-area">
          <div id="main-content">
            <article>
              <div id="entry-content">
                <div className="et-boc">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <HomeElement1 />
                    <HomeElement2 />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;

  #et-main-area {
    width: 100%;
    float: left;
  }

  #main-content {
    background: transparent;
  }
  article {
    display: block;
  }

  #entry-content {
    margin-bottom: 0 !important;
    padding-top: 0;
  }
`;