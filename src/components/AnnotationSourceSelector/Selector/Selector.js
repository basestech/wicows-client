import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({id, label, options, onChange})=>{
    return <React.Fragment>
        <label htmlFor={id}>{label} </label>
        <select onChange={onChange}>
            { options.map( (val) => <option key={val.id} value={val.id} >{val.text}</option> ) }
        </select>
    </React.Fragment>
}

Selector.PropTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onChange: PropTypes.func
}

export default Selector;
