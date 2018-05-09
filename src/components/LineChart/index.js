import React, { Component } from "react";
import PropTypes from "prop-types";

import Axis from "./Axis";
import Path from "./Path";
import Labels from "./Labels";
import data from "../../constants/data";

import "./LineChart.css";

class LineChart extends Component {
    // GET MAX & MIN X
    getMinX = () => {
        const { data } = this.props;
        return data[0].x;
    };
    getMaxX = () => {
        const { data } = this.props;
        return data[data.length - 1].x;
    };
    // GET MAX & MIN Y
    getMinY = () => {
        const { data } = this.props;
        //return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
        return 0;
    };
    getMaxY = () => {
        const { data } = this.props;
        return data.reduce((max, p) => (p.y > max ? p.y : max), data[0].y);
    };

    getSvgX = x => {
        const { svgWidth } = this.props;
        //return x / this.getMaxX() * svgWidth;
        return x;
    };
    getSvgY = y => {
        const { svgHeight } = this.props;
        // return svgHeight - y / this.getMaxY() * svgHeight;
        return y;
    };

    render() {
        const { svgHeight, svgWidth } = this.props;

        const commonProps = {
            getSvgX: this.getSvgX.bind(this),
            getSvgY: this.getSvgY.bind(this),
            maxX: this.getMaxX(),
            maxY: this.getMaxY(),
            minX: this.getMinX(),
            minY: this.getMinY()
        };
        return (
            <div className="line-chart">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" height="100%"
                    preserveAspectRatio="xMinYMin slice"
                    version="1.1">
                    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                        <Path {...commonProps} {...this.props} />
                        <Axis {...commonProps} />
                        <Labels {...this.props} {...commonProps} />
                    </svg>
                </svg>
            </div>
        );
    }
}
LineChart.defaultProps = {
    data: [],
    color: "#2196F3",
    svgHeight: 300,
    svgWidth: 900
};
export default LineChart;
