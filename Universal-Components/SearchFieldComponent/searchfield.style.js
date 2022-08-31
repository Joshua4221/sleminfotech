import styled from "styled-components";

export const SearchfieldDiv = styled.div`
  padding: 5px 25px;

  @media (max-width: 290px) {
    border: 1px solid "#17212F";
    padding: 5px 10px;
  }

  .searchicons {
    color: ${({ Color }) => Color.SecondaryColor};
  }
`;

export const InputF = styled.input`
  color: ${({ Color }) => Color.SecondaryColor};
  width: 95%;
  width: ${({ view }) => (view === "addon" ? "95%" : "450px")};
  background-color: transparent;
  font-size: 16px;
  padding: 6px 14px;
  border: 1px solid transparent;
  outline: none;
  margin: 0px 10px;
`;

export const InputDiv = styled.div`
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border: 1px solid ${({ Color }) => Color.SecondaryColor};

  @media (max-width: 414px) {
    width: 300px;
  }

  @media (max-width: 290px) {
    width: 230px;
  }
`;
