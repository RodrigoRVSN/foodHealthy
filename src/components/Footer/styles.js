import styled from 'styled-components';

import colors from '../../colors.json'

export const FooterDiv = styled.footer`
    background-color: ${colors.colors.white};
    height: 10vh;
    padding: 0 3rem 0 3rem;
    display:flex;
    justify-content: space-between;
    @media(max-width: 970px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Terms = styled.div`
    display:flex;
    align-items: center;
    gap: 5vw;
    a{
        text-decoration: none;
        color: ${colors.colors.gray}
    }
`;

