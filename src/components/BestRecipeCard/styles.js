import styled from 'styled-components';

import colors from '../../colors.json'

export const CardBody = styled.div`
  line-height: 1.25;
  height: 100%;
  display: flex;
  background-color: ${colors.colors.white};
  box-shadow: 5px 7px 2.2rem 4px ${colors.colors.gray};
  border-radius: 1rem;
  transition: 0.2s ease-in;
  &:hover{
      transform: scale(1.1);
  }
  @media screen and (max-width: 1070px){
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 70vw;
    margin-top: 5vh;
  }
  @media screen and (max-width: 600px){
    flex-direction: column;
    width: 80vw;
  }
  
`;

export const Img = styled.img`
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  width: 15vw;
  h3{
    text-align: left;
    color: ${colors.colors['dark-blue']};
    font-size: 1.7rem;
  }
  button{
    font-size: 1.1rem;
    width: 9rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    color: ${colors.colors.white};
    background-color: ${colors.colors.green};
    &:hover{
      color: ${colors.colors.green};
      background-color: ${colors.colors.white};
      border: 3px solid ${colors.colors.green};
    }
  }
  
  @media screen and (max-width: 1070px){
    justify-content: space-evenly;
    width: 70vw;
  }
  @media screen and (max-width: 600px){
    align-items: center;
    width: 50vw;
  }
`;