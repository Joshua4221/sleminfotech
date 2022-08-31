import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

    /* font-family: 'Nunito Sans', sans-serif; */
    body{
      font-family: 'Nunito', sans-serif;
      background: ${({ theme }) => theme.PrimaryColor};
      transition: all 1.5s linear;
    }
`;
