import SiteMeta from "@/components/siteMeta";
import AuthenticationCase from "@/components/authenticationCase";
import { profile, emailUrl, whatsappUrl } from "@/data/profile";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import profilePhoto from "@/assets/new/i_smile.png";
import imageRickAndMorty from "@/assets/new/rickAndMorty/rickBack.png";
import imageMarvel from "@/assets/new/marvel/marvelBack.png";
import styles from "@/styles/home.module.css";

const studies = [
  {
    name: "Rick and Morty",
    image: imageRickAndMorty,
    description:
      "Interfaces em React e navegação por dados de uma API pública.",
    href: "https://github.com/VinKSSan/Rick_and_Morty",
  },
  {
    name: "Marvel Page",
    image: imageMarvel,
    description: "Conteúdo estruturado com Next.js, React e Prismic CMS.",
    href: "https://github.com/VinKSSan/Pagina_Marvel",
  },
];

const expertise = [
  {
    title: "APIs e integrações",
    description:
      "Conecte as ferramentas que sua operação já utiliza. Desenvolvo APIs e integrações com regras claras para trocar informações entre sistemas.",
    tags: "APIs REST / Integração entre sistemas / Regras de negócio",
    icon: "code",
  },
  {
    title: "Autenticação e controle de acesso",
    description:
      "Defina como as pessoas entram na aplicação e o que podem acessar. O escopo de autenticação e permissões é definido conforme as necessidades do seu sistema.",
    tags: "Identidade / Acessos / Permissões",
    icon: "lock",
  },
  {
    title: "Automações e processamento de dados",
    description:
      "Organize tarefas repetitivas, importação de arquivos e transformação de dados. Construa um fluxo mais claro entre a informação que chega e o que seu negócio precisa utilizar.",
    tags: "Importadores / Processamento de arquivos / Pipelines",
    icon: "flow",
  },
];

const steps = [
  [
    "Conversa inicial",
    "Você apresenta a necessidade, as ferramentas que utiliza e o prazo desejado.",
  ],
  [
    "Diagnóstico, se necessário",
    "Quando o problema pede investigação, combino um diagnóstico com escopo e orçamento próprios. Demandas claras podem seguir para a proposta.",
  ],
  [
    "Proposta",
    "Alinhamos escopo, entregáveis, valores, prazos e critérios de validação antes de iniciar.",
  ],
  [
    "Implementação",
    "Desenvolvo a solução em etapas, com revisões para acompanhar o que está sendo construído.",
  ],
  [
    "Validação",
    "Conferimos o comportamento da solução segundo os critérios combinados na proposta.",
  ],
  [
    "Entrega",
    "Organizo os materiais e as orientações acordadas. Implantação e suporte seguem o escopo contratado.",
  ],
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

function ExpertiseIcon({ type }) {
  const paths = {
    code: <path d="m9 7-5 5 5 5m6-10 5 5-5 5m-2-13-2 20" />,
    flow: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6M6 9v9h9" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v3" />
      </>
    ),
  };
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const isDiagram = project.visualCaption.startsWith("Diagrama");
  const isTerminal = project.visualType === "terminal";
  const isNativeVisual = isDiagram || isTerminal;
  const isExternal = project.actions[0].href.startsWith("https://");
  return (
    <article className={styles.projectCard}>
      <a
        className={`${styles.projectVisual} ${styles[project.color]} ${isNativeVisual ? styles.diagramVisual : ""}`}
        href={project.actions[0].href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-label={`${project.actions[0].label}: ${project.name}${isExternal ? " (abre em nova aba)" : ""}`}
      >
        <span className={styles.projectNumber}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className={
            isTerminal
              ? styles.terminalScreen
              : isDiagram
                ? styles.diagramScreen
                : styles.projectScreen
          }
        >
          {!isNativeVisual && (
            <div className={styles.windowBar} aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{project.name}</span>
            </div>
          )}
          <Image
            src={project.image}
            alt={
              project.imageAlt ||
              (isDiagram
                ? `Diagrama de ${project.name}: ${project.name === "Precision Phi" ? "importação de planilhas, busca local e localização no mapa" : "métricas do sistema, API de leitura e dashboard"}`
                : `Apresentação do projeto ${project.name}`)
            }
            sizes="(max-width: 700px) 88vw, (max-width: 1240px) 43vw, 520px"
            className={
              isTerminal
                ? styles.terminalImage
                : isDiagram
                  ? styles.diagramImage
                  : styles.projectImage
            }
          />
        </div>
        <span className={styles.projectOpen}>
          <Arrow diagonal />
        </span>
      </a>
      <p className={styles.visualCaption}>{project.visualCaption}</p>
      <div className={styles.projectContent}>
        <p className={styles.projectLabel}>{project.label}</p>
        <h3>{project.name}</h3>
        <p className={styles.projectDescription}>{project.summary}</p>
        <dl className={styles.projectFacts}>
          <div>
            <dt>Origem</dt>
            <dd>{project.origin}</dd>
          </div>
          <div>
            <dt>Estado</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <ul
          className={styles.tags}
          aria-label={`Tecnologias de ${project.name}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p className={styles.projectLimit}>
          <strong>Limites da demonstração.</strong> {project.limits}
        </p>
        <details className={styles.projectDetails}>
          <summary>
            Minha contribuição <span aria-hidden="true">+</span>
          </summary>
          <p>{project.contribution}</p>
        </details>
        <div className={styles.projectActions}>
          {project.actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target={action.href.startsWith("https://") ? "_blank" : undefined}
              rel={
                action.href.startsWith("https://") ? "noreferrer" : undefined
              }
            >
              {action.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("all");
  const visibleProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  return (
    <>
      <SiteMeta />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <section id="home" className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.statusDot} /> DESENVOLVIMENTO DE
                SOFTWARE
              </p>
              <h1 id="hero-title">
                APIs, autenticação
                <br />e automações
                <br />
                <span>para o seu negócio.</span>
              </h1>
              <p className={styles.heroDescription}>
                Desenvolvo e integro sistemas para conectar ferramentas,
                controlar acessos e organizar o processamento de dados, com
                escopo e entregas definidos para cada projeto.
              </p>
              <div className={styles.actions}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Conversar sobre meu projeto <Arrow diagonal />
                </a>
                <a href="#case-autenticacao" className={styles.textLink}>
                  Conhecer o case de autenticação <Arrow />
                </a>
              </div>
              <p className={styles.heroNote}>
                Sou Vinicius Sanches, o Vinsan. Desenvolvedor de software.
              </p>
            </div>
            <div className={styles.heroPortrait}>
              <div className={styles.portraitFrame}>
                <Image
                  src={profilePhoto}
                  alt="Vinicius Sanches, desenvolvedor de software"
                  fill
                  priority
                  sizes="(max-width: 700px) 85vw, (max-width: 1000px) 40vw, 425px"
                  className={styles.portraitImage}
                />
                <span className={styles.portraitLabel}>
                  PESSOAS, PROCESSOS & CÓDIGO
                </span>
              </div>
              <div className={styles.portraitCaption}>
                <div>
                  <strong>Vinicius Sanches</strong>
                  <span>Desenvolvedor de software</span>
                </div>
                <a href="#about" aria-label="Saiba mais sobre Vinicius Sanches">
                  <Arrow diagonal />
                </a>
              </div>
              <span className={styles.portraitAccent} aria-hidden="true">
                ✳
              </span>
            </div>
          </div>
          <div className={`${styles.container} ${styles.stackStrip}`}>
            <span>COMPETÊNCIAS EM PROJETOS</span>
            <ul aria-label="Tecnologias principais">
              <li>Java</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Spring Boot</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </section>

        <AuthenticationCase />

        <section
          id="services"
          className={`${styles.section} ${styles.expertiseSection}`}
          aria-labelledby="expertise-title"
        >
          <div className={`${styles.container} ${styles.expertiseLayout}`}>
            <div className={styles.expertiseIntro}>
              <p className={styles.eyebrow}>02 / SERVIÇOS</p>
              <h2 id="expertise-title">
                Tecnologia com
                <br />
                <span>uma função clara.</span>
              </h2>
              <p>
                Entender o que precisa funcionar no seu negócio é o ponto de
                partida. A tecnologia vem para tornar isso possível.
              </p>
              <a className={styles.textLink} href="#contact">
                Conte o seu desafio <Arrow diagonal />
              </a>
            </div>
            <div>
              {expertise.map((item) => (
                <article key={item.title} className={styles.expertiseItem}>
                  <div className={styles.expertiseIcon}>
                    <ExpertiseIcon type={item.icon} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.tags}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={styles.section}
          aria-labelledby="projects-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>03 / PROJETOS SELECIONADOS</p>
                <h2 id="projects-title">
                  Da ideia ao software.
                  <br />
                  <span>Veja na prática.</span>
                </h2>
              </div>
              <p>
                Projetos de estudo e desenvolvimento, com contexto, contribuição
                e limites descritos para você avaliar o que foi construído.
              </p>
            </div>
            <div className={styles.projectToolbar}>
              <div
                className={styles.filters}
                role="group"
                aria-label="Filtrar projetos por área"
              >
                {[
                  ["all", "Todos"],
                  ["web", "Aplicações web"],
                  ["data", "Automação e dados"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={filter === value}
                    aria-controls="project-grid"
                    onClick={() => setFilter(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <span className={styles.projectCount} role="status">
                {String(visibleProjects.length).padStart(2, "0")} projetos
              </span>
            </div>
            <div className={styles.projectGrid} id="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={projects.indexOf(project)}
                />
              ))}
            </div>
            <details className={styles.studies}>
              <summary>
                <span>
                  Um pouco mais do meu percurso{" "}
                  <small>Estudos de interface e integração com APIs</small>
                </span>
                <span className={styles.studyToggle} aria-hidden="true">
                  +
                </span>
              </summary>
              <div className={styles.studyGrid}>
                {studies.map((study) => (
                  <a
                    key={study.name}
                    href={study.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.studyCard}
                  >
                    <Image
                      src={study.image}
                      alt={`Interface do estudo ${study.name}`}
                      sizes="112px"
                    />
                    <div>
                      <h3>{study.name}</h3>
                      <p>{study.description}</p>
                      <span>
                        Ver repositório <Arrow diagonal />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section
          id="method"
          className={`${styles.section} ${styles.methodSection}`}
          aria-labelledby="method-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>04 / COMO O TRABALHO ACONTECE</p>
                <h2 id="method-title">
                  Clareza no processo.
                  <br />
                  <span>Cuidado em cada etapa.</span>
                </h2>
              </div>
              <p>
                Conte o que você precisa desenvolver. Após entender a
                necessidade, apresento as etapas recomendadas, os entregáveis,
                os valores e os prazos antes do início do trabalho.
              </p>
            </div>
            <ol className={styles.methodGrid}>
              {steps.map(([title, text], index) => (
                <li key={title}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className={styles.section}
          aria-labelledby="about-title"
        >
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div>
              <p className={styles.eyebrow}>05 / SOBRE E FORMAÇÃO</p>
              <h2 id="about-title">
                Prazer,
                <br />
                <span>Vinicius.</span>
              </h2>
              <p className={styles.aboutSignature}>
                Curiosidade para entender.
                <br />
                Critério para construir.
              </p>
              <a
                href={profile.curriculum}
                download="Curriculo_Vinicius_Sanches.pdf"
                className={styles.outlineButton}
              >
                Baixar meu currículo{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5" />
                </svg>
              </a>
            </div>
            <div className={styles.aboutCopy}>
              <p className={styles.aboutLead}>
                Gosto de entender como as coisas funcionam — e de construir
                formas de fazê-las funcionar melhor.
              </p>
              <p>
                Sou desenvolvedor de software com foco em Java, aplicações web,
                automação e dados. Meu portfólio reúne projetos em que conecto
                investigação, arquitetura e implementação, da interface às
                regras de negócio.
              </p>
              <p>
                Tenho interesse especial em sistemas que organizam informações,
                conectam processos e apoiam decisões. Testes e documentação
                fazem parte desse cuidado: quero que o que construo possa ser
                entendido, mantido e ampliado.
              </p>
              <p>
                Uso ferramentas de IA para apoiar investigação, testes e
                revisão, com validação e responsabilidade técnica sobre as
                entregas.
              </p>
              <div className={styles.education}>
                <span>FORMAÇÃO</span>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p>GRAN Faculdade · Em andamento</p>
              </div>
              <div className={styles.aboutLinks}>
                <a href={profile.curriculum} target="_blank" rel="noreferrer">
                  Abrir currículo em PDF <Arrow diagonal />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  Conheça meu GitHub <Arrow diagonal />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  Conecte-se no LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={styles.contactSection}
          aria-labelledby="contact-title"
        >
          <div className={`${styles.container} ${styles.contactPanel}`}>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>VAMOS CONSTRUIR ALGO JUNTOS?</p>
              <h2 id="contact-title">
                Seu próximo passo
                <br />
                começa com uma
                <br />
                <span>boa conversa.</span>
              </h2>
              <p>
                Conte o que precisa desenvolver, quais ferramentas utiliza e o
                prazo desejado. A partir desse contexto, combinamos o próximo
                passo.
              </p>
              <div className={styles.actions}>
                <a
                  className={styles.primaryButton}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre meu projeto <Arrow diagonal />
                </a>
                <a className={styles.textLink} href={emailUrl}>
                  Prefiro enviar um e-mail <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className={styles.contactAside}>
              <span className={styles.contactSymbol} aria-hidden="true">
                ↗
              </span>
              <div>
                <span>UM PROJETO PARA DESENVOLVER</span>
                <p>
                  Aplicações, integrações e automações com escopo definido a
                  partir da sua necessidade.
                </p>
              </div>
              <div>
                <span>UMA EQUIPE PARA SOMAR</span>
                <p>
                  Desenvolvimento de software com atenção ao contexto, à
                  qualidade e à colaboração.
                </p>
              </div>
              <a
                href={profile.curriculum}
                download="Curriculo_Vinicius_Sanches.pdf"
              >
                Conheça meu currículo <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
