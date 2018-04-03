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
        {id : 1, name : 'Hastalık'}
    ],
    actions : {
        1: {animal_id :2, annotation_label: 'Annotation about Animal given', type : 'insemination' , conditions: [1]}
    }
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        
    }
    return state;
}

export default reducer;