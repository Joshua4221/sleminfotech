import styled from "styled-components";

export const ITConsultingCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .cardArray {
    width: 24%;
    margin: 15px 0px;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.151);
    color: ${({ color }) => color.MajorColor};

    .cardHeader {
      text-align: center;
      padding: 10px 0px;

      p {
        font-size: 22px;
        font-weight: 800;
      }
    }

    .cardDescription {
      padding: 10px 0px;
      p {
        font-size: 16px;
        font-weight: 700;
      }
    }

    .arrayBody {
      padding: 10px 0px;

      .arrayHeader {
        font-weight: 600;
      }

      .arryContent {
        padding: 5px 0px;

        .arrayCard {
          display: flex;
          padding: 5px 0px;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 48%;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
