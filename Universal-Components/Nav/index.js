import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { withTheme } from "styled-components";
import DropDownLink from "../DropDownLink";
import { NavDiv } from "./nav.style";
import { MdClose } from "react-icons/md";

const Nav = ({ navArray, theme }) => {
  const [search, setSearch] = useState();
  const [dropDown, setDropDown] = useState(false);

  const HandleSearch = useCallback(() => {
    setSearch(!search);
  }, [search]);

  const HandleDropDown = useCallback(() => {
    setDropDown(!dropDown);
  }, [dropDown]);

  const HandleDropDownReturn = useCallback(() => {
    setDropDown(false);
  }, []);

  return (
    <NavDiv color={theme} dropdown={dropDown}>
      {navArray.map((item, key) => (
        <div key={key} className={`${item.classmain}`}>
          {item.section.map((item, key) => (
            <div
              key={key}
              className={`${item.classbody}`}
              onClick={() => {
                item.details === "searchicon" && HandleSearch();
                item.details === "hambuggger" && HandleDropDown();
              }}
            >
              {item.image ? (
                <div className={`${item.classname}`}>
                  <Link href={"/"}>
                    <a>
                      <div className={`${item.classitem}`}>
                        <Image
                          src={item.image}
                          alt={""}
                          placeholder="blur"
                          blurDataURL
                          priority
                          objectFit="cover"
                          layout="responsive"
                          className={`${item.classitemimage}`}
                        />
                      </div>
                      <div className={`${item.classitemtext}`}>
                        <p>{item.imageText}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ) : item.icon ? (
                <div className={`${item.classname}`}>
                  {search && item.details === "searchicon" ? (
                    <MdClose className="thirdlayoutitem" />
                  ) : (
                    <item.icon className={`${item.classitem}`} />
                  )}
                </div>
              ) : item.component ? (
                <div>
                  {search && (
                    <div className={`${item.classmain}`}>
                      <item.component className={`${item.classitem}`} />
                    </div>
                  )}
                </div>
              ) : item.link ? (
                <div
                  className={`${item.classname}`}
                  onClick={HandleDropDownReturn}
                >
                  <Link href={item.link}>
                    <a>
                      <div className={`${item.classitem}`}>
                        <p>{item.linktext}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ) : (
                item.dropdown && (
                  <div className={`${item.classname}`}>
                    <div className={`${item.classitem}`}>
                      <p>{item.dropdown}</p>
                    </div>
                    <div className={`${item.itemL}`}>
                      <DropDownLink
                        details={item.details}
                        dropdownLinkArray={item.dropdownlinks}
                        handleDropDownReturn={HandleDropDownReturn}
                      />
                    </div>
                  </div>
                )
              )}
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default withTheme(Nav);
