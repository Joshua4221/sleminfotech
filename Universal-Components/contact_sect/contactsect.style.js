import styled from "styled-components";
import { ColorLightMode } from "../../lib/theme/color";
export const StyledContactSect = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;
  color: ${ColorLightMode.PrimColor};
  background-color: ${ColorLightMode.SectionColor};
  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
  .text {
    h1 {
      font-size: 46px;
      font-weight: 900;
      margin: 1rem 0;
    }
    p {
      font-weight: 900;
      font-size: 20px;
      width: 60%;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 40%;
    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 1rem 0;
    }
  }
  .box {
    /* background-color: orange; */
    @media screen and (max-width: 600px) {
      width: 90%;
    }
    color: white;
    .textContent {
      /* background-color: white; */
      border-bottom: 0.5px solid white;
      margin: 1rem 0;
    }
    .btn {
      padding: 0.6rem 1rem;
      @media screen and (max-width: 600px) {
        /* width: 90%; */
        display: flex;
        margin: 1rem auto;
        text-align: center;
      }
    }
    label {
      color: white;
    }
  }
`;
