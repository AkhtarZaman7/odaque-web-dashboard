import "../styles/global.css";

import { CacheProvider, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";

import theme from "../theme";
import createEmotionCache from "../theme/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
