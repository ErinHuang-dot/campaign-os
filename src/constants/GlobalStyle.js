import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Fluid type */
    --step--1: clamp(0.8331rem, 0.8099rem + 0.1163vw, 0.9rem); /* 13-14 small */
    --step-0: clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem); /* 16-18 Base text */
    --step-1: clamp(1.2rem, 1.1283rem + 0.3587vw, 1.4063rem); /* 19-22 h4 */
    --step-2: clamp(1.44rem, 1.3293rem + 0.5533vw, 1.7581rem);  /* 23-28 h3 */
    --step-3: clamp(1.7281rem, 1.5649rem + 0.8163vw, 2.1975rem); /* 27-35 h2 */
    --step-4: clamp(2.0738rem, 1.8396rem + 1.1707vw, 2.7469rem); /* 33-44 h1 */
    --step-5: clamp(2.4881rem, 2.1594rem + 1.6435vw, 3.4331rem); /* 40-55 */
    --step-6: clamp(2.9863rem, 2.5323rem + 2.2696vw, 4.2913rem); /* 48-68 Display */
    --step-7: clamp(3.5831rem, 2.9636rem + 3.0978vw, 5.3644rem); /* 57-86 */
    --step-8: clamp(4.3rem, 3.4633rem + 4.1837vw, 6.7056rem); /* 68-107 */
    
    /* Fluid space */
    --space-3xs: clamp(0.25rem, 0.2283rem + 0.1087vw, 0.3125rem); /* 4-5*/
    --space-2xs: clamp(0.5rem, 0.4783rem + 0.1087vw, 0.5625rem); /* 8-9*/
    --space-xs: clamp(0.75rem, 0.7065rem + 0.2174vw, 0.875rem); /* 12-14*/
    --space-s: clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem); /* 16-18*/
    --space-m: clamp(1.5rem, 1.4348rem + 0.3261vw, 1.6875rem); /* 24-27*/
    --space-l: clamp(2rem, 1.913rem + 0.4348vw, 2.25rem); /* 32-36*/
    --space-xl: clamp(3rem, 2.8696rem + 0.6522vw, 3.375rem); /* 48-54*/
    --space-2xl: clamp(4rem, 3.8261rem + 0.8696vw, 4.5rem); /* 64-72*/
    --space-3xl: clamp(6rem, 5.7391rem + 1.3043vw, 6.75rem); /* 96-108*/

    /* Fluid grid */
    --grid-max-width: 77.50rem;
    --grid-gutter: var(--space-s-l, clamp(1.125rem, 0.6467rem + 2.3913vw, 2.5rem));
    --grid-columns: 12;

    /* Color pallete */
    --gray-50: hsl(210, 40%, 98%);
    --gray-100: hsl(210, 40%, 96%);
    --gray-200: hsl(214.286, 32%, 91%);
    --gray-300: hsl(212.727, 27%, 84%);
    --gray-400: hsl(215, 20%, 65%);
    --gray-500: hsl(215.385, 16%, 47%);
    --gray-600: hsl(215.294, 19%, 35%);
    --gray-700: hsl(215.294, 25%, 27%);
    --gray-800: hsl(217.241, 33%, 18%);
    --gray-900: hsl(222.222, 47%, 11%);

    --primary-gradient: linear-gradient( to right, hsl(21.882, 77%, 56%), hsl(338.526, 100%, 63%));
    --primary-theme1: hsl(21.25, 66%, 57%);
    --text-primary: var(--gray-700);
    --text-secondary: var(--gray-400);
    --bg-color-theme1: hsl(30, 33%, 99%);
    --bg-color-theme2: hsl(30, 58%, 93%);
  }

  .u-container {
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline: auto;
  }

  .u-grid {
    display: grid;
    gap: var(--grid-gutter);
  }

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 32
  }
`

export default GlobalStyles;