//============== React import ==============//

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//============== Material UI ==============//

// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import axios from "axios";

//============== Code ==============//

function StatesList(props) {

const [listOfStates, setListOfStates] = useState([]);

  async function GetStatesList() {
    //this is reaching out to the API and passing in the API URL
    //The variable statePost is storing the info that comes back from the API URL
    let statePost = await axios.get("http://localhost:3000/home");
    // console.log(statePost);
    let statePostData = statePost.data;
    // console.log("statePost data is: ", statePostData);
    setListOfStates(statePostData)
  }

  //whenever antyhing changes in the 
  useEffect(() => {
    GetStatesList();
    // console.log("props.needToUpdate is: ", props.needToUpdate);

  }, [props.needToUpdate]);

  return (
    <div>
      <Container maxwidth="lg">
        <Grow in>
          <Container>
            <Grid
              //   direction="column-reverse"
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              {listOfStates.map((state) =>(
              <Grid key={state._id} item xs={12} sm={7}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {state.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                    <Link to="/adventures">
                      <Button type="details" className="btn btn-primary">
                        DETAILS
                      </Button>
                    </Link>
                    <Button size="small">Delete</Button>
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
