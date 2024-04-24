import React from "react";
import {
  Stack,
  TextField,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { Language } from "@mui/icons-material";

function MuiSelect() {
  return (
    <>
      <Typography>Select</Typography>
      <Stack direction="column" width="250px" spacing={3}>
        <TextField select label="Select your country">
          <MenuItem value="thailand">Thailand</MenuItem>
          <MenuItem value="singapore">Singapore</MenuItem>
          <MenuItem value="myanmar">Myanmar</MenuItem>
        </TextField>
        <TextField
          select
          label="With adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Language />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="thailand">Thailand</MenuItem>
          <MenuItem value="singapore">Singapore</MenuItem>
          <MenuItem value="myanmar">Myanmar</MenuItem>
        </TextField>
      </Stack>
    </>
  );
}

export default MuiSelect;
