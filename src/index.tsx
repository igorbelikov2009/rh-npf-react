import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/reset.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";

// создаём пропс {store} для store={store}
const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
