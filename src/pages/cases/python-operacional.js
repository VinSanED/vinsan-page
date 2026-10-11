import Image from "next/image";
import Link from "next/link";
import SiteMeta from "@/components/siteMeta";
import caseStudy from "@/data/pythonCase.json";
import { whatsappUrl } from "@/data/profile";
import styles from "@/styles/case.module.css";

const assets = "/cases/python-operacional";

export default function PythonCasePage() {
  return (
    <>
      <SiteMeta
        title={`${caseStudy.title} | Vinsan`}
        description={caseStudy.subtitle}
        path="/cases/python-operacional"
      />
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <div className={styles.container}>
          <Link href="/#projects" className={styles.back}>
            <span aria-hidden="true">←</span> Voltar aos projetos
          </Link>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>CASE TÉCNICO / PYTHON, DADOS & AUTOMAÇÃO</p>
            <h1>
              {caseStudy.heroLead} <span>{caseStudy.heroAccent}</span>
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
              <a href="#execucoes" className={styles.secondary}>
                Ver a operação em execução <span aria-hidden="true">↘</span>
              </a>
            </div>
            <dl className={styles.facts}>
              {[
                ["Contexto", caseStudy.context],
                ["Minha atuação", caseStudy.role],
                ["Estado comprovado", caseStudy.status],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
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
                Organizar a operação. <span>Conferir cada etapa.</span>
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
                Um fluxo simples. <span>Regras visíveis.</span>
              </h2>
            </div>
            <figure className={styles.accessFigure}>
              <div className={styles.figureHeading}>
                <span>DIAGRAMA 01</span>
                <h3>Da ação revisada à informação atualizada.</h3>
              </div>
              <ol className={styles.accessSteps}>
                {caseStudy.flow.map(([title, description], index) => (
                  <li key={title}>
                    <span className={styles.stepNumber}>0{index + 1}</span>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </li>
                ))}
              </ol>
              <p className={styles.diagramRule}>
                As fontes alimentam a análise SQLite, os indicadores operacionais
                e o painel ODS. Cada saída pode ser conferida e regenerada.
              </p>
              <figcaption>
                {caseStudy.flowCaption}
                <a
                  href={`${assets}/fluxo.svg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir diagrama técnico em SVG{" "}
                  <span aria-hidden="true">↗</span>
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
              <p className={styles.eyebrow}>03 / VALIDAÇÃO LOCAL</p>
              <h2 id="evidence-title">
                Código executado. <span>Saídas examináveis.</span>
              </h2>
              <p>{caseStudy.evidence.basis}</p>
            </div>
            <div className={styles.evidenceStats}>
              {caseStudy.stats.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.scopeNote}>{caseStudy.evidence.scopeNote}</p>
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
                EXECUÇÕES PARA ESTE CASE / {caseStudy.demonstration.date}
              </p>
              <h3>Do comando ao resultado.</h3>
              <p>{caseStudy.demonstration.environment}</p>
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
                        width={execution.width || 1440}
                        height={execution.height || 1100}
                        sizes="(max-width: 780px) 100vw, 1100px"
                        alt={`${execution.title}: ${execution.result}`}
                      />
                    </a>
                    <figcaption>
                      {execution.caption}
                      {execution.transcript && (
                        <a
                          href={`${assets}/${execution.transcript}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {execution.transcriptLabel || "Ler registro da execução em texto"}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </figcaption>
                  </figure>
                  <p className={styles.scopeNote}>
                    <strong>Escopo desta execução:</strong> {execution.scope}
                  </p>
                </article>
              ))}
            </div>
            <figure className={styles.deliveryFigure}>
              <div className={styles.figureHeading}>
                <span>DIAGRAMA 02</span>
                <h3>Confirmar a mudança. Acompanhar cada resultado.</h3>
              </div>
              <ol className={styles.deliverySteps}>
                {[
                  "Revisar prévia",
                  "Conferir versão",
                  "Gravar com backup",
                  "Confirmar evento",
                  "Atualizar derivados",
                ].map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <figcaption>
                {caseStudy.integrityCaption}
                <a
                  href={`${assets}/integridade.svg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir diagrama de integridade em SVG{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
            <div className={styles.downloads}>
              {caseStudy.downloads.map((item) => (
                <a key={item.file} href={`${assets}/${item.file}`} download>
                  {item.label} <span aria-hidden="true">↓</span>
                </a>
              ))}
            </div>
          </section>

          <section
            id="resultado"
            className={styles.section}
            aria-labelledby="outcome-title"
          >
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>04 / RESULTADO E LIMITES</p>
              <h2 id="outcome-title">
                Automação que pode <span>ser acompanhada.</span>
              </h2>
              <p>{caseStudy.outcome}</p>
            </div>
            <ul className={`${styles.bullets} ${styles.limits}`}>
              {caseStudy.limits.map((item) => (
                <li key={item}>{item}</li>
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
                Sua operação precisa de <span>uma rotina em Python?</span>
              </h2>
              <p>
                Conte quais dados recebe, o que precisa conferir e qual saída
                sua equipe utiliza.
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
