import Image from "next/image";
import Link from "next/link";
import React from "react";
import { withTheme } from "styled-components";
import { CCardDiv } from "./cards.style";

const CCards = ({ ccardArray, theme, about, details, projects, service }) => {
  return (
    <CCardDiv
      color={theme}
      about={about}
      details={details}
      projects={projects}
      service={service}
    >
      {ccardArray.map((item, key) => (
        <div key={key} className={"ccardbody"}>
          {item.image && (
            <div className={"ccardImage"}>
              <Image
                src={item.image}
                alt={item.header}
                width={"100"}
                height={"100"}
              />
            </div>
          )}
          {item.icon && (
            <div className={"ccardIconbody"}>
              <item.icon className={"ccardIcon"} />
            </div>
          )}
          <div className={"ccardDetails"}>
            <h3 className={"header"}>{item.header}</h3>
            <h4 className={"subHeader"}>{item.subHeader}</h4>
            <p>{item.paragraph}</p>
            {item.linkText && (
              <div className={"ccardLink"}>
                <Link href={`${item.link}`}>
                  <a>
                    <div className={"ccardLinkBody"}>
                      <h3>{item.linkText}</h3>
                      <div className={"ccardLinkIcon"}>
                        <item.linkIcon />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </CCardDiv>
  );
};

export default withTheme(CCards);
