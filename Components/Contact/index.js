import React from "react";
import HeadingSection from "../../Universal-Components/HeadingSection";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Contact } from "./style";
import Header from "../../Universal-Components/header";
import ContactSect from "../../Universal-Components/contact_sect";
const ContactPageComp = () => {
  return (
    <Contact>
      <Header
        title={"Contact Us"}
        content={
          "Plavno provides you with highly skilled remote Senior IT Experts who form part of your team or form your company’s entire development team. Our team becomes your team enabling you to scale with the best result."
        }
      />
      <div className="contact-info">
        <p className="contact-info-p">
          No matter if you come to us with a ready project, idea, or only with
          doubts to dispel, we are always happy to help and we are not afraid of
          even the craziest questions and proposals. Just contact us!
        </p>
        <div className="line-through"></div>
        <div className="contact-address">
          <p>Call us or reach out with any preferable messenger</p>
          <p> phone number</p>
          <p> mail@gmail.com</p>
          <div className="icons">
            <Link href={"#"}>
              <a>
                <BsTwitter />
              </a>
            </Link>{" "}
            <Link href={"#"}>
              <a>
                <BsInstagram />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <BsLinkedin />
              </a>
            </Link>
            <Link href={"#"}>
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
