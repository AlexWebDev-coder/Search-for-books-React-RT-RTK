import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLayout from "./layout";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AppLayout>
        <App />
      </AppLayout>
    </Router>
  </React.StrictMode>
);
