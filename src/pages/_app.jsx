import "../styles/global.css";

import { CacheProvider, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";

import theme from "../theme";
import createEmotionCache from "../theme/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
