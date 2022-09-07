import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HomeDiv } from "./home.style";
import HeroImage from "../../Asset/main-banner.png";
import { withTheme } from "styled-components";
import { Bg } from "../../Asset/wave-partner.svg";
import HeadingSection from "../../Universal-Components/HeadingSection";
import C_Cards from "../../Universal-Components/C_Cards";
import { AboutArray } from "../../Util/Home/aboutArray";
import { parternsArrayIcon } from "../../Util/Home/partner";
import { DeveloperArray } from "../../Util/Home/developer";
import { dataArray, developedProject } from "../../Util/Home/solutions";
import { TechnologyArray } from "../../Util/Home/technology";

const HomePage = ({ theme, companyArray }) => {
  let lengthCount = TechnologyArray.length - 1;
  let newArr = TechnologyArray.slice(0, 12);
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState(developedProject[0]);
  const [technologies, setTechnologies] = useState(newArr);

  let autoScroll = false;
  let slideIntervals;
  let timeInterval = 5000;

  const Slider = useCallback(() => {
    setIndex(index === dataArray.length - 1 ? 0 : index + 1);
    // setDetails(developedProject[index]);
    // console.log(joshuaindex);
  }, [index]);

  const SliderReducer = useCallback(() => {
    setIndex(index === 0 ? dataArray.length - 1 : index - 1);
    // setDetails(developedProject[index]);
    // console.log(index);
  }, [index]);

  const auto = () => {
    slideIntervals = setInterval(Slider, timeInterval);
  };

  // useEffect(() => {
  //   setIndex(0);
  // }, [index]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIndex((prev) => (prev === dataArray.length - 1 ? 0 : prev + 1));
  //     setDetails(developedProject[index]);
  //   }, 10000);
  //   console.log(index);
  // }, [index]);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
  }, [index]);

  return (
    <HomeDiv color={theme} Bg={Bg}>
      <div className="heroSection">
        <div className={"heroSectionDetails"}>
          <div className={"heroSectionDetailsbdy"}>
            <div className={"heroSectionDetailsbdyheader"}>
              <h3>Hire Experienced Senior IT Experts in 24 hrs</h3>
              <p>
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
            </div>

            <div className={"heroSectionDetailsbdyfooter"}>
              <div className={"heroSectionDetailsbdyfooterheader"}>
                <button>Hire top IT experts</button>
              </div>
              <div className={"heroSectionDetailsbdyfootercontent"}>
                <p>Featured In</p>
                {companyArray?.map((item, key) => (
                  <div
                    key={key}
                    className={"heroSectionDetailsbdyfootercontenticon"}
                  >
                    <Image
                      src={item.image}
                      alt={""}
                      placeholder={"blur"}
                      blurDataURL
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"heroSectionGraphics"}>
          <div>
            <Image
              src={HeroImage}
              alt={""}
              layout={"responsive"}
              placeholder={"blur"}
              blurDataURL
              priority
              objectFit="cover"
              className={"graphicsImage"}
            />
          </div>
        </div>
      </div>
      <div className={"homebody"}>
        <div className={"aboutSection"}>
          <HeadingSection
            title={"About us"}
            paragraph={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div>
            <C_Cards ccardArray={AboutArray} />
          </div>
        </div>

        <div className={"partners"}>
          <HeadingSection
            title={"Partners"}
            paragraph={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div className={"partnersbody"}>
            <div className={"partnersbodyOne"}>
              <p>
                Together with our partners, we shape the future of digital
                entertainment.
              </p>
            </div>
            <div className={"partnersbodyTwo"}>
              {parternsArrayIcon?.map((item, key) => (
                <div key={key} className={"partnersbodyTwoIcon"}>
                  <Image
                    src={item.image}
                    alt={""}
                    placeholder={"blur"}
                    blurDataURL
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"developer"}>
          <HeadingSection
            subtitle={
              "We provide a variety of options to help you scale your business"
            }
          />
          <div>
            <C_Cards ccardArray={DeveloperArray} />
          </div>
        </div>
        <div className={"websolution"}>
          <HeadingSection
            subtitle={
              "High-quality web/mobile development solutions that are crucial for innovative app"
            }
          />
          <div className={"webSolutionIncreament"}>
            {dataArray.map((item, key) => (
              <div
                key={key}
                className={`data ${index === key && "dataColor"}`}
              ></div>
            ))}
          </div>
          <div className={"solution"}>
            {dataArray?.map((item, key) => (
              <div key={key} className={"solutiondata"}>
                <div className={"solutionnum"}>
                  <p>{item.num}</p>
                </div>
                <div className={"solutiontitle"}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={"developedProjectbody"}>
            {developedProject?.map((item, key) => (
              <div key={key}>
                {index === key && (
                  <div className={"developedProjectbodydata"}>
                    <div className={"developedProjectbodydataimage"}>
                      <div className={"developedProjectbodydataimagedata"}>
                        <Image
                          src={item.image}
                          alt={""}
                          layout={"responsive"}
                          placeholder={"blur"}
                          blurDataURL
                          priority
                          objectFit="cover"
                          className={"graphicsImage"}
                        />
                      </div>
                    </div>
                    <div className={"developedProjectbodydatadetails"}>
                      <p className={"details"}>{item.title}</p>
                      <p className={"detailspar"}>{item.paragraph}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={"technology"}>
          <HeadingSection
            title={"Technologies"}
            paragraph={
              "Plavno provides you with motivated and experienced remote Senior IT Experts. With our business model, you have options to choose the solution that best fits your need."
            }
          />
          <div>
            <C_Cards ccardArray={technologies} details={"technology"} />
          </div>
        </div>
        <div>
          {/* <HeadingSection title={"Last Project"} /> */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </HomeDiv>
  );
};

export default withTheme(HomePage);
