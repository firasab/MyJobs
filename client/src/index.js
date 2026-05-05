import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
render();
serviceWorker.unregister();
