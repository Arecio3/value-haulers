import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className='left-content'>
                <h1>Nationwide Hauling Company</h1>
                <p className='white'>Could be in an are near you! Always on the move!We are based in Tampa, Florida but work nationwide across the entire United States to accomodate everyone, we offer exclusive customer service and prices! Check out our prices below.</p>
                <SecondaryButton />
            </div>
            <div className='right-content'></div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`

`

export default HeaderContent
