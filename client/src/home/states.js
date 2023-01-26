//============== React import ==============//
import * as React from 'react';
import { Link } from "react-router-dom";

//============== Files and Folders imports ==============//
import Banner from "./banner";
import Form from "./form"

//============== Material UI ==============//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//============== Code ==============//
function States() {
  return (
    <div>
      <Banner />
      <br/>
      <Form />

    </div>
  );
}

export default States;
