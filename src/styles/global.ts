import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';

import logoImg from '../assets/github-background.svg';

export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
}

body, input, button{
    font: 16px Roboto, sans-serif;
}

button{
    cursor: pointer;
}

#root{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}




`

