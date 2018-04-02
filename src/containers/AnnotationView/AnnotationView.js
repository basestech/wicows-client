import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnnotationHeader from '../../components/AnnotationHeader/AnnotationHeader';
import Annotation from '../../components/Annotation/Annotation';
import AnnotationSourceSelector from '../../components/AnnotationSourceSelector/AnnotationSourceSelector'

class AnnotationView extends Component{
    state = {

    }

    render(){
        return (
            <React.Fragment>
                <AnnotationHeader 
                    actionType = 'insemination' 
                    animalName = 'Sarıkız' 
                    animalNumber = '52'
                />
                <Annotation label = 'Test Annotation'/>
                <AnnotationSourceSelector />
                <AnnotationSourceSelector options={
                    [
                        {value : 'value', changed: '', text: 'Annotation 1'}
                    ]
                }/>
                <SubmitButton/>
            </React.Fragment>
        );
    }
}


const mapStateToProps= state =>{
    return {

    };
}

const mapDispatchToProps = dispatch =>{
    return {
    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationView);