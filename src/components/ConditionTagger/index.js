import React from "react";

import conditions from "../../constants/conditions";
import Tagger from "../Tagger";

import "./ConditionTagger.css";

const ConditionTagger = props => {
    return (
        <ul className="tagger condition">
            {Tagger({ ...props, tags: conditions }).map(tag => (
                <li key={tag.key}>{tag}</li>
            ))}
        </ul>
    );
};

export default ConditionTagger;
