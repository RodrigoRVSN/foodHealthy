import styled from 'styled-components';

import colors from '../../colors.json'

export const ButtonBody = styled.button`
    cursor: pointer;
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
`;