import React from "react";
import { useState, useEffect } from "react";
import { Button, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function Content() {
  let [name, setName] = useState("");
  let [lastname, setlastName] = useState("");
  let [value, setValue] = React.useState(new Date());

  function submit() {
    console.log(name, lastname,value);
  }
  return (
    <Container sx={{ mt: 5 }}>
      <Paper sx={{ p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography>Firstname</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Lastname</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Grid >
          <Grid item xs={6}>
            <TextField
              fullWidth
              onChange={(e) => setlastName(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={8}>
            <Typography>DateTime</Typography>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                disabled
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={submit}>
              Check-In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Content;
