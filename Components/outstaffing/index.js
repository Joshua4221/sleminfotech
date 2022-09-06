import React from "react";
import Header from "../../Universal-Components/header";
import { ImageTextContainer } from "../../Universal-Components/image_text";
import { outStaffArr } from "../../Util/outstaff";
import ContactSect from "../../Universal-Components/contact_sect";
const OutStaffComp = () => {
  return (
    <div>
      <Header
        title={"Outstaffing"}
        content={
          "Plavno provides you with highly skilled remote Senior IT Experts who form part of your team or form your company’s entire development team. Our team becomes your team enabling you to scale with the best result."
        }
      />
      <ImageTextContainer imageTextArr={outStaffArr} />
      <ContactSect />
    </div>
  );
};

export default OutStaffComp;
