import React from 'react';
import { ButtonBody } from './styles';

const Button = (props) => {
    return (
        <>
            <ButtonBody> {props.text} </ButtonBody>
        </>
    );
};

export default Button;