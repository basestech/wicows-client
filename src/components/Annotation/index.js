import React from "react";
import "./Annotation.css";

const Annotation = ({ label, onChange }) => {
    const changeHandler = e => {
        onChange(e.target.value);
    };
    return (
        <React.Fragment>
            {label ? <label className="Annotation">{label}</label> : null}
            <textarea className="Annotation" onChange={changeHandler} />
        </React.Fragment>
    );
};

export default Annotation;
