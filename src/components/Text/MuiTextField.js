import React from "react";
import { Stack, TextField, Typography } from "@mui/material";

function MuiTextField() {
  return (
    <>
      <Typography size="h3">Text Field</Typography>
      <Stack width="250px" direction="column" spacing={3}>
        <TextField label="default" />
        <TextField label="outlined" variant="outlined" color="warning" />
        <TextField label="filled" variant="filled" color="success" />
        <TextField label="standard" variant="standard" />
        <TextField
          label="Read Only"
          defaultValue="This is a text"
          variant="outlined"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="With HeperText"
          variant="outlined"
          helperText="keep it secret"
        />
        <TextField
          label="multiline maxRows 4"
          variant="outlined"
          multiline
          maxRows={4}
        />
        <TextField
          label="multiline rows 4"
          variant="outlined"
          multiline
          rows={4}
        />
      </Stack>
    </>
  );
}

export default MuiTextField;
