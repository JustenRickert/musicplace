import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { routeReducer } from "./Router";

const reducer = combineReducers({ router: routeReducer });
export type StoreType = ReturnType<typeof reducer>;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
