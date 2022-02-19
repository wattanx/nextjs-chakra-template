import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { usePageView } from "@hooks";
import { config } from "@site.config";

import theme from "../theme";
import { AppProps } from "next/app";
import { PageSEO } from "@components/PageSEO";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  const title = config.siteMeta.title;
  const pageUrl = config.baseUrl;
  const description = config.siteMeta.description;
  return (
    <>
      <PageSEO />
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
