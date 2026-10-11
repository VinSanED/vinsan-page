import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/data/profile";
import styles from "@/styles/home.module.css";

export default function AuthenticationCase() {
  return (
    <section
      id="case-autenticacao"
      className={`${styles.section} ${styles.caseSection}`}
      aria-labelledby="case-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>01 / EXPERIÊNCIA COM CLIENTE</p>
            <h2 id="case-title">
              Autenticação e<br />
              <span>controle de acesso.</span>
            </h2>
          </div>
          <p>
            Contratos de API, componentes TypeScript, testes de segurança e
            documentação para apoiar a integração por outra equipe.
          </p>
        </div>
        <div className={styles.caseGrid}>
          <div className={styles.caseCopy}>
            <span className={styles.caseBadge}>
              Projeto para cliente · Validação local
            </span>
            <h3>Do contrato da API à entrega verificável.</h3>
            <p>
              Desenvolvi componentes de sessão e validação de acesso, com testes
              automatizados, procedimentos operacionais e evidências de uma
              entrega técnica em ambiente de engenharia.
            </p>
            <dl className={styles.caseFacts}>
              <div>
                <dt>Minha atuação</dt>
                <dd>Implementação, integração, testes e documentação</dd>
              </div>
              <div>
                <dt>No case técnico</dt>
                <dd>Decisões, diagramas e capturas de execução local</dd>
              </div>
            </dl>
            <div className={styles.caseActions}>
              <Link className={styles.primaryButton} href="/cases/autenticacao">
                Explorar case técnico <span aria-hidden="true">↗</span>
              </Link>
              <a
                className={styles.textLink}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre autenticação <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={styles.casePreview}>
            <Link
              href="/cases/autenticacao#execucoes"
              aria-label="Ver capturas e escopo das execuções locais no case técnico"
            >
              <Image
                src="/cases/autenticacao/terminal-runbooks.png"
                width={1440}
                height={1100}
                sizes="(max-width: 800px) 100vw, 560px"
                alt="Terminal durante a validação local de uma seleção de testes de procedimentos operacionais, com saída anonimizada."
              />
            </Link>
            <figcaption>
              Execução local selecionada, com saída anonimizada. Conheça o
              escopo, as evidências e os limites da entrega no case.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
