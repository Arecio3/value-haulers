import React from "react";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LS } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {

  const { t } = useTranslation();


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>{t('Home')}</SidebarLink>
          <SidebarLink to="pricing" onClick={toggle}>{t('Pricing')}</SidebarLink>
          <SidebarLink to="reviews" onClick={toggle}>{t('Reviews')}</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>{t('Contact')}</SidebarLink>
          <SidebarLink to="story" onClick={toggle}>{t('Story')}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="contact" onClick={toggle}>{t('Hire Me')}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

 const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    /* You can do if else in styled components */
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    `


const CloseIcon = styled(FaTimes)`
    color: #fff;
    `

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    @media screen and (max-width: 480px) {
        right: .5rem;
    }
    `

const SidebarWrapper = styled.div`
    color: #fff;
`
 const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6,60px);
    }
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5,60px);
    }
`

 const SidebarLink = styled(LS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F44E77;
        transition: 0.2s ease-in-out;
    }
`

 const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

    @media  screen and (max-width: 480px) {
        margin-left: 30px;
    }
`

 const SidebarRoute = styled(LS)`
    border-radius: 50px;
    background-color: #F44E77;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export default Sidebar;