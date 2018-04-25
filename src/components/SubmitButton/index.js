import React from "react";
import PropTypes from "prop-types";
import "./SubmitButton.css";

const SubmitButton = ({ onClick, label }) => {
    return <button className="submit" onClick={onClick}>{`${label}`}</button>;
};

SubmitButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string
};

SubmitButton.defaultProps = {
    label: "Submit"
};

export default SubmitButton;
