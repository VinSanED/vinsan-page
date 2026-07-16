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
        <meta name="description" content="Página pessoal e profissional de Vinicius Sanches, focada em engenharia de software, sistemas, automação e dados." />
        <meta name="author" content="Vinicius Sanches"/>
        <meta name="keywords" content="Vinicius Sanches, Vinsan Page, desenvolvimento de sistemas, engenharia de software, automação, dados, dashboards, JavaScript, Next.js, React" />
        <title>Vinicius Sanches | Software, Sistemas e Dados</title>

        <meta property="og:title" content="Vinicius Sanches | Software, Sistemas e Dados"/>
        <meta property="og:description" content="Projetos, competências e contato profissional de Vinicius Sanches."/>
        <meta property="og:image" content="/assets/imaProjetos/systemInf/Compcapa.png"/>


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
        <meta name="theme-color" content="#f7f9fb" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Foot/>
  </>)
}
