import React from 'react';

const actionTypeNames = { // TODO: i18n later
    noresponse: "Unable to respond",
    falsealarm: "False alarm",
    insemination: "Insemination complete"
}

const ActionHeader = ({type}) => {
    return <h6 className={`action ${type}`}>{actionTypeNames[type]}</h6>
}

export default ActionHeader;
