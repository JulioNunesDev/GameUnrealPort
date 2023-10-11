import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;

list-style: none;
text-decoration: none;



}

#root{

    width: 100%;
height: 100vh;
}


:root{
    //Fontes 
    --font-Bebas: 'Bebas Neue', sans-serif;
    --font-Bela: 'Belanosima', sans-serif;
    --font-Jost: 'Jost', sans-serif;
    --font-Noto: 'Noto Sans Phags Pa', sans-serif;
    --font-Taga: 'Noto Sans Tagalog', sans-serif;
    --font-Oxa: 'Oxanium', sans-serif;
    --font-Poppins: 'Poppins', sans-serif;
    --font-Roboto: 'Roboto', sans-serif;
    --font-Ubuntu: 'Ubuntu', sans-serif;


    //Cores

    --color-night: #181717;
    --color-midnight: #F3F3F3;


    //Size

    --size-paragraph: 15px ;
    --size-text: 22px ;
    --size-title: 35px ;
    --size-titleup: 45px;

}

`

export default GlobalStyles;