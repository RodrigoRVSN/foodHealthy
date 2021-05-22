import styled from 'styled-components';

import colors from '../../colors.json';

export const Back = styled.div`
    background-image: url('https://wallpapercave.com/wp/wp2757874.gif');
    z-index: -1;
    margin-top: -15vh;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
`;

export const WelcomeDiv = styled.div`
    padding-top: 20vh;
    margin-bottom: 10vh;
    color: ${colors.colors.white};
`;
