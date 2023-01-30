//============== React import ==============//

import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

//============== Files and Folders imports ==============//

import Login from "./login/login.js";
import States from "./home/states.js";
// import Form from "./home/form.js";
import Adventures from "./adventures/adventures";

//============== Material UI ==============//
// import Container from "@mui/material/Container";
// import Grow from "@mui/material/Grow";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

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
