import styled from 'styled-components';

import colors from '../../colors.json';

/* Padronização */

export const CadastroBox = styled.form`
    background-image: url('https://www.publicdomainpictures.net/pictures/30000/nahled/solid-green-background.jpg');
    width: 50vw;
    height: 90vh;
    padding: 2rem;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0.5rem;
    margin: auto;
    box-shadow: 5px 7px 2.2rem 4px ${colors.colors.gray};
    margin-bottom: 5vh;
    input{
        margin-bottom: 2vh;
        width: 100%;
        height: 3rem;
        padding: 1rem;
        border-radius: 0.3rem;
        border: 2px solid ${colors.colors['dark-blue']};
        font-size: 1rem;
            &:focus{
                border-bottom: 4px solid ${colors.colors.green};
                background-color: ${colors.colors.gray};
                color: ${colors.colors.white};
                outline: none;
                width: 100%;
            }
            &:hover{
              border: 3px solid ${colors.colors.green}
            }
    }
    h3{
        text-align: right;
    }
    h2{
        font-size: 2.5rem;
        margin-bottom: 5vh;
    }
    span{
        border-bottom: 1px solid ${colors.colors['dark-blue']};
    }

    h3, h2{
        color: ${colors.colors.white};
    }  
  @media screen and (max-width: 960px) {
    margin-top: 10vh;
    width: 80vw;
  }
  @media screen and (max-width: 550px) {
    margin-top: -5vh;
    width: 95vw;
    height: 100vh;
    padding: 0.3rem;
  }   
`;

export const Back = styled.img`
    align-self: center;
    position: absolute;
    z-index: -1;
    margin-top: -15vh;
    width: 100vw;
    height: 100vh;
`;


export const CadastroRow = styled.div`
    width: 100%;
    display: flex;
    gap: 1vw;
    label{
        display: flex;
        align-items: center;
        color: ${colors.colors.white};
    } 
    @media screen and (max-width: 700px) {
        label{
            display: none;
        }
    }
`;

export const Button = styled.button`
    cursor: pointer;
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 1.1rem;
    width: 60%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    color: ${colors.colors['dark-blue']};
    background-color: ${colors.colors.white};
    &:hover{
      color: ${colors.colors.white};
      background-color: ${colors.colors['dark-blue']};
      border: 3px solid ${colors.colors.green};
    }
    &:disabled{
        opacity: 0.2;
        &:hover{
            cursor: not-allowed;
        }
    }
`;