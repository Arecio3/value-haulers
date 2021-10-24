import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";

const HeaderContent = () => {
  let phone =
    "https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/phone.svg";
let pinkMessage = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/message_pink.svg';
let blueMessage = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/message_blue.svg';
let truck = 'https://cdn3d.iconscout.com/3d/premium/thumb/truck-2872398-2389819.png';
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
        <img src={blueMessage} className="blueMessage" alt="" />
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

          .truck {
              position: absolute;
              bottom: 0;
              right: 0;
              height: 300px;
          }
          .pinkMessage {
              position: absolute;
              top: 0;
              right: 0;
              left: auto;
          }
          .blueMessage {
              position: absolute;
              bottom: 15%;
              left: 0;
          }
      }
`;

export default HeaderContent;
