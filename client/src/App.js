import React from "react";
import Banner from "./banner.js";
import Login from "./login/login.js";
import { Route, Routes } from "react-router-dom";
import States from "./states.js";

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
