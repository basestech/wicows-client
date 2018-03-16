import React from 'react';
import ActionHeader from './ActionHeader';
import AnimalHeader from '../AnimalHeader/AnimalHeader';

const AnnotationHeader = ({actionType, animalName, animalNumber}) =>
        <div>
            <ActionHeader type = {actionType}/>
            <AnimalHeader name = {animalName} number = {animalNumber}/>
        </div>


export default AnnotationHeader;
