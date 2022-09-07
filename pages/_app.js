import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";
import { theme } from "../lib/theme";
import "../styles/globals.css";
import FooterComponent from "../Universal-Components/Footer";
import { FooterArray } from "../Util/Footer";
import Nav from "../Universal-Components/Nav";
import { NavArray } from "../Util/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.ColorLightMode}>
      <GlobalStyles />
      <Nav navArray={NavArray} />
      <Component {...pageProps} />
      <FooterComponent footerArray={FooterArray} />
    </ThemeProvider>
  );
}

export default MyApp;