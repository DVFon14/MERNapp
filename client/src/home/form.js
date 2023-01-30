//============== React import ==============//

import React from "react";
import { Link } from "react-router-dom";

//============== Material UI ==============//

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import StatesList from "./statesList";

//============== Code ==============//

function Form() {
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
                <StatesList />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <form
                  //   autoComplete="off"
                  //   noValidate
                  //   className={`${classes.root} ${classes.form}`}
                  //   onSubmit={handleSubmit}
                  >
                    <Typography variant="h6"> Add a New State</Typography>
                    <TextField
                      name="State name"
                      variant="outlined"
                      label="State name"
                      fullWidth
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      fullWidth
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      fullWidth
                    >
                      Clear
                    </Button>
                  </form>
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