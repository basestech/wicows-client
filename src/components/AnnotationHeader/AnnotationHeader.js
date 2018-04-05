import React from 'react';
import ActivityHeader from './ActivityHeader';
import AnimalHeader from '../AnimalHeader/AnimalHeader';
import './AnnotationHeader.css'

const AnnotationHeader = ({actionType, animalName, animalNumber}) =>
        <div className="AnnotationHeader">
            <ActivityHeader type = {actionType}/>
            <AnimalHeader name = {animalName} number = {animalNumber}/>
        </div>


export default AnnotationHeader;
