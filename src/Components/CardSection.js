import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import { useTranslation } from "react-i18next";
import ThirdButton
 from "./ThirdButton";
const CardSection = () => {
  const card =
    "https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/creditcard.svg";

  const { t } = useTranslation()

  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left" id="pricing">
            <h1 className="heading">{t('Pricing')}</h1>
            <h2 className="heading2">{t('PriceHeading')}</h2>
            <p className="headingP">
             {t('PriceP')}
            </p>
          </div>
          <div className="card-right">
            <img className="card-img" src={card} alt="card" />
          </div>
          <ThirdButton />
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
};

const CardSectionStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 350px;

        .card-right {
            display: flex;
            justify-content: flex-end;

            .card-img {
                display: flex;
                padding: 10%;
            }
        }

        .card-left {
            p {
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection;
