import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";
import { animateScroll as scroll } from "react-scroll";
import { Link as LS } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Navigation({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const logo =
    "https://i.pinimg.com/originals/63/94/6a/63946a0838949891a1e36b85221ac9b7.jpg";

  const { t } = useTranslation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <NavigationStyled scrollNav={scrollNav}>
      <div className="logo">
        <NavLinks>
          <img
            onClick={toggleHome}
            className="logo-img"
            src={logo}
            smooth="true"
            duration={100}
            spy="true"
            exact="true"
            offset={-80}
            alt="sprinter van"
          />
        </NavLinks>
      </div>
      <LogoStyled>Value Haulers</LogoStyled>
      <ul>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <li>
          <NavLinks
            onClick={toggleHome}
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
            offset={-80}
          >
            {t("Home")}
          </NavLinks>
        </li>
        <li>
          <NavLinks
            to="pricing"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
            offset={-150}
          >
            {t("Pricing")}
          </NavLinks>
        </li>
        <li>
          <NavLinks
            to="reviews"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
            offset={-80}
          >
            {t("Reviews")}
          </NavLinks>
        </li>
        <li>
          <NavLinks
            to="contact"
            smooth={true}
            duration={100}
            spy={true}
            exact="true"
            offset={-120}
          >
            {t("Contact")}
          </NavLinks>
        </li>
        <DropDown />
      </ul>
      <PrimaryButton />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  margin-top: 0px;
  top: 0;
  align-items: center;
  position: fixed;
  background: ${({ scrollNav }) => (scrollNav ? "#16194F" : "transparent")};
  width: 100%;
  padding: 0 10rem;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  .logo-img {
    margin: 0.3rem;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      margin-left: -105px;
      height: 80px;
      width: 80px;
    }
    @media screen and (max-width: 480px) {
      margin-left: -125px;
      height: 70px;
      width: 70px;
    }

    &:hover {
      animation: spin 1000ms linear;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    margin-left: -9%;
    @media screen and (max-width: 1024px) {
      margin-right: -10%;
    }
    @media screen and (max-width: 1536px) {
        margin-left: -9rem;
    }
    @media screen and (max-width: 490px) {
        margin-left: -4rem;
    }

    li {
      display: flex;
      flex-direction: row;
      margin-left: 60px;
      @media screen and (max-width: 480px) {
        display: none;
      }
      @media screen and (min-width: 768px) {
        margin-left: 0;
      }
      @media screen and (max-width: 1536px) {
        margin-right: 4.6rem;
    }
     
    }
  }
`;

const NavLinks = styled(LS)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #f44e77;
  }

  &.active {
    border-bottom: 3px solid red;
  }
  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }
  @media screen and (max-width: 1536px) {
        margin-right: -3.2rem;
    }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    transition: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 428px) {
    font-size: 2rem;
    top: 2px;
    right: 30px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LogoStyled = styled.h3`
  display: none;

  @media screen and (max-width: 490px) {
    display: contents;
    font-family: "Comfortaa", cursive;
    font-size: 20px;
    left: -8px;
    color: #fff;
  }
`;

export default Navigation;
