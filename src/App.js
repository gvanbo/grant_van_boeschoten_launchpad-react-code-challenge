import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import Home from "./features/home/Home";
import NavBar from "./features/navbar/NavBar"
import University from "./features/university/University";
import PostalLookup from "./features/postalLookup/PostalLookup"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
    </div>
    );
}

export default App;
