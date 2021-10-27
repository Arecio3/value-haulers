import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --purple-primary: #554DDE;
  --accent-pink: #F44E77;
  --neutral-light: #F2F6FF;
  --lavender-secondary: #6A6D9E;
  --dark-primary: #16194F;
  --border-color: #CAB6F1;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
}

body {
    background-color: var(--neutral-light);
    color: white;
    font-size: 1.2rem;
}

a {
    color: inherit;
}

::-webkit-scrollbar {
    display: none;
}

p {
    color: var(--lavender-secondary);
}

.heading {
    font-size: 3rem;
    color: var(--purple-primary);

}
.heading2 {
    font-size: 1.7rem;
    color: var(--accent-pink);

}
`

export default GlobalStyle