import styled from "styled-components";

export const ImageTextHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ layout }) => layout && "row-reverse"};
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  .side-img {
    width: ${({ projects }) => (projects ? "48%" : "50%")};
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

    @media screen and (max-width: 920px) {
      width: 100%;
    }
    @media screen and (max-width: 700px) {
      height: inherit;
      margin: 1rem 0;
    }
  }
  .side-text {
    width: ${({ projects }) => (projects ? "48%" : "38%")};
    .text-div {
      width: 100%;
      margin-top: 4rem;

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: #1b2d6b;
        white-space: pre-line;
      }
      .paraContent {
        color: #fff;
      }
      h2 {
        color: #1b2d6b;
        font-style: normal;
        font-weight: 800;
        font-size: 42px;
        line-height: 38px;
        margin-bottom: 30px;
      }
      .mutliContentContainer {
        p {
          margin: 1rem 0;
        }
      }
    }

    @media screen and (max-width: 920px) {
      width: 100%;
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
  color: #8d3d72;
  /* background-color: red; */
  div {
    text-align: center;
    color: #a34786;
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
  background: ${(props) => props.bgColor || "#8D3D72"};
  color: ${(props) => props.txtColor || "#fff"};
  padding: 2rem 0;
`;
export const StyledIconDiv = styled.div`
  .cliped {
    background-image: ${(props) => props.bG || "gray"};
    width: 30%;
    height: 60px;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    h3 {
      font-size: 30px;
    }
  }
`;
