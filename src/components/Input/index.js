import React from 'react';
import { InputBody } from './styles';

const Input = (props) => {
    return (
        <>
            <InputBody type={props.type} placeholder={props.holder}/>
        </>
    );
};

export default Input;