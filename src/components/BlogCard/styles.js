import styled from 'styled-components';

import colors from '../../colors.json'

export const CardBody = styled.div`
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  background-color: ${colors.colors.white};
  box-shadow: 5px 7px 2.2rem 4px ${colors.colors.gray};
  border-radius: 1rem;
  transition: 0.2s ease-in;
  width: 25vw;
  margin: 2vh 0 4vh 4vw;
  &:hover{
      cursor: pointer;
      transform: scale(1.1);
  }
  @media screen and (max-width: 980px) {
    width: 40vw;
  }
  
  @media screen and (max-width: 525px) {
    width: 80vw;
  }
`;

export const RowList = styled.div`
`;

export const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 980px) {
    width: 40vw;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95%;
  h3{
    text-align: left;
    color: ${colors.colors['dark-blue']};
    font-size: 1.7rem;
  }
  
`;

export const PersonInfoDiv = styled.div`
  display: flex;
  img{
    height: 3rem;
    border-radius: 2rem;
  }
  h3{
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.8rem;
    color: ${colors.colors.gray};
  }
`;