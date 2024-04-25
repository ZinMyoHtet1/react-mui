import React from "react";
import { Stack, Badge } from "@mui/material";
import { Mail } from "@mui/icons-material";

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={3} mt={3}>
      <Badge badgeContent={3} color="primary">
        <Mail color="action" />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
