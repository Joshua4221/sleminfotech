import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { CareerDiv } from "./career.styled";
import Modals from "../../Universal-Components/Modals";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../../Asset/undraw7.svg";
import { withTheme } from "styled-components";
import HeadingSection from "../../Universal-Components/HeadingSection";
import Form from "../../Universal-Components/Form";
import { TechnologyArray } from "../../Util/Home/technology";
import C_Cards from "../../Universal-Components/C_Cards";

const CareerPage = ({ theme }) => {
  const arr1 = TechnologyArray.slice(0, 6);
  const arr2 = TechnologyArray.slice(6, 12);
  const arr3 = TechnologyArray.slice(12, 18);
  const arr4 = TechnologyArray.slice(18, TechnologyArray.length);

  const techArr = useMemo(() => [arr1, arr2, arr3, arr4], []);

  const [showModal, setShowModal] = useState(false);
  const [techIndex, setTechIndex] = useState(0);
  const [technologies, setTechnologies] = useState(techArr[0]);

  const timeoutRefTech = useRef(null);

  let timeIntervals = 5000;

  const TechSlider = useCallback(() => {
    setTechIndex((prevTech) =>
      prevTech === techArr.length - 1 ? 0 : prevTech + 1
    );
    setTechnologies(techArr[techIndex]);
  }, [techIndex, techArr]);

  const resetTimeoutTech = () => {
    if (timeoutRefTech.current) {
      clearTimeout(timeoutRefTech.current);
    }
  };

  useEffect(() => {
    resetTimeoutTech();
    timeoutRefTech.current = setTimeout(TechSlider, timeIntervals);

    return () => {
      resetTimeoutTech();
    };
  }, [techIndex]);

  const HandleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <CareerDiv color={theme}>
      <div className="it-hero-section">
        <div className="it-hero-content">
          <div className="it-hero-content-statement">
            <h2>JOIN OUR FRIENDLY TEAM</h2>
            <p className="it-hero-content-statement-para">
              We are looking for talentedand purposeful people
            </p>
          </div>
          <div className="it-hero-content-form">
            <button
              className="it-hero-content-form-button"
              onClick={HandleModal}
            >
              <p>Connect with us</p>
              <FaArrowRight className="it-hero-content-form-icon" />
            </button>
            {showModal && (
              <Modals ModalComponent={Form} setValue={setShowModal} />
            )}
          </div>
        </div>
        <div className="it-hero-image">
          <Image
            src={HeroImage}
            alt=""
            width="800"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="aboutBody">
        <HeadingSection
          title={"About us"}
          paragraph={
            "We provide a variety of options to help you scale your business"
          }
        />
        <div className="aboutDescription">
          <p>
            We have been working in the IT market since 2007. During this time,
            we have implemented more than 300 projects and cooperated with many
            clients from 15 countries around the world. Our company has doubled
            in size in 2021, and we plan to double our team once again . We
            develop web/mobile applications, e-commerce systems used by millions
            of people.
          </p>
        </div>
      </div>
      <div className="technology">
        <HeadingSection title={"Our Technologies"} />
        <div>
          <C_Cards ccardArray={technologies} details={"technology"} />
          <div className="techControlerbody">
            {techArr?.map((item, key) => (
              <div
                onClick={() => {
                  setTechIndex(key);
                  setTechnologies(
                    techArr[key === 0 ? techArr.length - 1 : key - 1]
                  );
                }}
                className={`techControlerMain ${
                  techIndex === key && "techControler"
                }`}
                key={key}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="serviceDetails">
        <div className={"ServiceConnect"}>
          <h2>{`Become a part of our professional team we need`}</h2>
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
    </CareerDiv>
  );
};

export default withTheme(CareerPage);
