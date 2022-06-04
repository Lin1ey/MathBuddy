import { Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MathProblem from "./MathProblem";
import TimeChallenge from "./TimeChallenge";

function HomePage() {
  return (
    <Box m={2}>
      <Container maxWidth="xl">
        <Box borderRadius={2} sx={{ border: 1, p: 2 }}>
          <Grid container columns={100}>
            <Grid item xs={20}>
              <TimeChallenge />
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item xs={79}>
              <MathProblem />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
