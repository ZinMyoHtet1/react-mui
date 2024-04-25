import React from "react";
// import { useLocation } from "react-router-dom";
import {
  Breadcrumbs,
  Link,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Inbox, Drafts } from "@mui/icons-material";
const links = () => {
  const location = window.location.pathname;
  const pathnames = location.split("/").filter((x) => x);
  return pathnames;
};

const ListGroup = (
  <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="inbox">
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="draft">
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="trash">
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="spam">
          <ListItemText primary="Spam" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

console.log(links());
const MuiBreadcrumbs = () => {
  return (
    <>
      <Box>
        <Breadcrumbs aria-label="social-media">
          <Link href="#" underline="hover">
            Google
          </Link>
          <Link href="#" underline="hover">
            Facebook
          </Link>
          <Typography variant="h6">Instagram</Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        <Breadcrumbs aria-label="social-media">
          <Typography variant="h6">Instagram</Typography>
        </Breadcrumbs>
        {ListGroup}
      </Box>
    </>
  );
};

export default MuiBreadcrumbs;
