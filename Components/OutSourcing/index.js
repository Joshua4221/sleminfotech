import React from "react";
import { ImageTextContainer } from "../../Universal-Components/image_text";
import { HeroArray, outSourcingArr } from "../../Util/Outsorucing/HeroArray";
import ContactSect from "../../Universal-Components/contact_sect";
import HeroSubSection from "../../Universal-Components/HeroSubSection";

const OutSourcingPage = () => {
  return (
    <div>
      <HeroSubSection herosubsectionarray={HeroArray} />
      <ImageTextContainer imageTextArr={outSourcingArr} />
      <ContactSect />
    </div>
  );
};

export default OutSourcingPage;
