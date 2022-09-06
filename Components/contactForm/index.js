import React from "react";
import FormComponent from "../../Universal-Components/FormComponent";
import { ContactArr } from "../../Util/contact";
import { StyledForm } from "./style";

const ContactForm = () => {
  return (
    <StyledForm>
      <div>
        <h1>Schedule a call</h1>
        <p>and we will get back to you within next 12 hours</p>
      </div>
      {/* <FormComponent formArray={ContactArr} /> */}
    </StyledForm>
  );
};

export default ContactForm;
