import React from "react";
import { withTheme } from "styled-components";
import { HeroSubSectionDiv } from "./hero.style";

const HeroSubSection = ({ herosubsectionarray, theme }) => {
  return (
    <HeroSubSectionDiv color={theme}>
      <div>
        {herosubsectionarray?.map((item, key) => (
          <div key={key} className={"heroBody"}>
            {item.header && (
              <div className={"heroHeader"}>
                <h3>{item.header}</h3>
              </div>
            )}
            {item.buttonArray && (
              <div className="herobuttonarray">
                {item.buttonArray?.map((item, key) => (
                  <div key={key} className="herobuttonbody">
                    <button>{item.text}</button>
                  </div>
                ))}
              </div>
            )}
            <div className="heroText">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </HeroSubSectionDiv>
  );
};

export default withTheme(HeroSubSection);
