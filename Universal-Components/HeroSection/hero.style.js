import styled from "styled-components";

export const HeroSectionDiv = styled.div`
  background-image: url(${({ bg }) => bg.src});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  /* opacity: 0.9; */
  height: 65vh;
  margin-bottom: 90px;

  .heroBody {
    background-color: rgb(22, 28, 45, 0.7);
    height: 100%;
    /* position: relative; */

    .header {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      height: 65%;

      h3 {
        margin: auto;
        color: ${({ color }) => color.MajorColor};
        font-size: 42px;
        font-weight: 600;
        padding-top: 70px;
        letter-spacing: 2px;
      }
    }

    .heroDetails {
      /* position: absolute; */
      /* top: 2rem; */

      svg {
        z-index: 100;
        height: 19rem;

        @media (max-width: 400px) {
          /* height: 10rem; */
        }
      }
    }
  }
`;
