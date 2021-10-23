import React from 'react'
import styled from 'styled-components'

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo"></div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/benefits">Benefits</a>
                </li>
                <li>
                <a href="/pricing">Pricing</a></li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`

`
export default Navigation
