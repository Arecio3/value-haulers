import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
// import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";

function Navigation() {

  const logo =
    "https://i.pinimg.com/originals/63/94/6a/63946a0838949891a1e36b85221ac9b7.jpg";

  const { t } = useTranslation();

  return (
    <NavigationStyled>
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
  min-height: 10vh;
  align-items: center;

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
