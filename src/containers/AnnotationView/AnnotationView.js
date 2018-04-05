import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnnotationHeader from '../../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../../components/Annotation/Annotation';
import AnnotationSourceSelector from '../../components/AnnotationSourceSelector/AnnotationSourceSelector';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import {NEW_ACTIVITY} from '../../store/actions';

class AnnotationView extends Component{

    render(){
        const {activity, animal, conditions} = this.props

        return (
            <React.Fragment>
                <AnnotationHeader
                    activity = {activity}
                    animalName = {animal.name}
                    animalNumber = {animal.number}
                />
                <Annotation label="Notes"/>
                <AnnotationSourceSelector/>
                <SubmitButton label="Submit"/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        animal : state.animals.byId[props.animal_id],
        conditions : state.conditions
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        submit: (annotation, source) => {
            dispatch({
                type: NEW_ACTIVITY,
                activity: {
                    type: props.activity,
                    animal_id: props.animal_id,
                    annotation: annotation,
                    source: source
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationView);
