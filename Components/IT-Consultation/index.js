import React, { useState } from "react";
import { ITConstulationDiv } from "./it.style";
import { FaArrowRight } from "react-icons/fa";
import { withTheme } from "styled-components";
import Modals from "../../Universal-Components/Modals";
import Form from "../../Universal-Components/Form";
import Image from "next/image";
import HeroImage from "../../Asset/undraw4.svg";
import { ITConsultancyArray } from "../../Util/ITConsultancy/cardArray";
import ConslutantCard from "../../Universal-Components/ConslutantCard";
import { ConslutancyTypeArray } from "../../Util/ITConsultancy/conslutancyType";
import C_Cards from "../../Universal-Components/C_Cards";

const ITConstulation = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);
  const HandleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ITConstulationDiv color={theme}>
      <div className="it-hero-section">
        <div className="it-hero-content">
          <div className="it-hero-content-statement">
            <h2>Information Technology Consulting</h2>
            <p className="it-hero-content-statement-para">
              Get Your Business And IT Strategies Aligned
            </p>
            <div className="it-hero-content-statement-discription">
              <p>
                Our Information Technology (IT) Consulting Services help You improve the
                performace, scalability and competitiveness of your company
                through right technology enablement and usage. 
               
              </p>
            </div>
          </div>
          <div className="it-hero-content-form">
            <button
              className="it-hero-content-form-button"
              onClick={HandleModal}
            >
              <p>Consult Us</p>
              <FaArrowRight className="it-hero-content-form-icon" />
            </button>
            {showModal && (
              <Modals ModalComponent={Form} setValue={setShowModal} />
            )}
          </div>
        </div>
        <div className="it-hero-image">
          <Image src={HeroImage} alt="" />
        </div>
      </div>
      <div className="consultancy">
        <ConslutantCard cuslutantArrray={ITConsultancyArray} />
      </div>
      <div className="conslutancyType">
        <C_Cards ccardArray={ConslutancyTypeArray} details={"technology"} />
      </div>
    </ITConstulationDiv>
  );
};

export default withTheme(ITConstulation);
