import Image from "next/image";
import Link from "next/link";
import SiteMeta from "@/components/siteMeta";
import caseStudy from "@/data/authenticationCase.json";
import { whatsappUrl } from "@/data/profile";
import styles from "@/styles/case.module.css";

const assets = "/cases/autenticacao";
const accessSteps = [
  ["Requisição", "Credenciais e contexto recebidos"],
  ["Identidade", "Validade e vínculo verificados"],
  ["Permissão", "Ação e recurso avaliados"],
  ["Operação", "Regra de negócio do integrador"],
];
const deliverySteps = [
  "Contrato",
  "Implementação",
  "Testes",
  "Evidências",
  "Pacote",
];

export default function AuthenticationCasePage() {
  return (
    <>
      <SiteMeta
        title="Case técnico: autenticação e controle de acesso | Vinsan"
        description="Contratos de API, componentes TypeScript, validação de acesso e entrega com testes reproduzíveis. Um case técnico anonimizado de Vinicius Sanches."
        path="/cases/autenticacao"
      />
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <div className={styles.container}>
          <Link href="/#case-autenticacao" className={styles.back}>
            <span aria-hidden="true">←</span> Voltar ao portfólio
          </Link>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>
              CASE TÉCNICO / BACK-END & SEGURANÇA
            </p>
            <h1>
              Autenticação, controle de acesso{" "}
              <span>e entrega verificável.</span>
            </h1>
            <p className={styles.intro}>{caseStudy.subtitle}</p>
            <div className={styles.actions}>
              <a
                href={`${assets}/case-tecnico.pdf`}
                download
                className={styles.primary}
              >
                Baixar case em PDF <span aria-hidden="true">↓</span>
              </a>
              <a href="#entrega" className={styles.secondary}>
                Explorar a entrega <span aria-hidden="true">↘</span>
              </a>
            </div>
            <dl className={styles.facts}>
              <div>
                <dt>Contexto</dt>
                <dd>{caseStudy.context}</dd>
              </div>
              <div>
                <dt>Minha atuação</dt>
                <dd>{caseStudy.role}</dd>
              </div>
              <div>
                <dt>Estado comprovado</dt>
                <dd>{caseStudy.status}</dd>
              </div>
            </dl>
          </header>

          <nav className={styles.sectionNav} aria-label="Navegação do case">
            <a href="#entrega">01 / Entrega</a>
            <a href="#decisoes">02 / Decisões</a>
            <a href="#evidencias">03 / Evidências</a>
            <a href="#resultado">04 / Resultado e limites</a>
          </nav>

          <section
            id="entrega"
            className={styles.section}
            aria-labelledby="delivery-title"
          >
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>01 / O TRABALHO</p>
              <h2 id="delivery-title">
                Mais do que aceitar <span>uma credencial.</span>
              </h2>
            </div>
            <div className={styles.contextGrid}>
              <div>
                <h3>O desafio</h3>
                <p>{caseStudy.problem}</p>
              </div>
              <div>
                <h3>Minha contribuição</h3>
                <p>{caseStudy.contribution}</p>
              </div>
            </div>
            <ul className={styles.tags} aria-label="Tecnologias e ferramentas">
              {caseStudy.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.deliveries}>
              {caseStudy.deliveries.map((item) => (
                <article className={styles.delivery} key={item.number}>
                  <span className={styles.number} aria-hidden="true">
                    {item.number}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className={styles.summary}>{item.summary}</p>
                    <p>{item.details}</p>
                    <ul className={styles.bullets}>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className={styles.value}>
                      <strong>Valor para a equipe:</strong> {item.value}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="decisoes"
            className={styles.section}
            aria-labelledby="decisions-title"
          >
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>02 / DECISÕES DE ENGENHARIA</p>
              <h2 id="decisions-title">
                Responsabilidades claras.{" "}
                <span>Comportamentos verificáveis.</span>
              </h2>
            </div>
            <figure className={styles.accessFigure}>
              <div className={styles.figureHeading}>
                <span>DIAGRAMA 01</span>
                <h3>Identificar não é autorizar.</h3>
              </div>
              <ol className={styles.accessSteps}>
                {accessSteps.map(([title, description], index) => (
                  <li key={title}>
                    <span className={styles.stepNumber}>0{index + 1}</span>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </li>
                ))}
              </ol>
              <p className={styles.diagramRule}>
                Se uma verificação necessária falha, a operação não deve
                prosseguir.
              </p>
              <figcaption>
                Modelo conceitual de responsabilidades. Não representa a
                topologia, a ordem interna de componentes ou a configuração do
                cliente.
                <a
                  href={`${assets}/responsabilidades.svg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir diagrama SVG <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
            <div className={styles.decisions}>
              {caseStudy.decisions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="evidencias"
            className={styles.section}
            aria-labelledby="evidence-title"
          >
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>03 / VALIDAÇÃO E TRANSFERÊNCIA</p>
              <h2 id="evidence-title">
                Uma entrega que pode <span>ser examinada.</span>
              </h2>
              <p>{caseStudy.evidence.basis}</p>
            </div>
            <div className={styles.evidenceStats}>
              <div>
                <strong>564 / 564</strong>
                <span>
                  testes aprovados na suíte selecionada de regressão da entrega
                </span>
              </div>
              <div>
                <strong>Ambiente isolado</strong>
                <span>reexecução de engenharia com dados sintéticos</span>
              </div>
            </div>
            <p className={styles.scopeNote}>{caseStudy.evidence.scopeNote}</p>
            <figure className={styles.screenshot}>
              <a
                href={`${assets}/evidencias.png`}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir captura do resumo público das evidências em tamanho completo"
              >
                <Image
                  src={`${assets}/evidencias.png`}
                  width={1440}
                  height={1220}
                  sizes="(max-width: 780px) 100vw, 1100px"
                  alt="Resumo público das evidências históricas: 564 testes aprovados na suíte selecionada, validação local e produção não comprovada."
                />
              </a>
              <figcaption>
                Captura real do relatório público preparado para este portfólio.
                Apresenta resultados históricos consultados; não é uma tela do
                cliente ou uma nova execução.
                <a
                  href={`${assets}/evidencias.html`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ler relatório em HTML <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
            <div className={styles.evidenceList}>
              {caseStudy.evidence.checks.map((check) => (
                <div key={check.label}>
                  <h3>{check.label}</h3>
                  <strong>{check.result}</strong>
                  <p>{check.detail}</p>
                </div>
              ))}
            </div>
            <div id="execucoes" className={styles.executions}>
              <p className={styles.eyebrow}>
                EXECUÇÕES REALIZADAS PARA ESTE CASE / 10 OUT 2026
              </p>
              <h3>Procedimentos e pipelines no terminal.</h3>
              <p>
                As duas execuções abaixo utilizaram o pacote exato aceito na
                revisão técnica, em uma cópia somente para leitura, com arquivos
                temporários privados e rede isolada. O código original foi
                preservado.
              </p>
              {caseStudy.executions.map((execution) => (
                <article
                  className={styles.execution}
                  key={execution.screenshot}
                >
                  <h4>{execution.title}</h4>
                  <p>{execution.description}</p>
                  <strong className={styles.executionResult}>
                    {execution.result}
                  </strong>
                  <figure className={styles.screenshot}>
                    <a
                      href={`${assets}/${execution.screenshot}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir captura em tamanho completo: ${execution.title}`}
                    >
                      <Image
                        src={`${assets}/${execution.screenshot}`}
                        width={1440}
                        height={1100}
                        sizes="(max-width: 780px) 100vw, 1100px"
                        alt={`${execution.title}: ${execution.result}. Saída anonimizada de execução local real.`}
                      />
                    </a>
                    <figcaption>
                      {execution.caption}
                      <a
                        href={`${assets}/${execution.transcript}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ler saída do terminal em texto{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </figcaption>
                  </figure>
                  <p className={styles.scopeNote}>
                    <strong>Escopo desta execução:</strong> {execution.scope}
                  </p>
                </article>
              ))}
              <a
                href={`${assets}/execucoes.json`}
                target="_blank"
                rel="noreferrer"
                className={styles.back}
              >
                Consultar resumo das execuções em JSON{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className={styles.deliveryFigure}>
              <div className={styles.figureHeading}>
                <span>DIAGRAMA 02</span>
                <h3>Do comportamento esperado ao pacote verificável.</h3>
              </div>
              <ol className={styles.deliverySteps}>
                {deliverySteps.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <figcaption>
                Síntese do método de entrega: definir, implementar, testar,
                registrar e empacotar. Os artefatos internos permanecem
                privados.
                <a
                  href={`${assets}/validacao.svg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir diagrama SVG <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          </section>

          <section
            id="resultado"
            className={styles.section}
            aria-labelledby="outcome-title"
          >
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>04 / RESULTADO E LIMITES</p>
              <h2 id="outcome-title">
                Pronta para avaliação. <span>Com limites explícitos.</span>
              </h2>
              <p>{caseStudy.outcome}</p>
            </div>
            <ul className={`${styles.bullets} ${styles.limits}`}>
              {caseStudy.limits.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
            <p className={styles.visualNote}>{caseStudy.visualNote}</p>
            <div className={styles.downloads}>
              <a href={`${assets}/case-tecnico.pdf`} download>
                Baixar case em PDF <span aria-hidden="true">↓</span>
              </a>
              <a
                href={`${assets}/case-tecnico.html`}
                target="_blank"
                rel="noreferrer"
              >
                Versão de leitura e impressão <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <aside
            className={styles.contact}
            aria-labelledby="case-contact-title"
          >
            <div>
              <p className={styles.eyebrow}>VAMOS CONVERSAR</p>
              <h2 id="case-contact-title">
                Seu projeto precisa de uma <span>integração bem definida?</span>
              </h2>
              <p>
                Conte o contexto, o que já existe e o que precisa ser entregue.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.primary}
            >
              Conversar sobre meu projeto <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </main>
    </>
  );
}
