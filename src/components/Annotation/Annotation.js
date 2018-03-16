import React from 'react';
import './Annotation.css';

const Annotation = ({label}) => {
    return <React.Fragment>
        { label ? <label className="Annotation">{label}</label> : null}
        <textarea className="Annotation"></textarea>
    </React.Fragment>
}

export default Annotation;
