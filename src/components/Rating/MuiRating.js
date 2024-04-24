import React from "react";
import { Box, Rating } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  console.log({ value });
  return (
    <Box>
      <Rating
        name="rating"
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<Favorite color="error" />}
        emptyIcon={<FavoriteBorder />}
        highlightSelectedOnly
      />
    </Box>
  );
};

export default MuiRating;
