//============== React import ==============//

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

//============== Axios ==============//

import axios from "axios";

//============== Material UI ==============//

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";

//============== Files and Folder import ==============//

import "./statesList.css";

//============== Code ==============//

function StatesList(props) {
  const [listOfStates, setListOfStates] = useState([]);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = React.useState(false); //initially set to false because the edit button hasn't been pushed
  const stateNameRef = useRef("");
  const [editStateValues, setEditStateValues] = React.useState([]);

  function handleOpenEditDialog(StateId, StateName) {
    //this function is called when user hits edit
    setEditStateValues([StateId, StateName]); //stores the id and the state name
    setOpenEditDialog(true); //this is true when user hits edit
  }

  function handleCloseEditDialog() {
    setOpenEditDialog(false); //this is false when user hits cancel
  }

  async function GetStatesList() {
    //this is reaching out to the API and passing in the API URL
    //The variable statePost is storing the info that comes back from the API URL
    let statePost = await axios.get(
      "https://us-states-adventures.onrender.com/home"
    );
    let statePostData = statePost.data;
    setListOfStates(statePostData);
  }

  async function deleteState(StatePostId) {
    let payload = { id: StatePostId }; //info being sent from client to API,  {"StateName": "Colorado"}

    await axios.post(
      "https://us-states-adventures.onrender.com/home/deleteState",
      payload
    );
    setIsUpdated(!isUpdated);
  }

  async function editState() {
    let payload = { id: editStateValues[0], title: stateNameRef.current.value }; //info being sent from client to API,  {"StateName": "Colorado"}
    console.log("payload in editState", payload);

    await axios.post(
      "https://us-states-adventures.onrender.com/home/editState",
      payload
    );
    setIsUpdated(!isUpdated);
  }

  //whenever antyhing changes in the
  useEffect(() => {
    GetStatesList();
  }, [props.needToUpdate, isUpdated]);

  return (
    <div>
      <Container maxwidth="lg">
        {/* EDIT DIALOG BOX STATE, from <Dialog> to </Dialog> ~ lines 114 to 194 */}

        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
          <DialogTitle>Edit State Name</DialogTitle>
          <DialogContent>
            <Grid item xl={15} sx={{ paddingRight: 5 }}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="State Name"
                type="text"
                fullWidth
                variant="outlined"
                inputRef={stateNameRef}
                defaultValue={editStateValues[1]}
              ></TextField>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog}>Cancel</Button>
            <Button
              onClick={() => {
                editState();
                handleCloseEditDialog();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* LISTED STATES, from <Grow in> to </Grow> ~ lines 198 to 320 */}

        <Grow in>
          <Container>
            <Grid
              //   direction="column-reverse"
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
{/* state is a variable we created. We could have named 'state' anything we wanted  */}
              {listOfStates.map((state) => (
                <Grid key={state._id} item xs={12} sm={7}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent className="ListColor">
                      {/* style={{ background: '#FFE9EC' }} */}
                      <Typography gutterBottom variant="h5" component="div">
                        {state.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => {
                          handleOpenEditDialog(state._id, state.title);
                        }}
                      >
                        EDIT
                      </Button>
{/* In useLocation, the location.state is taken from the state in the next line */}
                      <Link to="/adventures" state={state._id}

                        
                        style={{ textDecoration: "none" }}
                      >
                        <Button type="details" className="btn btn-primary">
                          DETAILS
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        onClick={() => {
                          deleteState(state._id);
                        }}
                      >
                        DELETE
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
  );
}
export default StatesList;
