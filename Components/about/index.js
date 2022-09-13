import React from "react";
import { FiGlobe } from "react-icons/fi";

import {
  ImageTextContainer,
  NumberText,
  SideBySideText,
  IconText,
} from "../../Universal-Components/image_text";
import { aboutImageTextArr, sideText, whatWeDoArr } from "../../Util/about";
import Header from "../../Universal-Components/header";
import bgImage from "../../Asset/m-bg.png";
import { StyledAbout } from "./about.style";
import ContactSect from "../../Universal-Components/contact_sect";

const AboutComp = () => {
  return (
    <StyledAbout>
      <Header
        title={"About Us"}
        content={
          "Slem InfoTech provides you with highly skilled remote Tech Experts who form part of your team or form your company’s entire development team. Our team becomes your team enabling you to scale with the best result."
        }
      />
      <ImageTextContainer imageTextArr={aboutImageTextArr} />
      <NumberText />
      <SideBySideText textHolder={sideText} />
      <SideBySideText
        textHolder={whatWeDoArr}
        BGColor={"white"}
        TextColor={"navy"}
      />
      <div className="backgroundImage"></div>
      <div className="mainBenefit">
        <div className="mainText">
          <h1>Main Benefits </h1>
        </div>
        <div className="iconContainer">
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"header"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
        </div>
      </div>
      <ContactSect />
    </StyledAbout>
  );
};

export default AboutComp;
