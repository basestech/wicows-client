import React, { Component } from "react";
import { connect } from "react-redux";

import AnnotationHeader from "../../components/AnnotationHeader";
import Annotation from "../../components/Annotation";
import AnnotationSourceSelector from "../../components/AnnotationSourceSelector";
import SubmitButton from "../../components/SubmitButton";
import ConditionTagger from "../../components/ConditionTagger";

import {
    NEW_ACTIVITY_INIT,
    NEW_ACTIVITY_CHANGE,
    NEW_ACTIVITY_SEND,
    NEW_ACTIVITY_TOGGLE_CONDITION
} from "../../store/actions";

class AnnotationView extends Component {
    componentDidMount = () => {
        this.props.init();
    };

    render() {
        const {
            activity,
            animal,
            submit,
            change_source,
            change_annotation,
            toggle_condition
        } = this.props;

        return (
            <React.Fragment>
                <AnnotationHeader
                    activity={activity}
                    animalName={animal.name}
                    animalNumber={animal.number}
                />
                <ConditionTagger onChange={toggle_condition} />
                <Annotation label="Notes" onChange={change_annotation} />
                <AnnotationSourceSelector onChange={change_source} />
                <SubmitButton label="Submit" onClick={submit} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        animal: state.animals.byId[props.animal_id]
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        init: () => {
            dispatch({
                type: NEW_ACTIVITY_INIT,
                activity: {
                    type: props.activity,
                    animal_id: props.animal_id
                }
            });
        },
        submit: () => {
            dispatch({
                type: NEW_ACTIVITY_SEND
            });
        },
        change_annotation: annotation => {
            dispatch({
                type: NEW_ACTIVITY_CHANGE,
                activity: { annotation }
            });
        },
        change_source: source => {
            dispatch({
                type: NEW_ACTIVITY_CHANGE,
                activity: { source }
            });
        },
        toggle_condition: condition => {
            dispatch({
                type: NEW_ACTIVITY_TOGGLE_CONDITION,
                toggle: condition
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationView);
