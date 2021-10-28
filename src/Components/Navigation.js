import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";
import { animateScroll as scroll } from "react-scroll";
import { Link as LS } from "react-scroll";
import { Fade } from "react-awesome-reveal";
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
      <Fade duration={1000} direction="top">
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
          <li>
            <NavLinks
              to="story"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              offset={-80}
            >
              {t("Story")}
            </NavLinks>
          </li>
          <DropDown />
        </ul>
        <PrimaryButton />
      </Fade>
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
    li {
      display: inline-flex;
      flex-direction: row;
      @media screen and (max-width: 480px) {
        display: none;
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
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    transition: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 428px) {
    top: 15px;
  }
`;

export default Navigation;
