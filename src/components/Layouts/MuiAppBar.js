import React, { useEffect, useRef, useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { AccountBalance } from "@mui/icons-material";

const MuiAppBar = () => {
  const appBarRef = useRef(null);
  const [AppBarposition, setAppBarposition] = useState("relative");
  function handleScroll() {
    if (window.scrollY >= appBarRef.current.offsetTop) {
      setAppBarposition("fixed");
    } else {
      setAppBarposition("relative");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  console.log(window.scrollY, appBarRef.current);
  return (
    <Box>
      <AppBar ref={appBarRef} sx={{ position: AppBarposition, top: 0 }}>
        <Toolbar>
          <IconButton aria-label="app-logo" size="large" edge="start">
            <AccountBalance />
          </IconButton>
          <Typography component="div" variant="h5">
            App Bar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MuiAppBar;
