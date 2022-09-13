import styled from "styled-components";

export const ModalStyles = styled.div`
  z-index: 20;
  padding: 50px 0px 0px 0px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    /* background-color: red; */
    /* width: 90%; */
    height: 80%;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-component {
      width: 50%;
      background-color: ${({ color }) => color.SectionColor};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 20px;
      border-radius: 8px;

      .components {
        width: 100%;
        border: 1px solid red;
      }

      @media screen and (max-width: 600px) {
        width: 80%;
      }

      @media screen and (max-width: 320px) {
        width: 90%;
      }
    }

    .icon {
      z-index: 4;
      color: #fff;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 42px;
      cursor: pointer;
      margin: 20px;
    }
  }
`;
