import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../../assets/close.png";
import cabinet from "../../assets/trophies.jpg";
import cart from "../../assets/cart.png";
const Popup = ({ handlePopup }) => {
  return (
    <>
      <PopupWrapper>
        <div className="popup_main">
          <div className="popup_close" onClick={handlePopup}>
            <img src={close} alt="close" className="lazyloaded" />
          </div>
          <div className="inner_main">
            <h2>Congratulations!</h2>
            <p>Your registration number is 91782.</p>
            <p className="popup_shop_img">
              <img
                src={cabinet}
                alt="trophies"
                className="img_100 lazyloaded"
              />
            </p>
            <p className="pur_p">
              Purchase Your Hole-in-One Certificates and Awards
            </p>
            <div class="off_10">
              <Link>10% OFF</Link>
              <p>
                Order in the Next 24 hours and Save 10% on all orders over $30
                by using Coupon Code NHIOR10
              </p>
            </div>
          </div>
          <div className="inner_bottom">
            <Link>
              <img src={cart} alt="cart" className="lazyloaded" />
              Shop Now
            </Link>
          </div>
        </div>
      </PopupWrapper>
    </>
  );
};

export default Popup;

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 9999;

  .popup_main {
    width: 700px;
    background: #fff;
    position: absolute;
    left: 48.5%;
    top: 50%;
    border-radius: 7px;
    font-family: sans-serif;
    padding: 20px;
    transform: translate(-50%, -50%);
    display: block;
  }

  .popup_close {
    display: inline-block;
    position: absolute;
    right: -18px;
    top: -17px;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .inner_main {
    border: 1px solid #484848;
    cursor: pointer;
  }
  .inner_main h2 {
    text-transform: uppercase;
    color: #d91b0c;
    text-align: center;
    font-size: 28px;
    margin: 20px 0 5px 0;
    font-weight: 700;
    padding-bottom: 0;
    font-family: "Arial", Helvetica, Arial, Lucida, sans-serif;
    line-height: 1em;
  }
  .inner_main p {
    text-align: center;
    font-size: 19px;
    margin: 8px 0 10px 0;
    font-weight: 600;
    color: #333;
    padding-bottom: 1em;
  }
  .inner_main .popup_shop_img {
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
  }
  .img_100 {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .inner_main .pur_p {
    margin-bottom: 30px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
    padding-top: 0px;
    margin-top: 0;
  }
  .off_10 {
    background: #333;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .off_10 a {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    text-decoration: none;
    background: #d91b0c;
    padding: 4px 10px;
    display: inline-block;
    border-radius: 10px;
    border: 3px solid #fff;
    position: relative;
    top: -23px;
  }
  .off_10 p {
    color: #fff;
    margin-top: 0;
    width: 70%;
    margin: 0 auto;
    max-width: 100%;
    margin-bottom: 8px;
    line-height: 25px;
    padding-bottom: 0;
  }
  .inner_bottom {
    text-align: center;
  }
  .inner_bottom a {
    background: #0d4a2b;
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    padding: 9px 40px;
    display: inline-block;
    margin-top: 15px;
    border-radius: 6px;
  }
  .inner_bottom img {
    position: relative;
    top: 3px;
    right: 4px;
    max-width: 100%;
    height: auto;
  }
`;
