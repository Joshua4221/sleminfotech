import React from "react";
import { FormDiv } from "./fom.style";
import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const Form = ({ modal }) => {
  return (
    <FormDiv modal={modal}>
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
    </FormDiv>
  );
};

export default Form;
