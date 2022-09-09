import styled from "styled-components";

export const HeadingSectionDiv = styled.div`
  /* height: 120vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 100px;
  font-family: "Poppins", sans-serif;

  .headingSectionDetails {
    padding: 0px 20px;

    h3 {
      text-align: center;
      font-size: 52px;
      font-weight: 800;
      font-style: normal;
      color: ${({ color, title }) =>
        title === "Partners" ? color.PrimaryColor : color.MajorColor};

      @media screen and (max-width: 500px) {
        font-size: 32px;
      }
    }

    h4 {
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      font-style: normal;
      color: ${({ color, title }) =>
        title === "Partners" ? color.PrimaryColor : color.MajorColor};

      @media screen and (max-width: 500px) {
        font-size: 24px;
      }
    }

    p {
      text-align: center;
      font-weight: 400;
      font-size: 19px;
      letter-spacing: 1px;
      opacity: 0.5;
      padding: 20px 0px;
      color: ${({ color, title }) =>
        title === "Partners" && color.PrimaryColor};
    }

    @media screen and (max-width: 950px) {
      width: 100%;
      padding: 0px;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0px;
  }

  @media screen and (max-width: 702px) {
    padding: 0px;
  }
`;
