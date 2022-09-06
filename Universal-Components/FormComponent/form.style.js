import styled from "styled-components";

export const FormDiv = styled.div`
  width: 100%;
  .inputbody {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0px;

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: ${({ color, sign }) =>
        sign ? color.PrimaryColor : color.SecondaryColor};
      text-align: left;
      /* border: 1px solid red; */
    }

    .formFlex {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid ${({ color }) => color.InputColorBorder};
      border-radius: 8px;
      margin-top: 5px;
      background-color: ${({ color, sign }) => sign && color.InputColorBorder};

      &:hover {
        border: 1px solid ${({ color }) => color.SectionColor};
      }
    }

    .formFlexT {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid ${({ color }) => color.InputColorBorder};
      border-radius: 8px;
      margin-top: 5px;

      &:hover {
        border: 1px solid ${({ color }) => color.SectionColor};
      }
    }

    .iconlayout {
      display: flex;
      justify-content: center;
      width: 10%;
      padding: 7px 0px;

      .formIcon {
        font-size: 20px;
        color: ${({ color, sign }) =>
          sign ? color.SectionColor : color.SecondaryColor};
      }
    }

    .inputlayout {
      width: 90%;

      .input {
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        padding: 10px 12px;
        border-radius: 6px;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ color, sign }) =>
          sign ? color.SectionColor : color.SecondaryColor};
      }
    }
  }

  .submitbody {
    padding: ${({ sign }) => !sign && "15px 0px"};
    width: ${({ sign }) => (sign ? "100%" : "50%")};

    .submit {
      width: 100%;
      border-radius: 6px;
      padding: 8px 0px;
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.025em;
      font-size: 1rem;
      line-height: 1.5rem;
      cursor: pointer;
      color: ${({ color }) => color.PrimaryColor};
      background-color: ${({ color }) => color.SectionColor};
    }
  }
`;

export const MultipleInputDiv = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;

  .mulitple {
    position: relative;
    width: ${({ Arr }) => `calc(100% / ${Arr + 0.1})`};

    .mulitples {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .labelclass {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        padding: 5px 0px;
        color: ${({ color }) => color.SecondaryColor};
        text-align: left;
      }

      .formFlex {
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 8px;
        border: 1px solid ${({ color }) => color.InputColorBorder};

        &:hover {
          border: 1px solid ${({ color }) => color.SectionColor};
        }
      }

      .iconlayout {
        display: flex;
        justify-content: center;
        width: 20%;

        .formIcon {
          font-size: 20px;
          color: ${({ color }) => color.SecondaryColor};
        }
      }

      .inputlayout {
        width: 80%;

        .multiple-input {
          width: 100%;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          padding: 10px 12px;
          color: ${({ color }) => color.SecondaryColor};
          border: none;
          outline: none;
          background-color: transparent;
        }
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
