import SiteMeta from "@/components/siteMeta";
import Image from "next/image";
import Link from "next/link";
import { profile, emailUrl, whatsappUrl } from "@/data/profile";
import profilePhoto from "@/assets/new/i_smile.png";
import styles from "@/styles/card.module.css";

const focusItems = [
  { number: "01", title: "APIs", description: "Sistemas e integrações" },
  { number: "02", title: "Acessos", description: "Autenticação e permissões" },
  { number: "03", title: "Automação", description: "Processamento de dados" },
];

export default function CardPage() {
  return (
    <>
      <SiteMeta
        title="Contato e currículo | Vinicius Sanches — Vinsan"
        description="Fale com Vinsan sobre APIs, autenticação, integrações e automações. Acesse o currículo de Vinicius Sanches e conheça sua formação e seus projetos."
        path="/cardPage"
      />

      <main className={styles.page} id="main-content" tabIndex={-1}>
        <div className={styles.container}>
          <div className={styles.pageTop}>
            <Link href="/" className={styles.backLink}>
              <span aria-hidden="true">←</span> Voltar ao portfólio
            </Link>
            <span className={styles.eyebrow}>Cartão profissional</span>
          </div>

          <div className={styles.card}>
            <div className={styles.profilePanel}>
              <div className={styles.profileTop}>
                <div className={styles.photo}>
                  <Image
                    src={profilePhoto}
                    alt="Vinicius Sanches"
                    fill
                    priority
                    sizes="(max-width: 600px) 88px, 112px"
                  />
                </div>
                <span className={styles.profileLabel}>
                  APIs e autenticação
                  <br />
                  Integrações & automações
                </span>
              </div>

              <h1>
                Vinicius
                <br />
                Sanches<span>.</span>
              </h1>
              <p className={styles.lead}>
                Entender o desafio.
                <br />
                Construir uma solução que faça sentido.
              </p>
              <p className={styles.description}>
                Desenvolvo e integro sistemas para conectar ferramentas,
                controlar acessos e organizar o processamento de dados. Cada
                projeto começa com escopo e entregas definidos.
              </p>

              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/#projects">
                  Conheça meus projetos <span aria-hidden="true">↗</span>
                </Link>
                <a
                  className={styles.secondaryButton}
                  href={profile.curriculum}
                  download="Curriculo_Vinicius_Sanches.pdf"
                >
                  Baixar currículo <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className={styles.description}>
                Análise e Desenvolvimento de Sistemas — GRAN Faculdade | Em
                andamento.
              </p>
              <a
                className={styles.secondaryButton}
                href={profile.curriculum}
                target="_blank"
                rel="noreferrer"
              >
                Abrir currículo em PDF <span aria-hidden="true">↗</span>
              </a>
              <ul className={styles.focusList} aria-label="Áreas de atuação">
                {focusItems.map((item) => (
                  <li key={item.title}>
                    <span className={styles.focusNumber}>{item.number}</span>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className={styles.contactPanel}
              aria-labelledby="card-contact-title"
            >
              <div className={styles.contactIntro}>
                <span className={styles.contactEyebrow}>O próximo passo</span>
                <h2 id="card-contact-title">
                  Vamos trabalhar
                  <br />
                  juntos?
                </h2>
                <p>
                  Uma oportunidade na sua equipe ou um projeto freelance: me
                  conte o que você tem em mente.
                </p>
              </div>

              <a
                className={styles.whatsappButton}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Conversar no WhatsApp <span aria-hidden="true">↗</span>
              </a>

              <div className={styles.contactList}>
                <a href={emailUrl}>
                  <div>
                    <span>E-mail</span>
                    <strong>{profile.email}</strong>
                  </div>
                  <span className={styles.contactArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <div>
                    <span>LinkedIn</span>
                    <strong>Vamos nos conectar</strong>
                  </div>
                  <span className={styles.contactArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <div>
                    <span>GitHub</span>
                    <strong>Explore meu código</strong>
                  </div>
                  <span className={styles.contactArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              <p className={styles.contactNote}>
                Prefere começar pelo contexto? Compartilhe o desafio, o escopo
                do projeto ou os detalhes da vaga.
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
