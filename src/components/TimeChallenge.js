import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, Typography } from "@mui/material";

function TimeChallengeOptions(props) {
  const [checked, setChecked] = React.useState(true);
  const [button, setButton] = React.useState("Start");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box borderRadius={2} sx={{ border: 1, p: 2 }}>
      {!props.active && (
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={props.handleStart}
        >
          Start
        </Button>
      )}
      {props.active && (
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={props.handleStop}
        >
          Stop
        </Button>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label" />
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="easy"
            name="radio-buttons-group"
          >
            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} />}
            label="Addition"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} />}
            label="Multiplication"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

function TimeChallengeTimer(props) {
  return (
    <Box borderRadius={2} sx={{ border: 1, p: 2, my: 1 }}>
      <Typography variant="h5" align="center">
        Time Left
      </Typography>
      <Typography variant="h6" align="center">
        {props.time}
      </Typography>
    </Box>
  );
}

function TimeChallenge() {
  const defaultTime = 30;
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(defaultTime);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        if (time < 1) {
          setIsActive(false);
          setIsPaused(true);
          clearInterval(interval);
        } else {
          setTime((time) => time - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsActive(false);
    setTime(defaultTime);
  };

  return (
    <Box>
      <TimeChallengeTimer time={time} />
      <TimeChallengeOptions
        active={isActive}
        handleStart={handleStart}
        handleStop={handleStop}
      />
    </Box>
  );
}

export default TimeChallenge;
