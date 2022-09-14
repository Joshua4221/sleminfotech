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
  .mainText {
    color: #a34786;
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
      /* background-color: #a34786; */
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      margin: 1rem 0;
      padding: 1rem;
      color: #a34786;
      border-radius: 10px;
      :hover {
        transform: scale(1.05);
        transition-duration: 1s;
        /* background-color: #a3478667; */
      }
      h1 {
        font-size: 22px;
        margin: 1rem 0;
      }
      @media screen and (max-width: 600px) {
        width: 90%;
      }
    }
  }
`;
