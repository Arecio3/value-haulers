import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

let arrow = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/arrow.svg'


const SecondaryButton = () => {
    const { t } = useTranslation()

    return (
        <SecondaryButtonStyled>
            {t('SeePrices')}
            <img src={arrow} alt='arrow'/>
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
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

    img {
        padding-left: .9rem;
    }
`

export default SecondaryButton
