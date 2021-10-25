import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
// import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";

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

  return (
    <NavigationStyled scrollNav={scrollNav}>
        <div className="logo">
          <img className="logo-img" src={logo} alt="sprinter van" />
        </div>
        <ul>
          <li>
            <a href="/">{t("Home")}</a>
          </li>
          <li>
            <a href="/benefits">{t("Benefits")}</a>
          </li>
          <li>
            <a href="/benefits">{t("Reviews")}</a>
          </li>
          <li>
            <a href="/pricing">{t("Pricing")}</a>
          </li>
          <li>
            <a href="/pricing">{t("Contact")}</a>
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

  .logo-img {
    margin: 0.3rem;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

export default Navigation;
