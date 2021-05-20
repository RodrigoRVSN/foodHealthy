import React from 'react';
import { FooterDiv, Terms } from './styles';

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <h4>© Feito por Rodrigo Victor RVSN</h4>
                <Terms>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and Conditions</a>
                </Terms>
            </FooterDiv>
        </>
    );
};

export default Footer;