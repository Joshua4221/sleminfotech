import { ModalStyles } from "./modal.style";
import { CgCloseO } from "react-icons/cg";
import { withTheme } from "styled-components";

const Modals = ({ ModalComponent, setValue, theme }) => {
  const HandleClick = () => {
    setValue(false);
  };

  return (
    <ModalStyles color={theme}>
      <div className={"modal-content"}>
        <CgCloseO className={"icon"} onClick={HandleClick} />
        <div className={"modal-component"}>
          <ModalComponent className="components" modal="modal" />
        </div>
      </div>
    </ModalStyles>
  );
};

export default withTheme(Modals);
