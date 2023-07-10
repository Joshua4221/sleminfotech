import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Contact } from "./style";
import ContactSect from "../../Universal-Components/contact_sect";
import HeroSubSection from "../../Universal-Components/HeroSubSection";
import { ContactHeroArray } from "../../Util/contact";

const ContactPageComp = () => {
  return (
    <Contact>
      <HeroSubSection herosubsectionarray={ContactHeroArray} />
      <div className="contact-info">
        <p className="contact-info-p">
          Contact Us For Ready Product, Modification, Management, New idea, Training ETC. We Are Always Happy To Help And We Are Not
          Afraid Of Even The Craziest Questions And Proposals. Just Contact Us!
        </p>
        <div className="line-through"></div>
        <div className="contact-address">
          <p>Contact Us For Business</p>
          <p> 08103568291</p>
          <p>08085380445</p>
          <p> contact@zeespacenigeria.com</p>
          <div className="icons">
            <Link href={"www.twitter.com/zeespacenigeria"}>
              <a>
                <BsTwitter />
              </a>
            </Link>{" "}
            <Link href={"www.instagram.com/zeespacenigeria"}>
              <a>
                <BsInstagram />
              </a>
            </Link>
            <Link href={"www.linkedin.com/company/zeespace-nigeria"}>
              <a>
                <BsLinkedin />
              </a>
            </Link>
            <Link href={"www.facebook.com/zeespacehub"}>
              <a>
                <FaFacebookF />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <ContactSect />
    </Contact>
  );
};

export default ContactPageComp;
