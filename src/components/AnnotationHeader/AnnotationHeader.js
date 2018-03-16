import React from 'react';
import ActionHeader from './ActionHeader';
import AnimalHeader from '../AnimalHeader/AnimalHeader';
import './AnnotationHeader.css'

const AnnotationHeader = ({actionType, animalName, animalNumber}) =>
        <div className="AnnotationHeader">
            <ActionHeader type = {actionType}/>
            <AnimalHeader name = {animalName} number = {animalNumber}/>
        </div>


export default AnnotationHeader;
