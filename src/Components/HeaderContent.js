import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../images/phone.svg";
import { useTranslation } from "react-i18next";

const HeaderContent = () => {
  let pinkMessage =
    "https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/message_pink.svg";
  let truck =
    "https://cdn3d.iconscout.com/3d/premium/thumb/truck-2872398-2389819.png";
  let ring =
    "https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/ring_orange.svg";

  const { t } = useTranslation();

  return (
    <HeaderContentStyled id="home">
      <div className="left-content">
        <div className="left-text-container">
          <h1>{t("NHS")}</h1>
          <p className="white">{t("NhsP")}</p>
          <SecondaryButton />
        </div>
      </div>
      <div className="right-content">
        <img className="phone" src={phone} alt="" />
        <img src={truck} className="truck" alt="" />
        <img src={pinkMessage} className="pinkMessage" alt="" />
        <img src={ring} className="ring" alt="" />
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  padding: 0 10rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 100%);
  }

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    padding-top: 15rem;

    @media screen and (max-width: 480px) {
      padding-top: 7rem;
      margin-left: -100px;
    }
    .white {
      color: white;
    }

    h1 {
      font-size: 4rem;
      font-weight: 800;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }

    .white {
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    top: 30%;

    .phone {
      height: 600px;
      width: 80%;

      @media screen and (max-width: 1024px) {
      margin-left: -105px;
      margin-top: -15%;
      height: 120%;
      width: 120%;
    }      
    }

    .pinkMessage {
      position: absolute;
      right: 0;
      top: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;

      @media screen and (max-width: 480px) {
        display: none;
      }
    }
    .truck {
      position: absolute;
      bottom: 1%;
      top: 70%;
      right: 60%;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
      
      @media screen and (max-width: 1024px) {
        top: 85%;
       height: 20rem;
       width: 20rem;
      }
      @media screen and (max-width: 480px) {
        display: none;
      }
    }
    .ring {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: moveTwo 20s infinite;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 1024px) {
      right: -30%;
      bottom: 2%;

    }
    }
    @media screen and (max-width: 480px) {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      right: -15%;
    }
  }

  //Header Animations
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes moveTwo {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

export default HeaderContent;
