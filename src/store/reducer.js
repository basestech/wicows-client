import * as actionTypes from './actions';

const initialState = {
    animals: {
        ids : [1,2,3],
        byId:{
            1: {name :'Sarıkız', number : 52},
            2: {name :'Karakız', number : 53},
            3: {name :'Alakız', number : 54}
        }
    },
    conditions : [
        {id : 1, name : 'Disease'},
        {id : 2, name : 'False Alarm'}
    ],
    activities : {
        ids: [1],
        byId: {
            1: {id: 1, animal_id :1, annotation: 'Annotation about Animal given', source: 'exam', activity: 'insemination' , conditions: [1]}
        }
    }
}

function nextID(ids) {
    return ids.reduce(Math.max,0) + 1
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.NEW_ACTIVITY:
            const newId = nextID(state.activities.ids)
            const newIds = [...state.activities.ids, newId];
            const newById = {...state.activities.byId, [newId]: {...action.activity, id: newId } }
            return {...state, activities: { ids: newIds, byId: newById }}
            break;
        case "CONSOLE_LOG":
            return { ...state, lastLog: action.time }
    }
    return state;
}

export default reducer;
