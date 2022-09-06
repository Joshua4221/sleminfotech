import React from "react";
import { StyledHeader } from "./header.style";

const Header = ({ title, content }) => {
  return (
    <StyledHeader>
      <div className="text">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
