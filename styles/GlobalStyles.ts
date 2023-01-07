import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
    }

    :root {
        --blue: #96BBE8;
        --pink: #D9A5C1;
        --white: #ffffff;
        --light-dark: rgba(44, 47, 51, 0.8);
    }

    body {
        display: flex;
        justify-content: center;
        background: linear-gradient(70deg, var(--blue), var(--pink));
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
