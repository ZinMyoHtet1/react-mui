import React from "react";
import {
  Drawer,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListSubheader,
} from "@mui/material";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        id="list-nested"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton onClick={toggleDrawer}>
          <ListItemText primary="History" />
        </ListItemButton>
        <ListItemButton onClick={toggleDrawer}>
          <ListItemText primary="Send Mail" />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={toggleDrawer}>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton onClick={toggleDrawer}>
          <ListItemText primary="Setting" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box>
      <Button variant="contained" onClick={toggleDrawer}>
        Open Drawer
      </Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default MuiDrawer;
