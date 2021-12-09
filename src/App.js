import React from "react";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import Home from "./features/home/Home";
import NavBar from "./features/navbar/NavBar"
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="App">
      <NavBar />
        <Home />
      <Outlet />
    </div>
    );
}

export default App;
