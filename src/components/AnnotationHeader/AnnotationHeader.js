import React from 'react';
import ActionHeader from './ActionHeader';
import AnimalHeader from '../AnimalHeader/AnimalHeader';

const annotationHeader = (props) =>{
    return (
        <div>
            <ActionHeader actionName = {props.actionName}/>
            <AnimalHeader animalName = {props.animalName} animalNumber = {props.animalNumber}/>
        </div>
        )
}

export default annotationHeader;