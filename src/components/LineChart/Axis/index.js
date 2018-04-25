import PropTypes from "prop-types";
import React from "react";

import './Axis.css';

const Axis = ({
    getSvgX,
    getSvgY,
    maxX,
    maxY,
    minX,
    minY
}) => {
    return (
        <g className="axis">
            <line
              x1={getSvgX(minX)} y1={getSvgY(minY)}
              x2={getSvgX(maxX)} y2={getSvgY(minY)} />
            <line
              x1={getSvgX(minX)} y1={getSvgY(minY)}
              x2={getSvgX(minX)} y2={getSvgY(maxY)} />
          </g>
    )
}

export default Axis;

