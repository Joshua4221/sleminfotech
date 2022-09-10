import styled from "styled-components";

export const CareerDiv = styled.div`
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
      @media screen and (max-width: 702px) {
        width: 100%;
      }
    }

    .it-hero-image {
      width: 40%;
      padding: 20px 0px;

      @media screen and (max-width: 702px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 702px) {
      flex-direction: column;
      height: unset;
      margin-top: 50px;
    }
  }

  .aboutBody {
    text-align: center;
    padding: 40px 30px;

    .aboutDescription {
      width: 69%;
      margin: 0 auto;
      p {
        font-size: 20px;
        font-weight: 500;
        color: ${({ color }) => color.MajorColor};
      }

      @media screen and (max-width: 702px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 702px) {
      padding: 40px 10px;
    }
  }

  .technology {
    padding: 40px 30px;

    .techControlerbody {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .techControlerMain {
        background-color: ${({ color }) => color.InputColorBorder};
        width: 60px;
        height: 10px;
        border-radius: 8px;
        margin: 0px 10px;
        cursor: pointer;

        @media screen and (max-width: 702px) {
          width: 30px;
        }
      }

      .techControler {
        background-color: ${({ color }) => color.FooterTextColor};
      }
    }
    @media screen and (max-width: 702px) {
      padding: 40px 10px;
    }
  }

  .serviceDetails {
    text-align: center;
    padding: 40px 30px;

    .ServiceConnect {
      h2 {
        color: ${({ color }) => color.MajorColor};
      }
    }

    .ServiceContent {
      font-size: 18px;
      font-weight: 500;
      color: ${({ color }) => color.SecondaryColor};
      opacity: 0.5;
      padding: 10px 0px;
    }

    .ServiceLink {
      margin: 20px 0px;
      padding: 10px 15px;
      border: none;
      outline: none;
      background-color: ${({ color }) => color.SectionColor};
      border-radius: 6px;
      cursor: pointer;

      .ServiceLinkBody {
        display: flex;
        justify-content: center;
        align-items: center;

        .ServiceLinkText {
          color: ${({ color }) => color.PrimaryColor};
          font-size: 17px;
          font-weight: 500;
          padding: 0px 0px 0px 10px;
        }
      }
    }

    @media screen and (max-width: 702px) {
      padding: 40px 10px;
    }
  }
`;
