import styled from 'styled-components';


export const Wrap = styled.div`
    width: 490px;
    display: block;
    margin: 0 auto;

    input {
        margin: 0 auto;
        width: 100%;
        height: 45px;
        padding: 0 20px;
        font-size: 1rem;
        border: 1px solid #D0CFCE;
        outline: none;
    }
    input#search-bar:focus {
        border: 1px solid #008ABF;
        transition: 0.35s ease;
        color: #008ABF;
      }
      input#search-bar:focus::-webkit-input-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      input#search-bar:focus::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      input#search-bar:focus:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
`;

