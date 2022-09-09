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
`;
