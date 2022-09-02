import React from "react";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { HeroArray } from "../../Util/Case/heroArray";

const CasePage = () => {
  return (
    <div>
      <HeroSubSection herosubsectionarray={HeroArray} />
    </div>
  );
};

export default CasePage;
