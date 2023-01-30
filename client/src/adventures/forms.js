import React, { useEffect, useRef, useState } from "react";

//============== Material UI ==============//

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import axios from "axios";

//============== File imports ==============//

import AdventuresList from "./adventuresList.js";

//============== Code ==============//

function Form(props) {
  const dateRef = useRef("");
  const detailsRef = useRef("");
  const coPeopleRef = useRef("");
  const cityRef = useRef("");
  const notesRef = useRef("");
  const [listOfAdventures, setListOfAdventures] = useState([]);
  const [isUpdated, setIsUpdated] = React.useState(false);

  async function postNewAdventure() {
    let payload = {
      date: dateRef.current.value,
      details: detailsRef.current.value,
      co_adventurers: coPeopleRef.current.value,
      city: cityRef.current.value,
      notes: notesRef.current.value,
      linkedStateID: props.StateID,
    }; //info being sent from client to API

    console.log("payload in postNewAdventure is: ", payload);

    await axios.post("http://localhost:3000/home/newAdventure", payload);
    setIsUpdated(!isUpdated);
  }

  async function GetAdventuresList() {
    let payload = { id: props.StateID };

    //this is reaching out to the API and passing in the API URL
    //The variable statePost is storing the info that comes back from the API URL
    let adventuresPost = await axios.post(
      "http://localhost:3000/home/getAdventures",
      payload
    );
    let adventuresPostData = adventuresPost.data;

    setListOfAdventures(adventuresPostData);
  }

  useEffect(() => {
    GetAdventuresList();
    // eslint-disable-next-line
  }, [isUpdated]);

  return (
    <div>
      <br />
      <div>
        {/* ADD NEW ADVENTURES CREATE FORM*/}
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
                  <AdventuresList
                    StateID={props.StateID}
                    needToUpdate={isUpdated}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Paper>
                    <Typography variant="h6">
                      Details of Your Adventure
                    </Typography>
                    <TextField
                      name="Date"
                      variant="outlined"
                      label="Date"
                      fullWidth
                      inputRef={dateRef}
                    />

                    <TextField
                      name="Adventure details"
                      variant="outlined"
                      label="Adventure details"
                      fullWidth
                      inputRef={detailsRef}
                    />

                    <TextField
                      name="Co-Adventurers"
                      variant="outlined"
                      label="Co-Adventurers"
                      fullWidth
                      inputRef={coPeopleRef}
                    />

                    <TextField
                      name="City"
                      variant="outlined"
                      label="City"
                      fullWidth
                      inputRef={cityRef}
                    />

                    <TextField
                      name="Notes"
                      variant="outlined"
                      label="Notes"
                      fullWidth
                      inputRef={notesRef}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      fullWidth
                      onClick={() => {
                        postNewAdventure();
                      }}
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
    </div>
  );
}

export default Form;
