import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({id, label, options, onChange})=>{
    const changeHandler = (e) => {
        onChange(e.target.value);
    }
    return <React.Fragment>
        <label htmlFor={id}>{label} </label>
        <select onChange={changeHandler}>
            { options.map( (val) => <option key={val.id} value={val.id} >{val.text}</option> ) }
        </select>
    </React.Fragment>
}

Selector.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onChange: PropTypes.func
}

export default Selector;
