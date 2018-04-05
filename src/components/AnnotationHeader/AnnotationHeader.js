import React from 'react';
import ActivityHeader from './ActivityHeader';
import AnimalHeader from '../AnimalHeader/AnimalHeader';
import './AnnotationHeader.css'

const AnnotationHeader = ({activity, animalName, animalNumber}) =>
        <div className="AnnotationHeader">
            <ActivityHeader type = {activity}/>
            <AnimalHeader name = {animalName} number = {animalNumber}/>
        </div>


export default AnnotationHeader;
