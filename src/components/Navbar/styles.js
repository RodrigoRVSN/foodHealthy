import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../colors.json'

export const Navbar = styled.header`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  z-index: 200;
  position: relative;

  @media screen and (max-width: 960px) {
    top: 0;
    width: 100vw;
    height: 12vh;
    background-color: ${colors.colors.green};
    position: fixed;
  }
`;

export const LinkNavegacao = styled(Link)`
  color: ${colors.colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${colors.colors.white};
  }
  h2{
    font-size: 2rem;
    color: ${colors.colors.green};
    @media screen and (max-width: 960px) {
      color: ${colors.colors['dark-blue']};
    }
  }
  
  @media screen and (max-width: 960px) {
      flex-direction: column;
      color: ${colors.colors['dark-blue']};
      line-height: 1;
      height: 2rem;
      font-size: 2rem;
      padding: 5vh 5vw; 
      text-align: center;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.colors['dark-blue']};
  z-index: 101;
  @media screen and (max-width: 960px) {
    display: ${({ open }) => open ? 'none' : 'block'};
    width: 15vw;
    height: 6vh;
    position: ${({ open }) => open ? 'fixed' : 'none'};
    right: 8vw;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

export const Closes = styled(FaRegWindowClose)`
  cursor: pointer;
  transform: translate(-100%, 75%);
  z-index: 101;
  width: 15vw;
  height: 6vh;
  right: 8vw;
  display: none;
  @media screen and (max-width: 960px) {
    display: ${({ open }) => open ? 'block' : 'none'};
    color: ${colors.colors['dark-blue']};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -4vw;
  color: ${colors.colors.green};
  font-size: 1.2rem;
  @media screen and (max-width: 960px){
    padding-top: 3.5rem;
    display: ${({ open }) => open ? 'block' : 'none'};
    z-index: 99;
    position: fixed;
    background-color: ${colors.colors.green};
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const NavCadastro = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2vw;
  padding: 3rem;
  @media screen and (max-width: 960px) {
      justify-content: center;
  }
`;

export const BotaoCadastro = styled(Link)`
  border-radius: 4px;
  background: ${colors.colors.white};
  padding: 10px 22px;
  color: ${colors.colors.green};
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-left: 2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.colors.white};
    background: ${colors.colors.green};
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ open }) => open ? '3rem' : '2rem'};
  }
`;