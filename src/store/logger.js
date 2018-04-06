import {store} from '../index'

function logger() {
    const state = store.getState()

    if (state.lastLog < Date.now - 100 || !state.lastLog) {
        store.dispatch({
            type: "CONSOLE_LOG",
            time: Date.now()
        });
    }

    console.log(state);

}

export default logger;
