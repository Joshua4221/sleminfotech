import styled from "styled-components";

export const HeroSubSectionDiv = styled.div`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
    to right,
    #4ba1ea 10%,
    #47d7ed 40%,
    #4ba1ea
  );
  display: flex;
  align-items: center;
  padding: 30px;

  .heroBody {
    .heroHeader {
      h3 {
        color: ${({ color }) => color.PrimaryColor};
        font-size: 64px;
        font-weight: 900;
      }
    }

    .herobuttonarray {
      display: flex;
      align-items: center;
      margin: 20px 0px;

      .herobuttonbody {
        margin-right: 30px;
        button {
          cursor: pointer;
          border: 1px solid ${({ color }) => color.PrimaryColor};
          outline: none;
          background-color: transparent;
          padding: 10px 12px;
          border-radius: 15px;
          color: ${({ color }) => color.PrimaryColor};
        }
      }
    }

    .heroText {
      width: 60%;
      padding: 5px 0px;
      p {
        font-size: 20px;
        font-weight: 600;
        color: ${({ color }) => color.PrimaryColor};
      }
    }
  }
`;
