import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ClosedCaption, AppShortcut, Audiotrack } from "@mui/icons-material";

function MuiToggleButton() {
  const [setting, setSetting] = useState();
  console.log(setting);
  return (
    <>
      <ToggleButtonGroup
        color="success"
        aria-label="settings"
        value={setting}
        onChange={(_e, updateValue) => setSetting(updateValue)}
        exclusive
        orientation="vertical"
      >
        <ToggleButton value="closed-caption" aria-label="closed-caption">
          <ClosedCaption />
        </ToggleButton>
        <ToggleButton value="app-shortcut" aria-label="app shortcut">
          <AppShortcut />
        </ToggleButton>
        <ToggleButton value="audio-track" aria-label="audio track">
          <Audiotrack />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default MuiToggleButton;
