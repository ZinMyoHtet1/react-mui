import React from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { Phone, Mail, Message } from "@mui/icons-material";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="speed-dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<Phone />} tooltipTitle="phone" />
      <SpeedDialAction icon={<Mail />} tooltipTitle="mail" />
      <SpeedDialAction icon={<Message />} tooltipTitle="message" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
