import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CustomRouter} from "./reducers/CustomRouter";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import history from "./history";

const root = createRoot(document.querySelector("#root"))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

root.render(
    <Provider store={store}>
        <CustomRouter history={history}>
            <App/>
        </CustomRouter>
    </Provider>
)