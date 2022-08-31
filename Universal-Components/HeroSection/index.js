import React from "react";
import { withTheme } from "styled-components";
import { HeroSectionDiv } from "./hero.style";

const HeroSection = ({ bg, theme, heroText }) => {
  return (
    <HeroSectionDiv bg={bg} color={theme}>
      <div className="heroBody">
        <div className={"header"}>
          <h3>{heroText}</h3>
        </div>

        <div className={"heroDetails"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="100 250 1250 120"
          >
            {/* #0099ff */}
            <path
              fill="#fff"
              /*fill-opacity="1"*/ d="M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </HeroSectionDiv>
  );
};

export default withTheme(HeroSection);
