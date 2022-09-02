import React from "react";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { HeroArray } from "../../Util/Outsorucing/HeroArray";

const OutSourcingPage = () => {
  return (
    <div>
      <HeroSubSection herosubsectionarray={HeroArray} />
    </div>
  );
};

export default OutSourcingPage;
