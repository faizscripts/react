import React from "react";
import {createRoot} from "react-dom/client";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";
import {CustomRouter} from "./CustomRouter";
import history from "./history";

const container = document.querySelector("#root")
const root = createRoot(container)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

root.render(
    <Provider store={store}>
        <CustomRouter history={history}>
            <App />
        </CustomRouter>
    </Provider>
    )