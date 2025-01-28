import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./Redux/Store.js";
const store = createStore(rootReducer, applyMiddleware(thunk));
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
