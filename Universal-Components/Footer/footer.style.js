import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: ${({ color }) => color.SecondaryColor};

  .firstlayoutname {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 90px;

    .firstClassbody {
      width: 35%;
      color: ${({ color }) => color.MajorColor};
      padding: 0px 11px;

      .firstClassname {
        display: flex;
        align-items: center;
        padding: 0px 5px 0px 0px;

        .firstClassnameimage {
          width: 70px;
        }

        .firstClassnametext {
          p {
            font-size: 28px;
            font-weight: 900;
            color: ${({ color }) => color.PrimaryColor};
            font-family: "MuseoModerno", cursive;
            word-spacing: 0.1rem;
            letter-spacing: -0.12rem;
          }
        }
      }

      .firstClassitem {
        padding: 10px 0px;
        font-size: 18px;
        font-weight: 700;
        color: ${({ color }) => color.PrimaryColor};
      }

      .firstClasslinkbody {
        color: ${({ color }) => color.PrimaryColor};
        display: flex;
        align-items: center;
        padding: 15px 0px;
        /* border: 1px solid red; */

        .linkbody {
          margin-right: 20px;
          /* border: 1px solid green; */

          .linkclass {
            /* display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid green; */

            .linkicon {
              border: 1px solid ${({ color }) => color.InputColorBorder};
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 8px 10px;
              border-radius: 4px;

              &:hover {
                background-color: ${({ color }) => color.SectionColor};
                border: 1px solid ${({ color }) => color.SectionColor};
              }
            }
          }
        }
      }

      @media (max-width: 920px) {
        width: 100%;
      }
    }

    .secondClassbody {
      width: 20%;
      color: ${({ color }) => color.PrimaryColor};
      padding: 0px 10px;

      .secondClassname {
        padding: 10px 0px;

        h3 {
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1.5rem;
        }
      }

      .secondClasslinkbody {
        .linkbodyText {
          a {
            font-size: 18px;

            .linkclassText {
              display: flex;
              align-items: center;
              margin: 15px 0px;
              opacity: 0.8;

              .linkiconText {
                display: flex;
                justify-content: center;
                margin-right: 10px;
              }

              .linktextText {
                font-size: 16px;
              }
            }
          }
        }
      }

      @media (max-width: 920px) {
        width: 30%;
      }

      @media (max-width: 720px) {
        width: 50%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .thirdClassbody {
      width: 25%;
      color: ${({ color }) => color.PrimaryColor};
      padding: 0px 10px;

      .thirdClassname {
        padding: 10px 0px;

        h3 {
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1.5rem;
        }
      }
      .button {
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        background-color: ${({ color }) => color.SectionColor};
        color: ${({ color }) => color.PrimaryColor};
        padding: 10px 12px;
        margin: 20px 0px;
        border-radius: 8px;

        .buttontext {
          margin-right: 10px;
          p {
            font-size: 16px;
            font-weight: 700;
          }
        }
      }

      .thirdClassitem {
        color: ${({ color }) => color.PrimaryColor};
        padding: 11px 0px;
      }

      @media (max-width: 920px) {
        width: 30%;
      }

      @media (max-width: 720px) {
        width: 60%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    @media (max-width: 500px) {
      /* display: block; */
      padding: 50px 10px;
    }
  }

  .secondlayout {
    border-top: 1px solid ${({ color }) => color.InputColorBorder};
    padding: 50px 90px;

    .secondlayoutname {
      color: ${({ color }) => color.PrimaryColor};
    }

    @media (max-width: 500px) {
      text-align: center;
      padding: 50px 10px;
    }
  }
`;
