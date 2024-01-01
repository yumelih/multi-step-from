import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  --color-blue-marine: hsl(213, 96%, 18%);
  --color-blue-purplish: hsl(243, 100%, 62%);
  --color-blue-pastel: hsl(228, 100%, 84%);
  --color-blue-light: hsl(206, 94%, 87%);
  --color-red: hsl(354, 84%, 57%);

 --color-gray-light: hsl(231, 11%, 63%);
 --color-gray-lighter: hsl(229, 24%, 87%);
 --color-white-light: hsl(217, 100%, 97%);
 --color-white-lighter: hsl(231, 100%, 99%);
 --color-white-lightest: hsl(0, 0%, 100%);

 --max-width-tab-land: 75em; //1200px/16
 --max-width-phone: 37.5em; //600px/16

}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;

    @media only screen and (max-width: 75em) {
        font-size: 56.25%; // 9/16px 
    
    }

    @media only screen and (max-width: 37.5em) {
        font-size: 50%; // 8/16px 
        
    }
}

body {
    font-family: 'Ubuntu', sans-serif;
    color: var(--color-gray-light);
    background: var(--color-gray-lighter);
    position: relative;
    font-size: 1.6rem;
    height: 100vh;
    width: 100vw;
    line-height: 1.5;
}

#root {
    height: 100%;
    width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
    font-size: inherit;
}

button {
    cursor: pointer;
}

*:disabled {
    cursor: not-allowed;
}


ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

a {
   all: unset 
}
`;

// @media screen and (max-width: ){

// }

export default GlobalStyles;
