import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { AccountBalance } from "@mui/icons-material";

const MuiAppBar = () => {
  const appBarRef = useRef(null);
  const [AppBarposition, setAppBarposition] = useState("relative");
  const [originalPlace, setOriginalPlace] = useState(0);
  console.log(originalPlace);

  function handleScroll() {
    if (
      window.scrollY >=
      (appBarRef.current.offsetTop > originalPlace
        ? appBarRef.current.offsetTop
        : originalPlace)
    ) {
      setOriginalPlace(
        appBarRef.current.offsetTop
          ? appBarRef.current.offsetTop
          : originalPlace
      );
      setAppBarposition("fixed");
    } else {
      setAppBarposition("relative");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Box>
      <AppBar ref={appBarRef} sx={{ position: AppBarposition }} display="flex">
        <Toolbar bgcolor="success">
          <IconButton aria-label="app-logo" size="large" edge="start">
            <AccountBalance />
          </IconButton>
          <Typography component="div" variant="h5">
            App Bar
          </Typography>
        </Toolbar>
        <Stack direction="row" spacing={3}>
          <Button variant="text" color="secondary">
            Featured
          </Button>
          <Button variant="text" color="secondary">
            Setting
          </Button>
          <Button variant="text" color="secondary">
            Login
          </Button>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default MuiAppBar;
