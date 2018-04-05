import React from 'react';
import Selector from './Selector/Selector';

const AnnotationSourceSelector = () => {
    const options = [
        { id: "data", text: "Data evaluation" },
        { id: "exam", text: "Examination"}
    ]
    return <Selector id="source" label="Source" options={options}/>
}

export default AnnotationSourceSelector;
