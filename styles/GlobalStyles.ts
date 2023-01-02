import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Poppins', sans-serif;
        font-style: normal;
    }

    :root {
        --dark-brown: #BC6C25;
        --dark-brown-pastel: #D4A373;
        --light-brown: #DDA15E;
        --light-brown-pastel: #FAEDCD;
        --bege: #FEFAE0;
       --matcha: #74A12E;
    }

    body {
        display: flex;
        justify-content: center;
        background-color: var(--bege);
        padding: 0 5vw 0 5vw;

    }

    button {
        cursor: pointer;
        transition: 0.5s;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;
