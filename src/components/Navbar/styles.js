import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../colors.json'

export const Navbar = styled.nav`
position: absolute;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 200;
  position: relative;
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
    @media screen and (max-width: 550px) {
      color: ${colors.colors['dark-blue']};
    }
  }
  
  @media screen and (max-width: 960px) {
      flex-direction: column;
      color: ${colors.colors['dark-blue']};
      line-height: 1;
      height: 2rem;
      margin-top: 1rem;
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
    background: ${colors.colors.gray};
    width: 4rem;
    height: 3rem;
    position: ${({ open }) => open ? 'fixed' : 'none'};
    display: block;
    right: 8vw;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
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