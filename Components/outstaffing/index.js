import React from "react";
import Header from "../../Universal-Components/header";
import { ImageTextContainer } from "../../Universal-Components/image_text";
import { outStaffArr } from "../../Util/outstaff";
import ContactSect from "../../Universal-Components/contact_sect";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { HeroOutStaffingArray } from "../../Util/Outsorucing/HeroArray";

const OutStaffComp = () => {
  return (
    <div>
      <HeroSubSection herosubsectionarray={HeroOutStaffingArray} />
      <ImageTextContainer imageTextArr={outStaffArr} />
      <ContactSect />
    </div>
  );
};

export default OutStaffComp;
