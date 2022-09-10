import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { withTheme } from "styled-components";
import Form from "../Form";
import Modals from "../Modals";
import { FooterDiv } from "./footer.style";

const FooterComponent = ({ footerArray, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const HandleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <FooterDiv color={theme}>
      {footerArray.map((item, key) => (
        <div key={key} className={`${item.classmain}`}>
          {item.text && (
            <div className={`${item.classname}`}>
              <h4>{item.text}</h4>
            </div>
          )}
          <div className={`${item.classname}`}>
            {item?.section?.map((item, key) => (
              <div key={key} className={`${item.classbody}`}>
                <div>
                  {item.image ? (
                    <div className={`${item.classname}`}>
                      <div className={`${item.classnameimage}`}>
                        <Image
                          src={item.image}
                          alt={"logo"}
                          // width={"100"}
                          // height={"50"}
                          placeholder="blur"
                          priority
                          blurDataURL
                        />
                      </div>
                      <div className={`${item.classnametext}`}>
                        <p>{item.imageText}</p>
                      </div>
                    </div>
                  ) : (
                    item.header && (
                      <div className={`${item.classname}`}>
                        <h3>{item.header}</h3>
                      </div>
                    )
                  )}
                </div>

                <div className={`${item.classitem}`}>
                  <p>{item.text}</p>
                </div>

                <div>
                  {item.buttontext ? (
                    <div>
                      <button
                        className="button"
                        onClick={HandleModal}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="buttontext">
                          <p>{item.buttontext}</p>
                        </div>
                        {item.buttonicon && (
                          <div>
                            <item.buttonicon />
                          </div>
                        )}
                      </button>
                      {showModal && (
                        <Modals ModalComponent={Form} setValue={setShowModal} />
                      )}
                    </div>
                  ) : item.linkarray ? (
                    <div className={`${item.classlinkbody}`}>
                      {item.linkarray?.map((items, key) => (
                        <div key={key} className={`${items.classbody}`}>
                          <Link href={items.link}>
                            <a>
                              <div className={`${items.classname}`}>
                                <div className={`${items.classlinkicon}`}>
                                  <items.linkIcon
                                    className={`${items.classicon}`}
                                  />
                                </div>
                                <div className={`${items.classitem}`}>
                                  <p>{items.linkText}</p>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`${item.classitem}`}>
                      <h4>{item.texti}</h4>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </FooterDiv>
  );
};

export default withTheme(FooterComponent);
