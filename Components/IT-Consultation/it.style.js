import styled from "styled-components";

export const ITConstulationDiv = styled.div`
  .it-hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
    padding: 0px 30px;
    background-color: ${({ color }) => color.SectionColor};
    color: ${({ color }) => color.PrimaryColor};
    padding-top: 50px;

    .it-hero-content {
      width: 50%;

      .it-hero-content-statement {
        h2 {
          font-size: 42px;
          font-family: "Poppins", sans-serif;
          font-weight: 800;
          line-height: 45px;
        }

        .it-hero-content-statement-para {
          font-size: 20px;
          font-weight: 700;
          padding: 10px 0px;
        }

        .it-hero-content-statement-discription {
          padding: 10px 0px;

          p {
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
      .it-hero-content-form {
        margin: 20px 0px;

        .it-hero-content-form-button {
          display: flex;
          border: none;
          outline: none;
          align-items: center;
          justify-content: center;
          padding: 12px 15px;
          border-radius: 8px;
          background-color: ${({ color }) => color.GoldColor};
          color: ${({ color }) => color.PrimaryColor};
          cursor: pointer;

          p {
            font-size: 16px;
            font-weight: 600;
            margin-right: 10px;
          }

          .it-hero-content-form-icon {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    .it-hero-image {
      width: 40%;

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 1060px) {
      padding-top: 80px;
    }

    @media screen and (max-width: 990px) {
      padding-top: 80px;
      height: unset;
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  .consultancy {
    padding: 40px 30px;
  }

  .conslutancyType {
    padding: 40px 30px;
  }
`;
