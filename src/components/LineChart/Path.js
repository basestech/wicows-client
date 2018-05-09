import React from "react";

const Path = ({ data, color, maxX, maxY, minX, minY }) => {
    let pathD = "M " + minX + " " + minY + " ";

    pathD += data.map((point, i) => {
        return "L " + point.x + " " + point.y + " ";
    });

    return <path className="path" d={pathD} style={{ stroke: color , 'strokeWidth' : '.05em'}} />;
};

export default Path;
