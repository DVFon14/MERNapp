//============== React ==============//

import React, { useEffect, useRef, useState } from "react";

//============== Material UI ==============//

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

//============== Files and Folders ==============//

import './adventuresList.css'

//============== Code ==============//

function AdventuresList(props) {
  const [listOfAdventures, setListOfAdventures] = useState([]);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false); //initially set to false because the edit button hasn't been pushed
  const dateEditRef = useRef("");
  const detailsEditRef = useRef("");
  const coPeopleEditRef = useRef("");
  const cityEditRef = useRef("");
  const notesEditRef = useRef("");
  const [editValues, setEditValues] = React.useState([]);

  async function GetAdventuresList() {
    let payload = { id: props.StateID };
    console.log("payload in GetAdventuresList: ", payload);

    //this is reaching out to the API and passing in the API URL
    //The variable statePost is storing the info that comes back from the API URL
    let adventuresPost = await axios.post(
      "http://localhost:3000/home/getAdventures",
      payload
    );
    let adventuresPostData = adventuresPost.data;
    console.log(
      "adventuresPostData in GetAdventuresList: ",
      adventuresPostData
    );

    setListOfAdventures(adventuresPostData);
  }

  async function deleteAdventure(AdventurePostId) {
    let payload = { id: AdventurePostId }; //info being sent from client to API,  {"StateName": "Colorado"}

    await axios.post("http://localhost:3000/home/deleteAdventures", payload);
    setIsUpdated(!isUpdated);
  }

  async function editAdventures() { //info being sent from client to API
    let payload = {
      id: editValues[5],
      date: dateEditRef.current.value,
      details: detailsEditRef.current.value,
      co_adventurers: coPeopleEditRef.current.value,
      city: cityEditRef.current.value,
      notes: notesEditRef.current.value,
      linkedStateID: props.StateID,
    }; 

    await axios.post("http://localhost:3000/home/editAdventures", payload);
    setIsUpdated(!isUpdated);
  }

  function handleOpenEditDialog(date, details, co, city, notes, id) {
    //this function is called when user hits edit
    setEditValues([date, details, co, city, notes, id]); //stores the id and the state name
    setOpenEditDialog(true); //this is true when user hits edit
  }

  function handleCloseEditDialog() {
    setOpenEditDialog(false); //this is false when user hits cancel
  }

  useEffect(() => {
    GetAdventuresList();
    // eslint-disable-next-line
  }, [props.needToUpdate, isUpdated]);

  return (
    <div>
      <br />
      <div>
        <Container maxwidth="lg">

          {/* EDIT DIALOG BOX ADVENTURES */}
          <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
            <DialogTitle>Edit State Name</DialogTitle>
            <DialogContent >
              <Grid item xl={15} sx={{ paddingRight: 5 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Date"
                  type="text"
                  fullWidth
                  variant="outlined"
                  inputRef={dateEditRef}
                  defaultValue={editValues[0]}
                ></TextField>
              </Grid>
              <Grid item xl={15} sx={{ paddingRight: 5 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Adventure details"
                  type="text"
                  fullWidth
                  variant="outlined"
                  inputRef={detailsEditRef}
                  defaultValue={editValues[1]}
                ></TextField>
              </Grid>
              <Grid item xl={15} sx={{ paddingRight: 5 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Co-Adventurers"
                  type="text"
                  fullWidth
                  variant="outlined"
                  inputRef={coPeopleEditRef}
                  defaultValue={editValues[2]}
                ></TextField>
              </Grid>
              <Grid item xl={15} sx={{ paddingRight: 5 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="City"
                  type="text"
                  fullWidth
                  variant="outlined"
                  inputRef={cityEditRef}
                  defaultValue={editValues[3]}
                ></TextField>
              </Grid>
              <Grid item xl={15} sx={{ paddingRight: 5 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Notes"
                  type="text"
                  fullWidth
                  variant="outlined"
                  inputRef={notesEditRef}
                  defaultValue={editValues[4]}
                ></TextField>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditDialog}>Cancel</Button>
              <Button
                onClick={() => {
                  editAdventures();
                  handleCloseEditDialog();
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>

          {/* LISTED ADVENTURES */}

          <Grow in>
            <Container>
              <Grid
                //direction="column-reverse"
                container
                justify="space-between"
                alignItems="stretch"
                spacing={1}
              >
                {listOfAdventures.map((adventure) => (
                  <Grid key={adventure._id} item xs={12} sm={7}>
                    <Card sx={{ maxWidth: 545 }}>
                      <CardContent className="AdventureListColor" >
                        <Typography gutterBottom variant="h7" component="div">
                          Date: <br /> {adventure.date} <br />
                          <br />Details: <br /> {adventure.details} <br />
                          <br />Co-Adventurers: <br /> {adventure.co_adventurers} <br />
                          <br />City: <br /> {adventure.city} <br />
                          <br />Notes: <br /> {adventure.notes} <br />

                        </Typography>
                      





                        
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => {
                            handleOpenEditDialog(
                              adventure.date,
                              adventure.details,
                              adventure.co_adventurers,
                              adventure.city,
                              adventure.notes,
                              adventure._id
                            );
                          }}
                        >
                          Edit
                        </Button>

                        <Button
                          size="small"
                          onClick={() => {
                            deleteAdventure(adventure._id);
                          }}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    </div>
  );
}

export default AdventuresList;
