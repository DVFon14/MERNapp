//this is the file where we are going to connect our react
//application to index.htlm file

//============== React import ==============//

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//============== Files and Folders imports ==============//

import App from "./App";

//============== Code ==============//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);