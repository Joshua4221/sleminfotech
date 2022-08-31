import React from "react";
import { withTheme } from "styled-components";
import { HeadingSectionDiv } from "./headingsect.style";

const HeadingSection = ({ theme, title, subtitle, paragraph }) => {
  return (
    <HeadingSectionDiv color={theme} title={title}>
      <div className={"headingSectionDetails"}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{paragraph}</p>
      </div>
    </HeadingSectionDiv>
  );
};

export default withTheme(HeadingSection);
