//============== React import ==============//

import React from "react";
import { Route, Routes } from "react-router-dom";

//============== Files and Folders imports ==============//

import Login from "./login/login.js";
import States from "./states.js";

//============== Code ==============//

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/states" element={<States />} />
      </Routes>
    </div>
  );
}
export default App;
