import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import University from "./features/university/University";
import PostalLookup from "./features/postalLookup/PostalLookup";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/university" element={<University />} />
          <Route path="/postal-lookup" element={<PostalLookup />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
