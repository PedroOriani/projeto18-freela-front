import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    
    @font-face {
        font-family: 'RetroVintage'; 
        src: url('/Vintage.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    *{
        box-sizing: border-box;;
    }

`
export default GlobalStyle