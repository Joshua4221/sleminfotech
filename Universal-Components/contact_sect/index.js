import React from "react";
import Form from "../Form";
import { StyledContactSect } from "./contactsect.style";

const ContactSect = () => {
  return (
    <StyledContactSect>
      <div className="text">
        <h1>Schedule a call</h1>
        <p>and we will get back to you within next 5 hours</p>
      </div>
      <Form />
    </StyledContactSect>
  );
};

export default ContactSect;
