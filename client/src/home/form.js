//============== React import ==============//

// eslint-disable-next-line
import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

//============== Material UI ==============//

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import StatesList from "./statesList";

//============== Code ==============//

function Form() {
  // State input text value, used in line 72
  const stateNameRef = useRef("");
  const [isUpdated, setIsUpdated] = React.useState(false);

  async function postNewState() {
    let payload = { title: stateNameRef.current.value }; //info being sent from client to API,  {"StateName": "Colorado"}
    // eslint-disable-next-line
    let status = await axios.post(
      "http://localhost:3000/home/newState",
      payload
    ); //sending the information in payload variable to the designated path

    setIsUpdated(!isUpdated);

    // if (isUpdated === false){
    //   setIsUpdated(true)
    // }
    // if (isUpdated === true){
    //   setIsUpdated(false)
    // }
  }

  return (
    <div>
      <Container maxwidth="lg">
        <Grow in>
          <Container>
            <Grid
              //direction="column-reverse"
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <StatesList needToUpdate={isUpdated} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <Typography variant="h6"> Add a New State</Typography>
                  <TextField
                    name="State name"
                    variant="outlined"
                    label="State name"
                    fullWidth
                    inputRef={stateNameRef} //whatever the input is in the form, assign it to stateNameRef
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="text"
                    fullWidth
                    onClick={() => {
                      postNewState();
                    }}
                    // disabled={isDisabled}
                    // disabled = {(stateNameRef.current.value == '' ? true : false )}
                  >
                    Submit
                  </Button>
                  {/* <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      fullWidth
                    >
                      Clear
                    </Button> */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default Form;
