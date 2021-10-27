import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

function ThirdButton() {
    const { t } = useTranslation()
    let arrow = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/arrow.svg'

    return (
        <ThirdButtonStyled>
            {t('FAQButton')}
            <img to="/faq" src={arrow} alt='arrow'/>
        </ThirdButtonStyled>
    )
}

const ThirdButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 30px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 12rem;
    margin-top: 0;
    img {
        padding-left: .9rem;
    }
`

export default ThirdButton
