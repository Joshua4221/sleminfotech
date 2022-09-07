import React from "react";
import C_Cards from "../../Universal-Components/C_Cards";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { ImageTextContainer } from "../../Universal-Components/image_text";
import { HeroArray, caseArr } from "../../Util/Case/heroArray";

const CasePage = () => {
  return (
    <div>
      <HeroSubSection herosubsectionarray={HeroArray} />
      <ImageTextContainer imageTextArr={caseArr} projects="projects" />
    </div>
  );
};

export default CasePage;
