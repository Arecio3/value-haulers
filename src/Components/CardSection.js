import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

const CardSection = () => {
  const card =
    "https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/creditcard.svg";

  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left" id="pricing">
            <h1 className="heading">Pricing</h1>
            <h2 className="heading2">We accept all forms of payment.</h2>
            <p className="headingP">
              We offer the ability to either pay Cash, Credit, or Debit. So that
              our customers are not limited. If you come across a problem feel
              free the contact us we have 24/7 customer service, or please visit
              the <a href="#FAQ"> FAQ's Page at the bottom.</a>
            </p>
          </div>
          <div className="card-right">
            <img className="card-img" src={card} alt="card" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
};

const CardSectionStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .card-img {
        display: flex;
        padding: 10%;
    }
`;

export default CardSection;
