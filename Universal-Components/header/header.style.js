import styled from "styled-components";
import { ColorLightMode } from "../../lib/theme/color";

export const StyledHeader = styled.div`
  background-color: ${ColorLightMode.MajorColor};
  padding: 10rem 5rem;
  color: #fff;
  @media screen and (max-width: 600px) {
    padding: 5rem 1rem;
  }
  .text {
    width: 50%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  h1 {
    font-size: 46px;
    font-weight: 900;
    margin: 1rem 0;
    @media screen and (max-width: 600px) {
      font-size: 26px;
      font-weight: 700;
      text-align: center;
    }
  }
`;
