import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import  Router  from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);