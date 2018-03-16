import React from 'react';
import './AnimalHeader.css';
import AnimalNumber from './AnimalNumber';
import AnimalName from './AnimalName';

const AnimalHeader = ({name, number}) =>{
    return (
        <h2 className="AnimalHeader">
            <AnimalNumber number = {number} />
            <AnimalName name = {name} />
        </h2>
    )
}

export default AnimalHeader;
