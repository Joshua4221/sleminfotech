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
          <h1>Basic Benefits </h1>
        </div>
        <div className="iconContainer">
          <IconText
            classL="iconText"
            title={"Hire in 24hrs"}
            text={
              "At Zeespace Nigeria we introduce you to our Tech Experts within 24hrs."
            }
            Icon={<FiClock />}
          />
          <IconText
            classL="iconText"
            title={"Cost-effective"}
            text={
              "Zeespace Nigeria provides effective user requirements for your business."
            }
            Icon={<FaWallet />}
          />
          <IconText
            classL="iconText"
            title={"Flexible scaling"}
            text={
              "Zeespace Nigeria build functional and responsive enterprise software systems."
            }
            Icon={<TiWaves />}
          />
          <IconText
            classL="iconText"
            title={"Best Technologies"}
            text={
              "Zeespace Nigeria deliver your projects with world class technologies."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Timezone Aligned"}
            text={
              "At Zeespace Nigeria, Our Experts deliver quality products on time."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Best Management"}
            text={
              "At Zeespace Nigeria, We manage products with the best approach."
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
