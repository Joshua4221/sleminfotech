import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";
import { theme } from "../lib/theme";
import "../styles/globals.css";
import FooterComponent from "../Universal-Components/Footer";
import { FooterArray } from "../Util/Footer";
import Nav from "../Universal-Components/Nav";
import { NavArray } from "../Util/Nav";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <ThemeProvider theme={theme.ColorLightMode}>
      <Head>
        <title>Zeespace Nigeria</title>
      </Head>
      <GlobalStyles />
      <Nav navArray={NavArray} />
      <Component {...pageProps} />
      <FooterComponent footerArray={FooterArray} />
    </ThemeProvider>
  );
}

export default MyApp;
