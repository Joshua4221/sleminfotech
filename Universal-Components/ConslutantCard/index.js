import React from "react";
import { withTheme } from "styled-components";
import { ITConsultingCardDiv } from "./index.styled";

const ConslutantCard = ({ cuslutantArrray, theme }) => {
  return (
    <ITConsultingCardDiv color={theme}>
      {cuslutantArrray.map((item, key) => (
        <div key={key} className="cardArray">
          <div className="cardHeader">
            <p>{item.header}</p>
          </div>
          <div className="cardDescription">
            <p>{item.description}</p>
          </div>
          {item.descriptionArray && (
            <div className="arrayBody">
              <h3 className="arrayHeader">{item.descriptionHeader}</h3>
              <div className="arryContent">
                {item.descriptionArray?.map((item, key) => (
                  <div key={key} className="arrayCard">
                    <div className="arrayText">
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </ITConsultingCardDiv>
  );
};

export default withTheme(ConslutantCard);
