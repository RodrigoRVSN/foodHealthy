import React from 'react';
import { RowList, CardBody, Img, Info, PersonInfoDiv } from './styles';

const BlogCard = (props) => {
    return (
        <>
        <RowList>
            <CardBody>
                <Img src={props.src} alt={props.title}></Img>
                <Info>
                    <h3>{props.title}</h3>
                    <PersonInfoDiv>
                        <img src={props.photo} alt={props.name} />
                        <h3>{props.name}</h3>
                    </PersonInfoDiv>
                </Info>
            </CardBody>
        </RowList>
        </>
    );
};

export default BlogCard;