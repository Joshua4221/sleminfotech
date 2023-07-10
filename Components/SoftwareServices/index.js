import React, { useState } from "react";
import { SoftwareServiceDiv } from "./software.styte";
import C_Cards from "../../Universal-Components/C_Cards";
import { withTheme } from "styled-components";
import { HomeServiceSectionArray } from "../../Util/SoftwareServices/HomeServiceSection";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { HeroSection } from "../../Util/SoftwareServices/heroSection";
import HeadingSection from "../../Universal-Components/HeadingSection";
import Modals from "../../Universal-Components/Modals";
import Form from "../../Universal-Components/Form";

const SoftwareServicesPage = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);

  const HandleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SoftwareServiceDiv color={theme}>
      <HeroSubSection herosubsectionarray={HeroSection} />
      <div className="servicelist">
        <HeadingSection
          title={"Services We Provide"}
          paragraph={
            "With the most professional and advanced resources, we bring satisfactory outcome for your business."
          }
        />
        <C_Cards ccardArray={HomeServiceSectionArray} service={"services"} />
      </div>
      <div className="serviceDetails">
        <div className={"ServiceConnect"}>
          <h2>{`Do you have digital project? Let's talk.`}</h2>
          <p className={"ServiceContent"}>
          Contact Us, We Are Always Ready To Help! 
          </p>
          <button onClick={HandleModal} className={"ServiceLink"}>
            <div className={"ServiceLinkBody"}>
              <div className={"ServiceLinkText"}>
                <p>Contact Us</p>
              </div>
            </div>
          </button>
        </div>
        {showModal && <Modals ModalComponent={Form} setValue={setShowModal} />}
      </div>
    </SoftwareServiceDiv>
  );
};

export default withTheme(SoftwareServicesPage);
