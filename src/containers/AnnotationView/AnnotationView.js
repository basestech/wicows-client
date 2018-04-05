import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnnotationHeader from '../../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../../components/Annotation/Annotation';
import AnnotationSourceSelector from '../../components/AnnotationSourceSelector/AnnotationSourceSelector'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

class AnnotationView extends Component{

    render(){
        const {action, animal, conditions} = this.props

        return (
            <React.Fragment>
                <AnnotationHeader
                    actionType = {action}
                    animalName = {animal.name}
                    animalNumber = {animal.number}
                />
                <Annotation label = "Notes"/>
                <AnnotationSourceSelector/>
                <SubmitButton/>
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

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps)(AnnotationView);
