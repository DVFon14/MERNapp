//============== React import ==============//

import React from "react";
import { Route, Routes } from "react-router-dom";

//============== Files and Folders imports ==============//

import Login from "./login/login.js";
import States from "./home/states.js";
import Adventures from "./adventures/adventures";

//============== Code ==============//

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/states" element={<States />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
      <br />
    </div>
  );
}
export default App;
