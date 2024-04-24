import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  IconButton,
  Stack,
  Collapse,
} from "@mui/material";

import { Share, ExpandMore } from "@mui/icons-material";

const MuiCard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <Card sx={{ maxWidth: "300px" }}>
      <CardMedia
        height="200px"
        component="img"
        image="https://source.unsplash.com/random"
        alt="image"
      />
      <CardContent>
        <Typography variant="subtitle1">Title</Typography>
        <Typography variant="body1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you nee
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary">
            Write
          </Button>
          <Button component="label" endIcon={<Share />}>
            Share
          </Button>
        </Stack>

        <IconButton
          sx={{
            transform: expand ? "rotate(180deg)" : "rotate(0)",
            transition: "all 0.2s ease-in",
          }}
          aria-label="expand"
          onClick={() => setExpand(!expand)}
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Collapse>
    </Card>
  );
};

export default MuiCard;
