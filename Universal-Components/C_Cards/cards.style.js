import styled from "styled-components";

export const CCardDiv = styled.div`
  margin: 20px 0px;
  /* margin-top: 40px; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 0px;
  text-align: center;

  .ccardbody {
    width: ${({ details, projects, service }) =>
      details ? "20%" : projects ? "100%" : service ? "32%" : "48%"};
    text-align: ${({ details, service }) =>
      details ? "center" : service ? "center" : "left"};
    color: ${({ color }) => color.MajorColor};
    padding: ${({ about }) => (about ? "20px 25px" : "20px 10px")};
    border-radius: 20px;
    margin: 10px 5px;
    background-color: ${({ color, details }) =>
      details && color.InputColorBorder};
    /* box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.151); */
    border: ${({ projects }) => !projects && "1px solid rgba(0, 0, 0, 0.151)"};

    &:hover {
      box-shadow: ${({ projects }) =>
        !projects && "0px 3px 6px 0px rgba(0, 0, 0, 0.151)"};
    }

    .ccardIconbody {
      background-color: ${({ color, service }) =>
        service ? color.InputColorBorder : color.BorderColor};
      width: 80px;
      margin: ${({ about }) => (about ? "20px 0px" : "20px auto")};
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.151);
      /* display: flex;
      justify-content: center; */

      .ccardIcon {
        color: ${({ color }) => color.SectionColor};
        font-size: 32px;
      }
    }

    .ccardDetails {
      width: ${({ about }) => (about ? "100%" : "80%")};
      margin: ${({ about }) => (about ? "0px" : "0px auto")};

      .header {
        font-family: ${({ projects }) => projects && "'MuseoModerno', cursive"};
        margin-bottom: ${({ projects }) => projects && "40px"};
        padding: 10px 2px;
        font-size: ${({ projects }) => (projects ? "5rem" : "1.25rem")};
        font-weight: 800;
        line-height: ${({ projects }) => (projects ? "5rem" : "1.75rem")};
      }

      .subHeader {
        padding: 10px 2px;
        white-space: ${({ projects }) => projects && "pre-wrap"};
        margin: ${({ projects }) => projects && "20px 0px"};
        opacity: ${({ projects }) => projects && "0.5"};
        font-size: ${({ projects }) => (projects ? "1.4rem" : "1.25rem")};
        font-weight: 500;
        line-height: 1.75rem;
      }

      p {
        opacity: ${({ projects }) => (projects ? "unset" : "0.55")};
        font-size: ${({ projects }) => projects && "20px"};
        margin-bottom: ${({ projects }) => projects && "60px"};
        line-height: 1.625rem;
        padding: 10px 0px;
      }

      .ccardLink {
        /* width: 60%; */
        a {
          .ccardLinkBody {
            display: flex;
            align-items: center;

            &:hover {
              gap: 10px;
            }

            h3 {
              font-size: 16px;
            }

            .ccardLinkIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px;
              margin: 0px 10px;
              border: 1px solid ${({ color }) => color.MajorColor};
              border-radius: 50%;
            }
          }
        }

        /* @media screen and (max-width: 880px) {
          width: 70%;
        } */
      }
    }

    @media (max-width: 950px) {
      width: 45%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 765px) {
    padding: 30px 10px;
  }

  @media (max-width: 414px) {
    padding: 30px 10px;
  }
`;
