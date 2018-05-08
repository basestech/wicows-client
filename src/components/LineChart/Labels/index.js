import PropTypes from "prop-types";
import React from "react";

import './Labels.css';

const Labels = ({
    color,
    getSvgX,
    getSvgY,
    maxX,
    maxY,
    minX,
    minY,
    labelsVisible,
    labelsStepX,
    labelsColor,
    labelsHeightX,
    labelsOffsetX,
    labelsOffsetY,
    labelsFormatX,
    labelsFormatY,
    labelsCountY
}) => {
    if (labelsVisible) {
        let xLabels
        let yLabels
    
        const xLabelsRange = []
        const xStep = labelsStepX > 0 ? labelsStepX : 1
    
        for (let i = Math.floor(minX); i <= Math.ceil(maxX); i += xStep) {
          xLabelsRange.push(i)
        }
    
        xLabels = xLabelsRange.map(x => (
          <g className='label' key={x} color={labelsColor}>
            <circle r="2" cx={getSvgX(x)} cy={getSvgY(0)} />
            <text
              x={getSvgX(x)}
              y={getSvgY(0) + labelsHeightX}
              transform={`translate(0, ${labelsOffsetX})`}
              textAnchor="middle"
            >
              {labelsFormatX(x)}
            </text>
          </g>
        ))
    
        const yLabelsRange = []
        const yStep = labelsCountY > 0 ? labelsCountY : 1
    
        for (let i = 0; i <= maxY; i += Math.floor(maxY / yStep)) {
          yLabelsRange.push(i)
        }
    
        yLabels = yLabelsRange.map(y => (
          <g className='label' key={y} color={labelsColor}>
            <circle r="2" cx={getSvgX(minX)} cy={getSvgY(y)} />
            <text
              x={getSvgX(minX)}
              y={getSvgY(y) + labelsHeightX / 2}
              transform={`translate(-${labelsOffsetY}, 0)`}
              textAnchor="end"
            >
              {labelsFormatY(y)}
            </text>
          </g>
        ))
    
        return (
          <g>
            {xLabels && <g>{xLabels}</g>}
            {yLabels && <g>{yLabels}</g>}
          </g>
        )
      } else {
        return null
      }
}

Labels.defaultProps = {
    getX: x => x,
    getY: y => y,
    labelsCharacterWidth: 10,
    labelsColor: "#bdc3c7",
    labelsCountY: 5,
    labelsFormatX: x => x,
    labelsFormatY: y => y,
    labelsHeightX: 12,
    labelsOffsetX: 15,
    labelsOffsetY: 15,
    labelsStepX: 2,
    labelsVisible: true,
}

export default Labels;