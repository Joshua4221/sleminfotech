import styled from "styled-components";

export const ImageTextHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ layout }) => layout && "row-reverse"};
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  .side-img {
    width: 570px;
    height: inherit;
    left: 135px;
    top: 509px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 400px;
      @media screen and (max-width: 800px) {
        height: inherit;
      }
    }
    @media screen and (max-width: 700px) {
      height: inherit;
      margin: 1rem 0;
    }
  }
  .side-text {
    width: 605px;
    .text-div {
      width: 100%;
      margin-top: 4rem;
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 40px;
      }
      h2 {
        font-style: normal;
        font-weight: bolder;
        font-size: 32px;
        line-height: 38px;
      }
      .mutliContentContainer {
        p {
          margin: 1rem 0;
        }
      }
    }
    @media screen and (max-width: 700px) {
      .text-div {
        h2 {
          font-size: 25px;
        }
        p {
          font-size: 16px;
          text-align: justify;
        }
      }
    }
  }
`;
export const StyledNumText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5rem;
  /* background-color: red; */
  div {
    text-align: center;
    @media screen and (max-width: 600px) {
      margin: 2rem 0;
    }
    h1 {
      font-size: 60px;
      font-weight: 900;
      @media screen and (max-width: 600px) {
        font-size: 30px;
        font-weight: 700;
      }
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
export const StyledSideTextContainer = styled.div`
  background: ${(props) => props.bgColor || "navy"};
  color: ${(props) => props.txtColor || "#fff"};
  padding: 2rem 0;
`;
export const StyledIconDiv = styled.div`
  .cliped {
    clip-path: polygon(
      29.78% 30.34%,
      49.19% 20.12%,
      68.12% 32.38%,
      68.12% 54.92%,
      49.19% 66.01%,
      25.88% 52.35%
    );
    background-color: red;
    width: 60%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    h3 {
      font-size: 30px;
    }
  }
`;
