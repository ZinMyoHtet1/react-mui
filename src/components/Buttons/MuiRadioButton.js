import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function MuiRadioButton() {
  return (
    <FormControl>
      <FormLabel
        id="font-style"
        sx={{
          color: "purple",
          fontWeight: "600",
          "&.Mui-focus": { color: "green" },
        }}
      >
        Font Style
      </FormLabel>
      <RadioGroup
        name="font-style-group"
        aria-labelledby="font-style"
        defaultValue="roboto"
        row
      >
        <FormControlLabel
          value="roboto"
          control={<Radio />}
          label="Roboto"
          sx={{ color: "purple" }}
        />
        <FormControlLabel
          value="poppins"
          control={<Radio />}
          label="Poppins"
          sx={{ "& .Mui-checked": { color: "purple" } }}
        />
        <FormControlLabel value="karla" control={<Radio />} label="Karla" />
      </RadioGroup>
    </FormControl>
  );
}

export default MuiRadioButton;
