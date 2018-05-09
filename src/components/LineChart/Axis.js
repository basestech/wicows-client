import PropTypes from "prop-types";
import React from "react";

const Axis = ({maxX, maxY, minX, minY }) => {
    return (
        <g className="axis">
            <line
                x1={minX}
                y1={maxY}
                x2={maxX}
                y2={maxY}
            />
            <line
                x1={minX}
                y1={minY}
                x2={minX}
                y2={maxY}
            />
        </g>
    );
};

export default Axis;
