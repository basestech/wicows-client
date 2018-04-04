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
        let options = [];

        if(this.props._actions[this.state.action_id]){
            let action = this.props._actions[this.state.action_id];
            console.log(action);
            this.props._conditions.map(val =>{
                    options.push({id : val.id, value: val.id, changed: '', text: val.name});
            });
            
            console.log(options);

            annotationView = (
                <React.Fragment>
                    <AnnotationHeader 
                        actionType = {action.type}
                        animalName = {this.props._animals.byId[action.animal_id].name} 
                        animalNumber = {this.props._animals.byId[action.animal_id].number}
                    />
                    <Annotation label = {action.annotation_label}/>
                    <AnnotationSourceSelector options={options}/>
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