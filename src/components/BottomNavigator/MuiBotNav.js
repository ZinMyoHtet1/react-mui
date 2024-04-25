import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import {
  History,
  FormatListNumbered,
  Favorite,
  Bookmarks,
} from "@mui/icons-material";

const MuiBotNav = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="bookmarks"
          icon={<Bookmarks fontSize="70px" color="secondary" />}
        />
        <BottomNavigationAction
          label={<strong>history</strong>}
          icon={<History fontSize="70px" color="secondary" />}
        />
        <BottomNavigationAction
          label="lists"
          icon={<FormatListNumbered fontSize="70px" color="secondary" />}
        />
        <BottomNavigationAction
          label="favorite"
          icon={<Favorite fontSize="70px" color="secondary" />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MuiBotNav;
