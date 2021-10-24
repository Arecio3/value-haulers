import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from '../images/phone.svg'

const HeaderContent = () => {
let pinkMessage = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/message_pink.svg';
let truck = 'https://cdn3d.iconscout.com/3d/premium/thumb/truck-2872398-2389819.png';
let ring = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/ring_orange.svg';

  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <h1>Nationwide Hauling Company</h1>
          <p className="white">
            Could be near you! We are based in
            Tampa, Florida but work nationwide across the entire United States
            to accomodate everyone, we offer exclusive customer service and
            prices! Check out our prices below.
          </p>
          <SecondaryButton />
        </div>
      </div>
      <div className="right-content">
        <img className="phone" src={phone} alt="" />
        <img src={truck} className="truck" alt="" />
        <img src={pinkMessage} className="pinkMessage"  alt="" />
        <img src={ring} className="ring"  alt="" />
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;

  .left-content {
      display: flex;
      align-items: center;
      padding-right: 3rem;

      h1  {
          font-size: 4rem;
          font-weight: 800;
      }

      .white {
          padding: 1.4rem 0;
          line-height: 1.8rem;

      }
  }

  .right-content {
          position: relative;

          .phone {
              height: 600px;

          }

          .pinkMessage {
              position: absolute;
              right: 0;
              top: 0;
              left: auto;
          }
          .truck {
              position: absolute;
              bottom: 1%;
              top: 70%;
              right: 60%;
          }
          .ring {
              position: absolute;
              bottom: 10%;
              right: 0;
              left: auto;
          }
      }
`;

export default HeaderContent;
