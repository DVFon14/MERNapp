//============== React import ==============//
import axios from "axios";
import * as React from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";

//============== Files and Folders imports ==============//
import Banner from "./banner";
import Form from "./form";
import StatesList from "./statesList";

//============== Material UI ==============//
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import  Container  from "@mui/material/Container";

//============== Code ==============//
function States() {
  // async function retrieveStatePost(){ //defining function
  //   //this is reaching out to the API and passing in the API URL
  //   //The variable statePost is storing the info that comes back from the API URL
  //   let statePost = await axios.get("http://localhost:3000/home")
  //   console.log(statePost)
  //   let statePostData= statePost.data
  //   console.log("statePost data is: ", statePostData)
  // }

  // useEffect(() => {
  //   retrieveStatePost()
  // }, []);

  return (
    <div>
      <Banner />
      <br />
      <Form />
      <br />

      {/* <Container>
      <Grid container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            display= "flex"
            flexDirection= "row"
            justifyContent= "space-evenly"

            >
        <Grid item xs={12} sm={4}>
          <StatesList />
        </Grid>
        <br />
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
      </Container> */}
    </div>
  );
}

export default States;
