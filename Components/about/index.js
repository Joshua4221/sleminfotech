import React from "react";
import { FiGlobe, FiClock } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { TiWaves } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import {
  ImageTextContainer,
  NumberText,
  SideBySideText,
  IconText,
} from "../../Universal-Components/image_text";
import {
  AboutHero,
  aboutImageTextArr,
  sideText,
  whatWeDoArr,
} from "../../Util/about";
import Header from "../../Universal-Components/header";
import bgImage from "../../Asset/m-bg.png";
import { StyledAbout } from "./about.style";
import ContactSect from "../../Universal-Components/contact_sect";
import HeroSubSection from "../../Universal-Components/HeroSubSection";

const AboutComp = () => {
  return (
    <StyledAbout>
      <HeroSubSection herosubsectionarray={AboutHero} />
      <ImageTextContainer imageTextArr={aboutImageTextArr} />
      <NumberText />
      <SideBySideText textHolder={sideText} />
      <SideBySideText
        textHolder={whatWeDoArr}
        BGColor={"white"}
        TextColor={"navy"}
        details={"text"}
      />
      <div className="backgroundImage"></div>
      <div className="mainBenefit">
        <div className="mainText">
          <h1>Main Benefits </h1>
        </div>
        <div className="iconContainer">
          <IconText
            classL="iconText"
            title={"Here in 24hrs"}
            text={
              "At Slem InfoTech we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiClock />}
          />
          <IconText
            classL="iconText"
            title={"Cost-effective"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FaWallet />}
          />
          <IconText
            classL="iconText"
            title={"Flexible scaling"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<TiWaves />}
          />
          <IconText
            classL="iconText"
            title={"Flexible scaling"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Timezone Aligned"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Mitigate the risk in hiring"}
            text={
              "At Slem InfoTech, we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<BsPeopleFill />}
          />
        </div>
      </div>
      <ContactSect />
    </StyledAbout>
  );
};

export default AboutComp;
