import styled from "styled-components";
import BGImage from "../../Asset/m-bg.png";
export const StyledAbout = styled.div`
  .backgroundImage {
    background: url(${BGImage.src});
    height: 80vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 2rem 0;
    @media screen and (max-width: 600px) {
      height: 30vh;
    }
  }
  .mainBenefit {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .iconContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60%;
    @media screen and (max-width: 600px) {
      width: 90%;
    }
    .iconText {
      width: 30%;
      background-color: blue;
      margin: 1rem 0;
      padding: 1rem;
      @media screen and (max-width: 600px) {
        width: 90%;
      }
    }
  }
`;
