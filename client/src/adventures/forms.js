//============== React ==============//

import React from "react";

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

//============== Code ==============//

function Form() {
  return (
    <div>
      <br />
      <div>
        {" "}
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Date input
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Edit</Button>

                      <Button size="small">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper>
                    <form
                    //   autoComplete="off"
                    //   noValidate
                    //   className={`${classes.root} ${classes.form}`}
                    //   onSubmit={handleSubmit}
                    >
                      <Typography variant="h6">
                        {" "}
                        Details of Your Adventure
                      </Typography>
                      <TextField
                        name="Date"
                        variant="outlined"
                        label="Date"
                        fullWidth
                      />

                      <TextField
                        name="Adventure details"
                        variant="outlined"
                        label="Adventure details"
                        fullWidth
                      />

                      <TextField
                        name="Co-Adventurers"
                        variant="outlined"
                        label="Co-Adventurers"
                        fullWidth
                      />

                      <TextField
                        name="City"
                        variant="outlined"
                        label="City"
                        fullWidth
                      />

                      <TextField
                        name="Other"
                        variant="outlined"
                        label="Other"
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
    </div>
  );
}

export default Form;
