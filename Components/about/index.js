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
          "Plavno provides you with highly skilled remote Senior IT Experts who form part of your team or form your company’s entire development team. Our team becomes your team enabling you to scale with the best result."
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
            title={"Here in 24hrs"}
            text={
              "At Plavno we introduce you to our Senior IT Experts within 24hrs."
            }
            Icon={<FiClock />}
          />
          <IconText
            classL="iconText"
            title={"Cost-effective"}
            text={
              "Plavno reduces acquisition costs by 30-50% and cost of labour by 35-60%."
            }
            Icon={<FaWallet />}
          />
          <IconText
            classL="iconText"
            title={"Flexible scaling"}
            text={
              "At Plavno we introduce you to our Senior IT Experts within 24hrs."
            }
            Icon={<TiWaves />}
          />
          <IconText
            classL="iconText"
            title={"Flexible scaling"}
            text={
              "Plavno provides various solutions to cater to the different needs of our clients. Our goal is to help you scale quickly and affordably."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Timezone Aligned"}
            text={
              "Geographical location enables teams to work in real-time, allowing for efficiency and ease of integration into companies teams."
            }
            Icon={<FiGlobe />}
          />
          <IconText
            classL="iconText"
            title={"Mitigate the risk in hiring"}
            text={
              "All IT Experts are employed by Plavno and become a part of your team."
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
