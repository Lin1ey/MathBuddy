import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function MathProblem(props) {
  const [answer, changeAnswer] = useState("");
  const [textFieldColor, changeTextFieldColor] = useState("");
  const [textFieldLabel, changeTextFieldLabel] = useState("Answer Here!");

  function checkAns() {
    return props.checkAnswer(answer)
  }

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
            label={textFieldLabel}
            focused
            color={textFieldColor}
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
                if (checkAns()) {
                  //textbox glows green
                  changeTextFieldColor("success");
                  changeTextFieldLabel("Correct!");
                  //generate new problem
                  {props.setNewProblem()}
                }
                else {
                  //textbox glows red
                  changeTextFieldColor("warning");
                  changeTextFieldLabel("Wrong!");
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
