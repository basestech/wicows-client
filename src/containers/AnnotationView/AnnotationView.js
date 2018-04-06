import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnnotationHeader from '../../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../../components/Annotation/Annotation';
import AnnotationSourceSelector from '../../components/AnnotationSourceSelector/AnnotationSourceSelector';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

import {NEW_ACTIVITY_INIT, NEW_ACTIVITY_CHANGE, NEW_ACTIVITY_SEND} from '../../store/actions';

class AnnotationView extends Component {

    componentDidMount = () => {
        this.props.init();
    }

    render(){
        const {
            activity,
            animal,
            submit,
            change_source,
            change_annotation
        } = this.props

        return (
            <React.Fragment>
                <AnnotationHeader
                    activity = {activity}
                    animalName = {animal.name}
                    animalNumber = {animal.number}
                />
                <Annotation label="Notes" onChange={change_annotation}/>
                <AnnotationSourceSelector onChange={change_source}/>
                <SubmitButton label="Submit" onClick={submit}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        animal : state.animals.byId[props.animal_id]
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        init: () => {
            dispatch({
                type: NEW_ACTIVITY_INIT,
                activity: {
                    type: props.activity,
                    animal_id: props.animal_id,
                    annotation: "",
                    source: "data"
                }
            });
        },
        submit: () => {
            dispatch({
                type: NEW_ACTIVITY_SEND
            });
        },
        change_annotation: (annotation) => {
            dispatch({
                type: NEW_ACTIVITY_CHANGE,
                activity: { annotation }
            });
        },
        change_source: (source) => {
            dispatch({
                type: NEW_ACTIVITY_CHANGE,
                activity: { source }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationView);
