import styled from 'styled-components';

import colors from '../../colors.json'

export const InputBody = styled.input`
    margin-right: 1rem;
    width: 100%;
    height: 1.5rem;
    padding: 1rem;
    border-radius: 0.3rem;
    border: 2px solid ${colors.colors['dark-blue']};
    font-size: 1rem;
    &:focus{
      border: 3px solid ${colors.colors.green};
      background-color: ${colors.colors.gray};
      color: ${colors.colors.white};
    }
`;