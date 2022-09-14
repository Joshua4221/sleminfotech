import React from "react";
import { FaBeer } from "react-icons/fa";
import IconBG from "../../Asset/case-bg-3.png";
import IconBGT from "../../Asset/bg-light.png";
import {
  ImageTextHolder,
  StyledNumText,
  StyledSideTextContainer,
  StyledIconDiv,
} from "./image_text.style";
import Image from "next/image";
import C_Cards from "../C_Cards";

export const ImageTextContainer = ({ imageTextArr, projects }) => {
  return (
    <div>
      {imageTextArr.map((item, key) => (
        <>
          <ImageTextHolder layout={key % 2 === 1 && "row"} projects={projects}>
            <div className="side-img">
              <Image
                src={item.image}
                alt="yes"
                priority
                placeholder="blur"
                blurDataURL
              />
            </div>
            <div className="side-text">
              <div className="text-div">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="mutliContentContainer">
                  {item.multiContent ? (
                    item.multiContent?.map((content, key) => (
                      <p key={key}>{content.txtContent}</p>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                {item.ccardArray && (
                  <div className="containing">
                    <C_Cards ccardArray={item.ccardArray} projects="project" />
                  </div>
                )}
              </div>
            </div>
          </ImageTextHolder>
        </>
      ))}
    </div>
  );
};

export const NumberText = () => {
  return (
    <StyledNumText>
      <div>
        <h1>300</h1>
        <h4>Successfully launched projects</h4>
      </div>
      <div>
        <h1>250</h1>
        <h4>Customers worldwide</h4>
      </div>
      <div>
        <h1>80</h1>
        <h4>Employees</h4>
      </div>
      <div>
        <h1>24/7</h1>
        <h4>Provide IT experts</h4>
      </div>
    </StyledNumText>
  );
};
export const SideBySideText = ({ textHolder, BGColor, TextColor, details }) => {
  return (
    <StyledSideTextContainer bgColor={BGColor} txtColor={TextColor}>
      {textHolder.map((item, key) => (
        <>
          <ImageTextHolder details={details} layout={key === 1 && "row"}>
            <div className="side-text">
              {item.boldText ? (
                <h2>{item.boldText}</h2>
              ) : (
                <div className="text-div">
                  <h2>{item.indexTitle}</h2>
                  <p>{item.indexContent}</p>
                  <div className="mutliContentContainer">
                    {item.indexMultiContent ? (
                      item.indexMultiContent?.map((content, key) => (
                        <p key={key}>{content.indexTxtContent}</p>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="side-text">
              <div className="text-div">
                <h2>{item.title}</h2>
                <p className={`${item.classpara}`}>{item.content}</p>
                <div className="mutliContentContainer">
                  {item.multiContent ? (
                    item.multiContent?.map((content, key) => (
                      <p key={key}>{content.txtContent}</p>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </ImageTextHolder>
        </>
      ))}
    </StyledSideTextContainer>
  );
};
export const IconText = ({ title, text, Icon, classL }) => {
  return (
    <StyledIconDiv className={classL}>
      <div className="cliped" bG={IconBGT.src}>
        <h3>{Icon}</h3>
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledIconDiv>
  );
};
