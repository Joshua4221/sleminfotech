import styled from "styled-components";

export const DropDownDiv = styled.div`
  /* text-align: center; */
  background-color: ${({ color }) => color.SectionColor};
  position: absolute;
  left: ${({ details }) => (details === "service" ? "14.89rem" : "6.79rem")};
  display: ${({ details }) => (details === "about" ? "flex" : "block")};
  justify-content: center;
  flex-wrap: ${({ details }) => details === "about" && "wrap"};
  width: ${({ details }) => details === "about" && "100%"};
  margin: 0px auto;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.193);
  padding: ${({ details }) => (details === "about" ? "40px 10px" : "10px")};
  border-radius: 0px 0px 8px;

  .secondlayoutbodydropdownitem {
    padding: 10px 15px;
    margin: ${({ details }) => details === "about" && "0px 10px"};
    border-bottom: 1px solid ${({ color }) => color.PrimColor};
    width: 210px;
    background-color: ${({ color }) => color.SecondColor};
    white-space: nowrap;
    cursor: pointer;

    .secondlayoutnamedropdownitem {
      p {
        color: ${({ color }) => color.PrimaryColor};
        font-weight: 700;
      }
    }

    @media screen and (max-width) {
    }
  }

  @media screen and (max-width: 950px) {
    /* flex-direction: column; */
    position: unset;
    background-color: transparent;
    width: 100%;
    padding: ${({ details }) =>
      details === "about" ? "10px 30px" : "5px 30px"};
    justify-content: space-between;
  }

  @media screen and (max-width: 285px) {
    padding: ${({ details }) =>
      details === "about" ? "10px 10px" : "5px 10px"};
  }
`;
