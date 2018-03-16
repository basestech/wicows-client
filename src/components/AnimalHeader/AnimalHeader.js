import React from 'react';
import classes from './AnimalHeader.css';
import AnimalNumber from './AnimalNumber';
import AnimalName from './AnimalName';

const AnimalHeader = (props) =>{
    return (
        <h2>
            <AnimalNumber number = {props.animalNumber} />
            <AnimalName name = {props.animalName} />
        </h2>
    )
}

export default AnimalHeader;
