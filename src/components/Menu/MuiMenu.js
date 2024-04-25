import React from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";

const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        id="menu-demo-button"
        aria-controls={open ? "menu-demo-position" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Menu Open
      </Button>
      <Menu
        id="menu-demo"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="menu-demo-button"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem>Blog</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
    </Box>
  );
};

export default MuiMenu;
