import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";
import new_activity_slinger from "./webslingers/new_activity";

import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

store.subscribe(new_activity_slinger);

export { store };
