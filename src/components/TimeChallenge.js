import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography } from "@mui/material";

function TimeChallengeOptions(props) {
  function onStart() {
    {
      props.resetScore();
    }
    {
      props.handleStart();
    }
    {
      props.setNewProblem();
    }
  }

  return (
    <Box borderRadius={2} sx={{ border: 1, p: 2 }}>
      {!props.active && (
        <Button variant="contained" sx={{ width: "100%" }} onClick={onStart}>
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
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Addition"
          onClick={props.setAddition}
          checked={props.addSign}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Multiplication"
          onClick={props.setMulti}
          checked={props.multiSign}
        />
      </FormGroup>
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

function TimeChallenge(props) {
  const defaultTime = 20;
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(defaultTime);

  React.useEffect(() => {
    let interval = null;

    if (isActive === true) {
      interval = setInterval(() => {
        if (time < 1) {
          clearInterval(interval);
          alert("Time's Up!");
          handleStop();
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
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
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
        setMulti={props.setMulti}
        setAddition={props.setAddition}
        setNewProblem={props.setNewProblem}
        addSign={props.addSign}
        multiSign={props.multiSign}
        resetScore={props.resetScore}
      />
    </Box>
  );
}

export default TimeChallenge;
