import * as at from './actions';
import * as WEB from '../constants/webStatus'

const initialState = {
    animals: {
        ids : [1,2,3],
        byId:{
            1: {name :'Sarıkız', number : 52},
            2: {name :'Karakız', number : 53},
            3: {name :'Alakız', number : 54}
        }
    }
}

function nextID(ids) {
    return ids.reduce(Math.max,0) + 1
}

const blankActivity = {
    type: null,
    animal_id: null,
    annotation: "",
    source: "data",
    conditions: [],
    status: WEB.NONE
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "@@INIT":
            return state;
        case "CONSOLE_LOG":
            return { ...state, lastLog: action.time }

        case at.NEW_ACTIVITY_INIT:
            return {...state, new_activity: { ...blankActivity, ...action.activity, status: WEB.NONE } };
        case at.NEW_ACTIVITY_CHANGE:
            if (state.new_activity.status !== WEB.NONE) { return state }
            return {...state, new_activity: { ...state.new_activity, ...action.activity } };
        case at.NEW_ACTIVITY_TOGGLE_CONDITION:
            if (state.new_activity.status !== WEB.NONE) { return state }
            const conditions = state.new_activity.conditions;
            if (conditions.includes(action.toggle)) {
                return { ...state, new_activity: { ...state.new_activity, conditions: conditions.filter(c => c !== action.toggle) }};
            } else {
                return { ...state, new_activity: { ...state.new_activity, conditions: [ ...conditions, action.toggle ] } };
            }
        case at.NEW_ACTIVITY_SEND:
            return {...state, new_activity: { ...state.new_activity, status: WEB.REQUEST } };
        case at.NEW_ACTIVITY_SUCCESS:
            return {...state, new_activity: { ...state.new_activity, status: WEB.SUCCESS } };
        case at.NEW_ACTIVITY_FAILURE:
            return {...state, new_activity: { ...state.new_activity, status: WEB.FAILURE, error: action.error } };
    }
    const e = new Error(`No such action: ${action.type}`)
    console.error(e);
    throw e;
}

export default reducer;
