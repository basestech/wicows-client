import React from 'react';
import Selector from '../Selector';

const AnnotationSourceSelector = ({onChange}) => {
    const options = [
        { id: "data", text: "Data evaluation" },
        { id: "exam", text: "Examination"}
    ]
    return <Selector id="source" label="Source" options={options} onChange={onChange}/>
}

export default AnnotationSourceSelector;
