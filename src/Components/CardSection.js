import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';

const CardSection = () => {
    const card = 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/creditcard.svg'

    return (
        <CardSectionStyled>
          <InnerLayout>
            <div className='card-left'>
                <h1 className='heading'>Pricing</h1>
                <h2 className='heading2'>We accept all forms of payment.</h2>
                <p className='headingP'>We offer the ability to either pay Cash, Credit, or Debit.</p>
            </div>
            <div className='card-right'>
                <img src={card} alt="card" />
            </div>
            </InnerLayout>  
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`


`;

export default CardSection
