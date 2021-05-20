import React from 'react';
import { InputBody } from './styles';

const Input = (props) => {
    return (
        <>
            <InputBody placeholder={props.holder}/>
        </>
    );
};

export default Input;