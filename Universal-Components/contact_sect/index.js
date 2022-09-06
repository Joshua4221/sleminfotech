import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { StyledContactSect } from "./contactsect.style";
const ContactSect = () => {
  return (
    <StyledContactSect>
      <div className="text">
        <h1>Schedule a call</h1>
        <p>and we will get back to you within next 12 hours</p>
      </div>
      <div className="form">
        <Box
          className="box"
          sx={{
            maxWidth: "100%",
          }}
        >
          <TextField
            className="textContent"
            fullWidth
            id="filled-basic"
            label="Full name"
            variant="standard"
          />
          <TextField
            className="textContent"
            fullWidth
            id="filled-basic"
            label="Phone"
            variant="standard"
          />
          <TextField
            className="textContent"
            fullWidth
            id="filled-basic"
            label="Email"
            variant="standard"
            //   sx={{ input: { color: "red", borderColor: "red" } }}
          />
          <TextField
            className="textContent"
            fullWidth
            id="filled-basic"
            label="Message"
            variant="standard"
            margin="dense"
            multiline
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="I accept Privacy and Policy"
            labelPlacement="end"
          />
          <Button variant="contained" className="btn">
            Send Request
          </Button>
        </Box>
      </div>
    </StyledContactSect>
  );
};

export default ContactSect;
