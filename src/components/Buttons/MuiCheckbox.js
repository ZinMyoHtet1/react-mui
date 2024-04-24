import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Box,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

function MuiCheckbox() {
  const [checklist, setChecklist] = useState([]);
  console.log(checklist);
  const handleCheckbox = (e) => {
    const index = checklist.indexOf(e.target.value);
    if (index === -1) {
      setChecklist([...checklist, e.target.value]);
    } else {
      setChecklist(
        checklist.filter((checkValue) => checkValue !== e.target.value)
      );
    }
  };
  return (
    <Box>
      <Box>
        <FormControl>
          <FormControlLabel
            label="All"
            control={
              <Checkbox
                checked={checklist.length === 2}
                indeterminate={checklist.length === 1}
                onClick={(e) => {
                  if (e.target.checked) {
                    setChecklist(["policy", "bookmark"]);
                  } else {
                    setChecklist([]);
                  }
                }}
              />
            }
          />
        </FormControl>
      </Box>
      <Box ml={3}>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              label="I accept terms and conditions"
              control={
                <Checkbox
                  value="policy"
                  checked={checklist.includes("policy")}
                  onClick={handleCheckbox}
                />
              }
            />
            <FormControlLabel
              label="Bookmark"
              control={
                <Checkbox
                  value="bookmark"
                  checked={checklist.includes("bookmark")}
                  onClick={handleCheckbox}
                  icon={<BookmarkBorder />}
                  checkedIcon={<Bookmark />}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
