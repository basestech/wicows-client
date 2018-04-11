import React from "react";

const activityTypeNames = {
    // TODO: i18n later
    noresponse: "Unable to respond",
    falsealarm: "False alarm",
    insemination: "Insemination complete"
};

const ActivityHeader = ({ type }) => {
    return <h6 className={`activity ${type}`}>{activityTypeNames[type]}</h6>;
};

export default ActivityHeader;
