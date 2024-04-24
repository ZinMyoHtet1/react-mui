import React, { useState } from "react";
import { Box, FormControl, FormControlLabel, Switch } from "@mui/material";

function MuiSwitch() {
  const [value, setValue] = useState(false);
  const handleClick = (e) => {
    setValue(e.target.checked);
  };
  console.log({ value });
  return (
    <Box>
      <FormControl>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch color="success" checked={value} onClick={handleClick} />
          }
        />
      </FormControl>
    </Box>
  );
}

export default MuiSwitch;
