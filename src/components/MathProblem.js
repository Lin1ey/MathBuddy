import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function MathProblem() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: 2,
      }}
    >
      <Typography align="center" variant="h2">
        math here
      </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}

export default MathProblem;
