import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

const bg = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/bg.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <HeaderStyled>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <div className="header-content">
            <Navigation toggle={toggle}/>
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    background-image: url(${bg});

    @media screen and (max-width: 480px) {
        background-position: 30%;    
    }

    .header-content{
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 0rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 0rem;
        }
        @media screen and (max-width: 480px){
            padding: 0;
        }

      
    }
    `;



export default Header;
