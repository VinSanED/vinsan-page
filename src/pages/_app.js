import Foot from "@/components/footer/footInd";
import Header from "@/components/headerIndex";
import { GlobalStyles } from "@/styles/globalSty"
import Head from "next/head";

import ReactGA from 'react-ga'
import { useEffect } from "react";
import Router from "next/router";


GlobalStyles();
export default function App({ Component, pageProps }) {

  useEffect(() => {
    ReactGA.initialize('G-EQFQM9KSSC');
    // Iniciar o rastreamento do Google Analytics
    ReactGA.pageview(window.location.pathname);

    // Adicionar um evento de roteamento para rastrear mudanças de página
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return(
  <>
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="description" content="pagina pessoal/proficional de Vinicius Sanches, editor e desenvolvedor de conteúdo web-informacional." />
        <meta name="author" content="Vinicius Sanches"/>
        <meta name="keywords" content=" programador freelancer,content freelancer,design freelancer,vinsan,freelancer, vinicius sanches, vincius, sanches, Vinicius Sanches, pagina proficional,vinsan-page, manipulação de textos, manipulação de imagens, desenvolvimento de sistemas, webdev, desenvolvimento web, escritor, programador, vindaed, vinsanED, VinSanEd, VinSanED, vinsan.ed" />
        <title>VinSan-Page</title>

        <meta property="og:title" content="VinSan-Page"/>
        <meta property="og:description" content="pagina pessoal de Vinicius Sanches, editor e desenvolvedor de conteúdo web-informacional"/>
        <meta property="og:image" content="/public/assets/UT/card_habilit/spacingBACK.png"/>


        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon512_rounded.png"
          rel="icon"
          type="image/png"
        />
        <link
          href="/icon512_maskable.png"
          rel="icon"
          type="image/png"
        />
        <meta name="theme-color" content="rgba(255,255,255,0.2)" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Foot/>
  </>)
}