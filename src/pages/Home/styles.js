import styled from 'styled-components';

import colors from '../../colors.json';

/* Padronização */

export const Title = styled.h2`
  color: ${colors.colors['dark-blue']};
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.25;
`;

export const Description = styled.h3`
  margin-top: 0;
  color: ${colors.colors.gray};
  font-size: 1rem;
  font-weight: 400;
  width: ${(props) => props.width || '40%'};
  align-self: center;
  
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

/* Início  */

export const Img = styled.img`
  margin-top: -13vh;
  margin-right: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border:none;
  padding:0;
  
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }

`;

export const Inicio = styled.div`
  display: flex;
  color: ${colors.colors['dark-blue']};
  font-size: 2.2rem;
  line-height: 1.25;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const InicioPesquisa = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  z-index: 100;
  input{
    margin-right: 1rem;
    width: 30vw;
    height: 1.5rem;
    padding: 1rem;
    border-radius: 0.3rem;
    border: 2px solid ${colors.colors['dark-blue']};
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10vh;
    margin-bottom: 2vh;
    width: 80vw;
  }
`;

/* Melhores pratos div */


export const RecipesDiv = styled.div`
  margin-top: 10vh;
  display:flex;
  flex-direction: column;
  text-align: center;
  
  `;

export const RecipesRow = styled.div`
  margin-top: 10vh;
  display:flex;
  justify-content: center;
  gap: 2%;
  
  @media screen and (max-width: 1070px) {
      flex-direction: column;
      margin-top: 0;
  }
`;

/* Bloco de serviços div */

export const BlocoServices = styled.div`
  margin-top: 10vh;
  margin-left: -0.8vw;
  display:flex;
  @media screen and (max-width: 1070px) {
    flex-direction: column;
    padding: 0 8vw;
      img{
        display: none;
      }
  }
  `;

export const CtaColumn = styled.div`
  margin: 15vh 15vw 0 0;
  display: flex;
  flex-direction: column;
  button{
    margin-top: 2rem;
  }
  `;

/* Blog div */

export const IconRow = styled.div`
  cursor: pointer;
  position: absolute;
  width: 4rem;
  height: 3rem;
  font-size: 4rem;
  margin-top: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  @media screen and (max-width: 980px) {
    display: none;
  }
  `;

export const IconRight = styled.div`
  margin-right: -90vw;
  `;


export const BlogDiv = styled.div`
  margin-top: 5vh;
  display:flex;
  flex-direction: column;
  text-align: center;
  
  @media screen and (max-width: 525px) {
	  align-items: center;
  }

  `;

export const BlogCardDiv = styled.div`
  display: flex;
  @media screen and (max-width: 980px) {
    display: grid;
	  grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 525px) {
    display: grid;
	  grid-template-columns: 1fr;
	  text-align: center;
    width: 80vw;
  }
`;

/* Junte-se a equipe div */

export const MembershipDiv = styled.div`
  display:flex;
  margin-top: 15vh;
  @media screen and (max-width: 1070px) {
    flex-direction: column;
  }
  `;

export const MemberColumn = styled.div`
  z-index: 101;
  width: 25vw;
  display:flex;
  margin: auto;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    margin: 0;
    margin-left: 3vw;
    h2{
      width: 80vw;
    }
  }
  
  `;

export const MemberCta = styled.div`
  display:flex;
  width: 30vw;
  @media screen and (max-width: 1070px) {
    margin-bottom: 4vh;
    width: 80vw;
    align-items: center;
    text-align: center;
  }
`;
