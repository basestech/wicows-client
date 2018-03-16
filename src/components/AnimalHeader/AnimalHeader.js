import React from 'react';
import classes from './AnimalHeader.css';
import AnimalNumber from './AnimalNumber';
import AnimalName from './AnimalName';

const AnimalHeader = (props) =>{
    return (
        <h2 className="AnimalHeader">
            <AnimalNumber number = {props.number} />
            <AnimalName name = {props.name} />
        </h2>
    )
}

export default AnimalHeader;
