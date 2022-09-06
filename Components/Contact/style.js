import styled from "styled-components";
export const Contact = styled.div`
  .contact-info {
    display: flex;
    /* background-color: navy; */
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 5rem 0;
    padding: 10px 5px;
    font-size: 20px;
    color: navy;
    @media screen and (max-width: 600px) {
      padding: 5px 2rem;
    }
    .contact-info-p {
      width: 40%;
      @media screen and (max-width: 600px) {
        width: 100%;
        text-align: justify;
      }
    }
    .line-through {
      background-color: navy;
      width: 0.1%;
      height: 40vh;
      @media screen and (max-width: 600px) {
        width: 100%;
        height: 1px;
        margin: 1rem 0;
      }
    }
    .contact-address p {
      margin-bottom: 3rem;
    }
    .contact-address .icons {
      display: flex;
      justify-content: space-between;
      width: 50%;
      color: navy;
    }
  }
`;
