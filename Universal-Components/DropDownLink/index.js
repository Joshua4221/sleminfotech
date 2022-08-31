import Link from "next/link";
import React from "react";
import { withTheme } from "styled-components";
import { DropDownDiv } from "./dropdown.style";

const DropDownLink = ({
  dropdownLinkArray,
  details,
  theme,
  handleDropDownReturn,
}) => {
  return (
    <DropDownDiv color={theme} details={details}>
      {dropdownLinkArray.map((item, key) => (
        <div
          key={key}
          className={`${item.classbody}`}
          onClick={handleDropDownReturn}
        >
          <Link href={item.link}>
            <a>
              <div className={`${item.classname}`}>
                <p>{item.linktext}</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </DropDownDiv>
  );
};

export default withTheme(DropDownLink);
