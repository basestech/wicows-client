import { store } from '../index'
import * as WEB from '../constants/webStatus'
import { NEW_ACTIVITY_SUCCESS, NEW_ACTIVITY_FAILURE } from '../store/actions'

function new_activity_slinger() {
    const status = store.getState().new_activity.status;
    if (status === WEB.REQUEST) {
        new Promise(function(resolve, reject) {
            setTimeout(resolve, 1500, 'foo');
        }).then(()=>{
            store.dispatch({ type: NEW_ACTIVITY_SUCCESS });
        }).catch((err)=>{
            store.dispatch({ type: NEW_ACTIVITY_FAILURE, error: err });
        });
    }
}

export default new_activity_slinger
