import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

const MuiAutocomplete = () => {
  const options = [{ label: "dallar" }, { label: "kyat" }, { label: "yun" }];
  const [value, setValue] = useState(null);
  console.log(value);
  return (
    <Stack width="250px">
      <Autocomplete
        options={options}
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="select currency" />
        )}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
