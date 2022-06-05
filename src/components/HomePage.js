import { Button, Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MathProblem from "./MathProblem";
import TimeChallenge from "./TimeChallenge";

function HomePage() {
  const [mathProblem, changeProblem] = useState("");
  const [mathAnswer, changeAnswer] = useState(0);
  const [additionSign, changeAdditionSign] = useState(true);
  const [multiSign, changeMultiSign] = useState(false);

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

  function checkAnswer(answer) {
    return mathAnswer.toString() === answer;
  }

  function setAddition() {
    changeAdditionSign(!additionSign);
  }
  function setMulti() {
    changeMultiSign(!multiSign);
  }

  function test() {
    console.log(newProblem());
  }
  function test2() {
    console.log(mathAnswer);
  }

  return (
    <Box m={2}>
      <Container maxWidth="xl">
        <Button onClick={test}>TEST</Button>
        <Button onClick={test2}>TEST2</Button>
        {additionSign && <div>add</div>}
        {multiSign && <div>multi</div>}
        <Box borderRadius={2} sx={{ border: 1, p: 2 }}>
          <Grid container columns={100}>
            <Grid item xs={20}>
              <TimeChallenge
                setAddition={setAddition}
                setMulti={setMulti}
                setNewProblem={setNewProblem}
              />
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={79}>
              <MathProblem
                mathProblem={mathProblem}
                checkAnswer={checkAnswer}
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
