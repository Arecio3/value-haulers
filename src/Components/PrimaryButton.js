import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { Link as LS } from 'react-scroll';

function PrimaryButton() {
    const { t } = useTranslation()

    return (
        <LinkButton to="contact" smooth={true} duration={100} spy={true} exact='true' offset={-120}>
        <ButtonStyled>
           {t('ContactUs')}
        </ButtonStyled>
        </LinkButton>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 30px;
    outline: none;
    border: none;

    @media screen and (max-width: 480px) {
        display: none;
    }
`
const LinkButton = styled(LS)``;
export default PrimaryButton
