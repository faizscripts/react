import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/App";
import reducers from "./reducers";

const root = createRoot(document.querySelector("#root"))
const store = createStore(reducers)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)