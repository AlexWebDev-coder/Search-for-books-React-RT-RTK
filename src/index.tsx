import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLayout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppLayout>
      <Router>
        <App />
      </Router>
    </AppLayout>
  </Provider>
);
