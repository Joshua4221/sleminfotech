import styled from "styled-components";

export const HeroSubSectionDiv = styled.div`
  width: 100%;
  height: 60vh;
  /* background-image: linear-gradient(
    to right,
    #4ba1ea 10%,
    #47d7ed 40%,
    #4ba1ea
  ); */
  background-color: ${({ color }) => color.SectionColor};
  display: flex;
  align-items: center;
  padding: 30px;

  .heroBody {
    .heroHeader {
      h3 {
        color: ${({ color }) => color.PrimaryColor};
        font-size: 64px;
        font-weight: 900;

        @media screen and (max-width: 500px) {
          font-size: 42px;
        }
      }
    }

    .herobuttonarray {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px 0px;

      .herobuttonbody {
        margin: 20px 30px 0px 0px;
        button {
          cursor: pointer;
          border: 1px solid ${({ color }) => color.PrimaryColor};
          outline: none;
          background-color: transparent;
          padding: 10px 12px;
          border-radius: 15px;
          color: ${({ color }) => color.PrimaryColor};
        }

        @media screen and (max-width: 500px) {
          margin: 20px 10px 0px 0px;
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

      @media screen and (max-width: 800px) {
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 720px) {
    height: unset;
    padding-top: 80px;
  }
`;
