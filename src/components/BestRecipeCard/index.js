import React from 'react';
import Button from '../Button';
import { CardBody, Img, Info } from './styles';

const BestRecipeCard = (props) => {
    return (
        <>
            <CardBody>
                <Img src={props.src} alt={props.title}></Img>
                <Info>
                    <h3>{props.title}</h3>
                    <Button text={'See recipe'}/>
                </Info>
            </CardBody>
        </>
    );
};

export default BestRecipeCard;