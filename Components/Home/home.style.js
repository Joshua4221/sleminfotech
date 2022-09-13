import styled, { keyframes } from "styled-components";

const top = keyframes`
  from{top:-300px;opacity:0} to{top:0;opacity:1}
`;

const bottom = keyframes`
  from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}
`;
const opac = keyframes`
  from{opacity:0} to{opacity:1}
`;

const left = keyframes`
  from{
    left:-50px; 
    opacity:0.5
  } 
  to{
    left:0; 
    opacity:1
  }
`;

const right = keyframes`
  from{
    right:-50px; 
    opacity:0
  } 
  to{
    right:0; 
    opacity:1
  }
`;

const fade = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`;

const zoom = keyframes`
  from{
    transform:scale(0)
  } 
  to{
    transform:scale(1)
  }
`;

export const HomeDiv = styled.div`
  .heroSection {
    background-color: ${({ color }) => color.PrimColor};
    height: 100vh;
    display: flex;
    justify-content: space-between;
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
      width: 50%;
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

      @media (max-width: 500px) {
        padding: 40px 10px;
      }
    }

    .partners {
      padding: 40px;
      background-color: ${({ color }) => color.SectionColor};

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
          justify-content: center;
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

      @media (max-width: 500px) {
        padding: 40px 10px;
      }
    }

    .developer {
      padding: 40px;
      @media (max-width: 500px) {
        padding: 40px 10px;
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
          background-color: ${({ color }) => color.SectionColor};
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

        @media (max-width: 702px) {
          display: none;
        }
      }

      .developedProjectbody {
        padding: 40px 0px;
        .developedProjectbodydata {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: ${fade} 2s ease-out;

          .developedProjectbodydataimage {
            width: 46%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* padding: 0px 180px; */

            .developedProjectbodydataimagedata {
              box-shadow: -20px 0px 40px 50px rgba(240, 247, 255, 0.302);
              width: 50%;
              border-radius: 30px;
            }

            @media (max-width: 702px) {
              width: 100%;
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

              @media (max-width: 702px) {
                width: 100%;
              }
            }

            @media (max-width: 702px) {
              width: 100%;
              text-align: center;
            }
          }

          @media (max-width: 702px) {
            flex-direction: column;
          }
        }

        @media (max-width: 500px) {
          padding: 40px 10px;
        }
      }

      @media (max-width: 500px) {
        padding: 40px 10px;
      }
    }

    .technology {
      padding: 40px;

      .techControlerItems {
        animation: ${fade} 2s ease-out;
      }

      .techControlerbody {
        display: flex;
        justify-content: center;
        align-items: center;

        .techControlerMain {
          background-color: ${({ color }) => color.InputColorBorder};
          width: 60px;
          height: 10px;
          border-radius: 8px;
          margin: 0px 10px;
          cursor: pointer;
        }

        .techControler {
          background-color: ${({ color }) => color.SectionColor};
        }
      }

      @media (max-width: 500px) {
        padding: 40px 10px;
      }
    }

    .clientProject {
      padding: 40px;
      // position: relative;

      .clientProjectBody {
        position: relative;

        &:hover {
          .clientShowDirection {
            display: flex;
          }
        }

        .clientShowDirection {
          position: absolute;
          width: 100%;
          top: 50%;
          z-index: 10;
          display: none;
          justify-content: space-between;
          align-items: center;

          @media screen and (max-width: 720px) {
            display: flex;
          }

          .clientShowDirectionLeft {
            display: flex;
            align-items: center;
            cursor: pointer;
            border: 3px solid ${({ color }) => color.GoldColor};

            .clientShowDirectionLeftIcon {
              color: ${({ color }) => color.GoldColor};
              font-size: 32px;
            }
          }

          .clientShowDirectionRight {
            display: flex;
            align-items: center;
            cursor: pointer;
            border: 3px solid ${({ color }) => color.GoldColor};

            .clientShowDirectionRightIcon {
              color: ${({ color }) => color.GoldColor};
              font-size: 32px;
            }
          }
        }

        .clientBody {
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: ${zoom} 1s ease-out;

          .clientText {
            width: 48%;

            @media screen and (max-width: 950px) {
              width: 100%;
            }
          }

          .clientImage {
            width: 45%;

            @media screen and (max-width: 950px) {
              width: 100%;
            }
          }

          @media screen and (max-width: 950px) {
            flex-direction: column;
            justify-content: flex-start;
          }
        }
      }

      @media (max-width: 950px) {
        padding: 40px 10px;
      }
    }
  }
`;
