import React from "react";
import { Stack, Avatar } from "@mui/material";

const MuiAvatar = () => {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <Avatar>AV</Avatar>
        <Avatar sx={{ bgcolor: "primary.light" }}>AV</Avatar>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="./avatar/carton.png"
          alt="cartoon"
        />
        <Avatar variant="rounded" src="./avatar/mickyMouse.jpg" alt="mouse" />
      </Stack>
    </>
  );
};

export default MuiAvatar;
