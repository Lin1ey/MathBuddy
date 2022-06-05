import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MathProblem from "./MathProblem";
import TimeChallenge from "./TimeChallenge";

function HomePage() {
  const [mathProblem, changeProblem] = useState("");
  const [mathAnswer, changeAnswer] = useState(0);
  const [additionSign, changeAdditionSign] = useState(true);
  const [multiSign, changeMultiSign] = useState(false);
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);

  const minNum = 1;
  const maxNum = 11;

  function newProblem() {
    const sign = [];
    if (additionSign) {
      sign.push("+");
    }
    if (multiSign) {
      sign.push("x");
    }
    const signForProb = sign[Math.floor(Math.random() * sign.length)];
    const firstNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    const secondNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

    if (signForProb === "+") {
      changeAnswer(firstNum + secondNum);
    } else if (signForProb === "x") {
      changeAnswer(firstNum * secondNum);
    }
    return `${firstNum} ${signForProb} ${secondNum} = ?`;
  }

  function setNewProblem() {
    changeProblem(newProblem());
  }

  function setAddition() {
    changeAdditionSign(!additionSign);
  }
  function setMulti() {
    changeMultiSign(!multiSign);
  }
  function resetScore() {
    setCorrectScore(0);
    setWrongScore(0);
  }

  function answerCheck(answer) {
    if (mathAnswer.toString() === answer) {
      setCorrectScore(correctScore + 1);
      return true;
    } else {
      setWrongScore(wrongScore + 1);
      return false;
    }
  }

  return (
    <Box m={2}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center">
          Correct: {correctScore} Wrong: {wrongScore}
        </Typography>
        <Box borderRadius={2} sx={{ border: 1, p: 2 }}>
          <Grid container columns={100}>
            <Grid item xs={20}>
              <TimeChallenge
                setAddition={setAddition}
                setMulti={setMulti}
                addSign={additionSign}
                multiSign={multiSign}
                setNewProblem={setNewProblem}
                resetScore={resetScore}
              />
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={79}>
              <MathProblem
                mathProblem={mathProblem}
                checkAnswer={answerCheck}
                setNewProblem={setNewProblem}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
