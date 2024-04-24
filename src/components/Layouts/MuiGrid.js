import React from "react";
import { Grid, Box } from "@mui/material";

const MuiGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box p={2} bgcolor="purple">
          Box 1
        </Box>
      </Grid>
      <Grid item>
        <Box p={2} bgcolor="purple">
          Box 2
        </Box>
      </Grid>
      <Grid item>
        <Box p={2} bgcolor="purple">
          Box 3
        </Box>
      </Grid>
      <Grid item>
        <Box p={2} bgcolor="purple">
          Box 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
