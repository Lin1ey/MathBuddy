import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function MathProblem(props) {
  const [answer, changeAnswer] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: 2,
        height: "100%",
      }}
    >
      <Typography align="center" variant="h2">
        {props.mathProblem}
      </Typography>
      <Grid container>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Answer Here!"
            variant="outlined"
            onChange={(e) => changeAnswer(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%" }}
            onClick={() => {
              if (answer === "") {
                alert("input can not be empty.");
              } else if (!/^\d+$/.test(answer)) {
                alert("Answer must be a number");
              } else {
                if (answer === props.answer) {
                  //textbox glows green
                  //generate new problem
                }
                else {
                  //textbox glows red
                }
              }
            }}
          >
            Enter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MathProblem;
