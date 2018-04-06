import  React  from 'react';

import conditions from '../../constants/conditions';
import Tagger from '../Tagger/Tagger';

const ConditionTagger = (props) => {
    return <Tagger tags={conditions} {...props}/>
}

export default ConditionTagger;