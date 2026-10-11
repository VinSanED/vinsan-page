import Foot from "@/components/footer/footInd";
import Header from "@/components/headerIndex";
import { GlobalStyles } from "@/styles/globalSty";
import Head from "next/head";

import ReactGA from "react-ga";
import { useEffect } from "react";
import Router from "next/router";
import "@/styles/fonts.css";

GlobalStyles();
export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("G-EQFQM9KSSC");
    // Iniciar o rastreamento do Google Analytics
    ReactGA.pageview(window.location.pathname);

    // Adicionar um evento de roteamento para rastrear mudanças de página
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="author" content="Vinicius Sanches" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/icon512_rounded.png" rel="icon" type="image/png" />
        <link href="/icon512_maskable.png" rel="icon" type="image/png" />
        <meta name="theme-color" content="#f5f6f2" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Foot />
    </>
  );
}
