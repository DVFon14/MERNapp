
import map1 from "./images/map1.jpeg";


import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Banner() {
  return (
    <>

      <br />

      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1300,
          flexGrow: 1,
          backgroundColor: '#F1F0DA',
        }}
      >
        <Grid container spacing={8} sx = {{paddingLeft: 0, paddingRight:5, paddingTop:5}}>
          {/*spacing betweem column 1 and 2*/}

          <Grid item>
            <ButtonBase sx={{ width: 700, height: 400 }}>
              {" "}
              {/* width from left, height of the total container */}
              <Img alt="map1" src={map1} height="500" width="500"/>
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Welcome to your U.S. Adventures tracker!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  On this page you can "Create New State" card by typing in <br/>
                  the name of a U.S. state (or territory). <br/>
                  <br/>
                  Then click on the  "Adventures" button to log a description <br/>
                  of your time at that state! <br/>
                  <br/>
                  Have fun keeping track of all your wonderful memories!
                </Typography>
              </Grid>

            </Grid>


          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Banner;


