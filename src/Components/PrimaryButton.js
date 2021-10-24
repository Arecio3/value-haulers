import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

function PrimaryButton() {
    const { t } = useTranslation()

    return (
        <ButtonStyled>
           {t('ContactUs')}
        </ButtonStyled>
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
`

export default PrimaryButton
