import React from "react";
import { SoftwareServiceDiv } from "./software.styte";
import C_Cards from "../../Universal-Components/C_Cards";
import { withTheme } from "styled-components";
import { HomeServiceSectionArray } from "../../Util/SoftwareServices/HomeServiceSection";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { HeroSection } from "../../Util/SoftwareServices/heroSection";

const SoftwareServicesPage = ({ theme }) => {
  return (
    <SoftwareServiceDiv color={theme}>
      <HeroSubSection herosubsectionarray={HeroSection} />
      <div className="servicelist">
        <C_Cards ccardArray={HomeServiceSectionArray} service={"services"} />
      </div>
      <div className="serviceDetails">
        <div className={"ServiceConnect"}>
          <h2>{`Do you have digital project? Let's talk.`}</h2>
          <p className={"ServiceContent"}>
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
          <button className={"ServiceLink"}>
            <div className={"ServiceLinkBody"}>
              <div className={"ServiceLinkText"}>
                <p>Contact Us</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </SoftwareServiceDiv>
  );
};

export default withTheme(SoftwareServicesPage);
