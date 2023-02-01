//============== React import ==============//
// import axios from "axios";
import React from "react";

//============== Files and Folders imports ==============//
import Banner from "./banner";
import Form from "./form";

//============== Code ==============//
function States() {


  return (
    <div >
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
