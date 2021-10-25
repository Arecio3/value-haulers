import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";
import { animateScroll as scroll} from 'react-scroll'
import { Link as LS } from 'react-scroll';

function Navigation() {
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
  }

  return (
    <NavigationStyled scrollNav={scrollNav}>
        <div className="logo">
          <img onClick={toggleHome} className="logo-img" src={logo} alt="sprinter van" />
        </div>
        <ul>
          <li>
            <NavLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t("Home")}</NavLinks>
          </li>
          <li>
            <NavLinks to="/benefits" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t("Benefits")}</NavLinks>
          </li>
          <li>
            <NavLinks to="/reviews" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t("Reviews")}</NavLinks>
          </li>
          <li>
            <NavLinks to="/pricing" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t("Pricing")}</NavLinks>
          </li>
          <li>
            <NavLinks to="/contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t("Contact")}</NavLinks>
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
  margin-top: -80px;
  top: 0;
  align-items: center;
  position: sticky;
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
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

const NavLinks = styled(LS)`
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #F44E77;
}
`

export default Navigation;
