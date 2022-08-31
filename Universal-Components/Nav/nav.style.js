import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => color.PrimaryColor};
  padding: 0px 20px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.185);
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;

  .firstLayout {
    .firstlayoutbody {
      .firstlayoutname {
        cursor: pointer;
        width: 65px;
      }
    }
    @media screen and (max-width: 950px) {
      padding: 0px 20px;
    }

    @media screen and (max-width: 280px) {
      padding: 0px 5px;
    }
  }

  .secondLayout {
    display: flex;
    align-items: center;
    position: relative;

    .secondlayoutbody {
      .secondlayoutname {
        a {
          .secondlayoutitem {
            padding: 10px 15px;
            margin: 0px 10px;
            color: ${({ color }) => color.SecondaryColor};
            cursor: pointer;

            p {
              font-weight: 700;
              font-size: 16px;
            }
          }

          &:hover {
            .secondlayoutitem {
              background-color: ${({ color }) => color.PrimColor};
              color: ${({ color }) => color.SecondColor};
            }
          }
        }
      }

      @media screen and (max-width: 950px) {
        width: 100%;

        .secondlayoutname {
          a {
            .secondlayoutitem {
              color: ${({ color }) => color.PrimaryColor};
            }

            &:hover {
              background-color: ${({ color }) => color.PrimaryColor};
              color: ${({ color }) => color.PrimColor};
            }
          }
        }
      }
    }

    .secondlayoutbodydropdown {
      .secondlayoutnamedropdown {
        .secondlayoutitemdropdown {
          padding: 10px 15px;
          margin: 0px 10px;
          color: ${({ color }) => color.SecondaryColor};
          cursor: pointer;

          p {
            font-weight: 700;
            font-size: 16px;
          }

          &:hover {
            background-color: ${({ color }) => color.PrimColor};
            color: ${({ color }) => color.SecondColor};
          }
        }

        .itemdropdown {
          display: none;
          /* display: flex; */
        }

        &:hover {
          .itemdropdown {
            display: block;
          }
        }
      }

      @media screen and (max-width: 950px) {
        width: 100%;

        .secondlayoutnamedropdown {
          .secondlayoutitemdropdown {
            color: ${({ color }) => color.PrimaryColor};

            &:hover {
              background-color: ${({ color }) => color.PrimaryColor};
              color: ${({ color }) => color.PrimColor};
            }
          }
        }
      }
    }

    .thirdlayoutbody {
      padding: 10px 15px;
      margin: 0px 10px;
      cursor: pointer;

      .thirdlayoutname {
        display: flex;
        justify-content: center;
        cursor: pointer;

        .thirdlayoutitem {
          color: ${({ color }) => color.SecondaryColor};
          font-size: 18px;
          font-weight: 800;
        }
      }

      &:hover {
        background-color: ${({ color }) => color.PrimColor};

        .thirdlayoutname {
          .thirdlayoutitem {
            color: ${({ color }) => color.SecondColor};
          }
        }
      }

      @media screen and (max-width: 950px) {
        .thirdlayoutname {
          .thirdlayoutitem {
            color: ${({ color }) => color.PrimaryColor};
          }
        }
      }
    }

    .fourlayoutbody {
      position: absolute;
      top: 3rem;
      right: 0px;
      background-color: ${({ color }) => color.PrimaryColor};

      @media screen and (max-width: 950px) {
        top: 14rem;
      }
    }

    @media screen and (max-width: 950px) {
      display: ${({ dropdown }) => (dropdown ? "flex" : "none")};
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 2.4rem;
      background-color: ${({ color }) => color.PrimColor};
    }
  }

  .thirdLayout {
    display: none;

    .thirdlayoutbody {
      padding: 10px 15px;
      margin: 0px 10px;
      cursor: pointer;

      .thirdlayoutname {
        display: flex;
        align-items: center;
        justify-content: center;

        .thirdlayoutitem {
          color: ${({ color }) => color.SecondaryColor};
          font-size: 24px;
          font-weight: 900;
        }
      }

      &:hover {
        background-color: ${({ color }) => color.PrimColor};
        .thirdlayoutname {
          .thirdlayoutitem {
            color: ${({ color }) => color.SecondColor};
          }
        }
      }
    }

    @media screen and (max-width: 950px) {
      display: block;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0;
  }
`;
