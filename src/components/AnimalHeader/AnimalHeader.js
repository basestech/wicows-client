import React from 'react';
import classes from './AnimalHeader.css';
import AnimalNumber from './AnimalNumber';
import AnimalName from './AnimalName';

const animalHeader = (props) =>{
    return(
        <h2 className ={classes}>
            <AnimalNumber animalNumber = {props.animalNumber} />
            <AnimalName animalName = {props.animalName} />
        </h2>
    )
}

export default animalHeader;