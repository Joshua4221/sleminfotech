import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ modal }) => (modal ? "100%" : "40%")};

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

  @media screen and (max-width: 827px) {
    width: 100%;
    margin: 1rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 1rem 0;
  }
`;
