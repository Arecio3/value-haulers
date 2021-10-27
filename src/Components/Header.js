import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import Navigation from './Navigation'

const bg = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/bg.svg'

const Header = () => {
    return (
        <HeaderStyled>
            <Navigation />
            <div className="header-content">
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

    .header-content{
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 4rem;
        }
    }
    `;



export default Header;
