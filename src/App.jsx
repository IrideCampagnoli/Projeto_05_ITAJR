import React from "react";
import './App.css';

import { BrowserRouter } from "react-router-dom";

import NavBar from "./Components/NavBar"; 
import Content from "./Components/Content/Content";

export default () => 
  <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Content/>
    </BrowserRouter>
  </div>