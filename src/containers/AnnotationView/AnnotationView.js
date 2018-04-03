import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnnotationHeader from '../../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../../components/Annotation/Annotation';
import AnnotationSourceSelector from '../../components/AnnotationSourceSelector/AnnotationSourceSelector'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

class AnnotationView extends Component{
    state = {
        action_id : null
    }

    componentWillMount(){
        //this.state = {...this.state, action_id :1};
        this.setState({action_id :1});
    }

    render(){
        let annotationView= <p>No Action</p>;

        if(this.props._actions[this.state.action_id]){
            let action = this.props._actions[this.state.action_id];
            console.log(action);

            annotationView = (
                <React.Fragment>
                    <AnnotationHeader 
                        actionType = {action.type}
                        animalName = {this.props._animals.byId[action.animal_id].name} 
                        animalNumber = {this.props._animals.byId[action.animal_id].number}
                    />
                    <Annotation label = {action.annotation_label}/>
                    {/* <AnnotationSourceSelector options={
                        [{value : 'value', changed: '', text: 'Annotation 1'}]
                    }/> */}
                    <SubmitButton/>
                </React.Fragment>
            )

        }


        return (
            <React.Fragment>
                {annotationView}
            </React.Fragment>
        );
    }
}

const mapStateToProps= state =>{
    return {
        _animals : state.animals,
        _conditions : state.conditions,
        _actions : state.actions
    };
}

const mapDispatchToProps = dispatch =>{
    return {
    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationView);