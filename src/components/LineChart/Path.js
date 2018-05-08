import React from "react";

const Path = ({ data, color, getSvgX, getSvgY, maxX, maxY, minX, minY }) => {
    let pathD = "M " + getSvgX(minX) + " " + getSvgY(minY) + " ";

    pathD += data.map((point, i) => {
        return "L " + getSvgX(point.x) + " " + getSvgY(point.y) + " ";
    });

    return <path className="path" d={pathD} style={{ stroke: color }} />;
};

export default Path;
