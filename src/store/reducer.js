import * as actionTypes from './actions';

const initialState = {
    animals: {
        ids : [1,2,3],
        byId:{
            1: {id: 1, name :'Sarıkız', number : 52},
            2: {id: 2, name :'Karakız', number : 53},
            3: {id: 3, name :'Alakız', number : 54}
        }
    },
    conditions : [
        
    ],
    actions : []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        
    }

}

export default reducer;