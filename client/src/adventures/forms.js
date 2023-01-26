import React from 'react'

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


function Form() {
  return (
    <div>   
      <Paper >
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
  </Paper></div>
  )
}

export default Form