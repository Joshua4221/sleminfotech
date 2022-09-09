import styled from "styled-components";

export const SoftwareServiceDiv = styled.div`
  .servicelist {
    padding: 40px 30px;
  }

  .serviceDetails {
    text-align: center;
    padding: 40px 0px;

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
  }
`;
