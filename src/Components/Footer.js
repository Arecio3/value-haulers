import React from "react";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { Link as LS } from "react-scroll";
const Footer = () => {

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('AboutUs')}</FooterLinkTitle>
              <FooterLink to="/discover">{t('HowWorks')}</FooterLink>
              <FooterLink to="/reviews">{t('Reviews')}</FooterLink>
              <FooterLink to="/signin">{t('Terms')}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('OurMission')}</FooterLinkTitle>
              <FooterQuote >{t('Mission')}</FooterQuote> 
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('Privacy')}</FooterLinkTitle>
              <FooterLink to="/discover">{('TermsofUse')}</FooterLink>
              <FooterLink>{t('Sitemap')}</FooterLink>
              <WebsiteRights>HummingBird © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> 
      </FooterWrap>
    </FooterContainer>
  );
};

 const FooterContainer = styled.footer`
    background-color: #101522;
    margin-top: -3.5rem;
`

 const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

 const FooterLinksContainer =  styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

 const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

 const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    width: 160px;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

 const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

 const FooterLink = styled(LS)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

 const FooterQuote = styled.p`
    font-style: italic;
    color: #fff;
    font-size: 12px;
`

 const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export default Footer;
