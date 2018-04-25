import React from "react";
import PropTypes from "prop-types";

const Tagger = ({ onChange, tags, selected = [] }) => {
    return tags.map(val => {
        const changeHandler = e => {
            onChange(val.id);
        };
        return (
            <React.Fragment key={val.id}>
                <input
                    id={val.id}
                    type="checkbox"
                    onChange={changeHandler}
                    defaultChecked={
                        selected.includes(val.id) ? "checked" : null
                    }
                />
                <label htmlFor={val.id}>{val.name}</label>
            </React.Fragment>
        );
    });
};

Tagger.propTypes = {
    onChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    selected: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Tagger;
