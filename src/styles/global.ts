import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #1C1C1C;
        --gray: #708090;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;

        --green: #3CB371;
        --shape: #FFFFFF;
        
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1000px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position:fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

    
        &::placeholder {
            margin-top: 1rem;
        }
        & + input {
            margin-top: 1rem;
        }

        
            }
            button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
        }
    }

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
`