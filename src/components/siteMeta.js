import Head from "next/head";
import { siteUrl } from "@/data/profile";

export default function SiteMeta({
  title = "Vinsan | APIs, autenticação e automações para o seu negócio",
  description = "Desenvolvimento e integração de sistemas para conectar ferramentas, controlar acessos e organizar dados. Conheça os serviços, projetos e a experiência de Vinicius Sanches.",
  path = "/",
}) {
  const canonical = new URL(path, siteUrl).href;
  const image = `${siteUrl}/social/vinsan-page.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={canonical} key="canonical" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:locale" content="pt_BR" key="og:locale" />
      <meta property="og:site_name" content="Vinsan Page" key="og:site_name" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Vinsan — APIs, autenticação e automações para o seu negócio."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={image} key="twitter:image" />
      <meta
        name="twitter:image:alt"
        content="Vinsan — APIs, autenticação e automações para o seu negócio."
      />
    </Head>
  );
}
