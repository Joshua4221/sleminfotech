import styled from "styled-components";

export const HomeDiv = styled.div`
  .heroSection {
    background-color: ${({ color }) => color.PrimColor};
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0px 0px 20px;
    font-family: "Poppins", sans-serif;

    .heroSectionDetails {
      width: 45%;
      /* height: 100vh; */
      padding: 0px 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .heroSectionDetailsbdy {
        .heroSectionDetailsbdyheader {
          h3 {
            font-size: 46px;
            font-weight: 900;
            font-style: normal;
            color: ${({ color }) => color.MajorColor};
          }

          p {
            font-weight: 400;
            font-size: 19px;
            letter-spacing: 1px;
            opacity: 0.5;
            padding: 20px 0px;
          }
        }

        .heroSectionDetailsbdyfooter {
          .heroSectionDetailsbdyfooterheader {
            padding: 10px 0px;
            button {
              border: none;
              outline: none;
              padding: 10px 12px;
              font-size: 17px;
              font-weight: 600;
              background-color: ${({ color }) => color.SectionColor};
              color: ${({ color }) => color.PrimaryColor};
              border-radius: 20px;
              cursor: pointer;
            }
          }

          .heroSectionDetailsbdyfootercontent {
            display: flex;
            justify-content: center;
            padding: 20px 0px;

            p {
              display: flex;
              align-items: center;
              font-size: 17px;
              font-weight: 300;
              color: ${({ color }) => color.MajorColor};
            }

            .heroSectionDetailsbdyfootercontenticon {
              display: flex;
              justify-content: center;
              z-index: 2;
              width: 28%;
            }
          }
        }
      }

      @media screen and (max-width: 950px) {
        padding: 50px 10px;
        padding-top: 120px;
        width: 100%;
      }
    }

    .heroSectionGraphics {
      width: 55%;
      height: 100%;
      padding: 0px 0px;

      .graphicsImage {
        z-index: 3;
      }

      @media screen and (max-width: 950px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 0px 0px 0px 30px;
    }

    @media screen and (max-width: 950px) {
      flex-direction: column;
      height: unset;
      padding: 0px;
    }
  }

  .homebody {
    .aboutSection {
      padding: 40px;
    }

    .partners {
      padding: 40px;
      background-color: ${({ color }) => color.MajorColor};

      .partnersbody {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .partnersbodyOne {
          width: 48%;

          p {
            margin: 0px 50px;
            width: 70%;
            font-weight: 400;
            font-size: 42px;
            color: ${({ color }) => color.PrimaryColor};

            @media screen and (max-width: 950px) {
              padding: 30px 10px;
            }

            @media screen and (max-width: 500px) {
              width: 100%;
              margin: 0px 10px;
            }
          }

          @media screen and (max-width: 950px) {
            width: 100%;
          }
        }

        .partnersbodyTwo {
          width: 48%;
          display: flex;
          flex-wrap: wrap;

          .partnersbodyTwoIcon {
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px 15px;

            @media screen and (max-width: 500px) {
              width: 100%;
            }
          }

          @media screen and (max-width: 950px) {
            width: 100%;
          }
        }

        @media screen and (max-width: 950px) {
          flex-direction: column;
        }
      }
    }

    .developer {
      padding: 40px;
    }
  }

  .websolution {
    padding: 40px;

    .webSolutionIncreament {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: ${({ color }) => color.InputColorBorder};

      .data {
        width: 16%;
        padding: 15px 0px;
      }

      .dataColor {
        background-color: ${({ color }) => color.FooterTextColor};
      }
    }

    .solution {
      display: flex;
      justify-content: space-between;

      .solutiondata {
        width: 16%;

        .solutionnum {
          padding: 10px 0px;
          margin: 10px 0px;
          color: ${({ color }) => color.MajorColor};
          p {
            font-size: 18px;
            font-weight: 500;
          }
        }

        .solutiontitle {
          padding: 10px 0px;
          margin: 10px 0px;
          color: ${({ color }) => color.MajorColor};
          p {
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }

    .developedProjectbody {
      padding: 40px 0px;
      .developedProjectbodydata {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .developedProjectbodydataimage {
          width: 46%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* padding: 0px 180px; */

          .developedProjectbodydataimagedata {
            box-shadow: -20px 0px 40px 50px rgba(240, 247, 255, 0.302);
            width: 50%;
            border: 1px solid red;
            border-radius: 30px;
          }
        }

        .developedProjectbodydatadetails {
          width: 48%;

          .details {
            font-size: 52px;
            font-weight: 400;
            color: ${({ color }) => color.MajorColor};
          }

          .detailspar {
            font-size: 20px;
            padding: 20px 0px;
            font-weight: 500;
            width: 80%;
          }
        }
      }
    }
  }
  .technology {
    padding: 40px;
  }
`;
