import styled from "styled-components";

export const DropDownDiv = styled.div`
  /* text-align: center; */
  background-color: ${({ color }) => color.PrimColor};
  position: absolute;
  left: ${({ details }) => details === "about" && "-20%"};
  display: ${({ details }) => (details === "about" ? "flex" : "block")};
  justify-content: center;
  flex-wrap: ${({ details }) => details === "about" && "wrap"};
  width: ${({ details }) => details === "about" && "100%"};
  margin: 0px auto;
  padding: ${({ details }) => (details === "about" ? "40px 10px" : "10px")};

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
        color: ${({ color }) => color.SecondaryColor};
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
