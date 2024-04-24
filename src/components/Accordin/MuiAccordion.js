import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => {
    expanded !== panel ? setExpanded(panel) : setExpanded(false);
  };
  return (
    <Box width={600}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={() => handleChange("panel1")}
      >
        <AccordionSummary
          id="accordion1"
          expandIcon={<ArrowDropDown />}
          aria-controls="accor1-content"
        >
          <Typography variant="subtitle1">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={() => handleChange("panel2")}
      >
        <AccordionSummary
          id="accordion2"
          expandIcon={<ArrowDropDown />}
          aria-controls="accor2-content"
        >
          <Typography variant="subtitle1">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
