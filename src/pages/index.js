import Head from "next/head";
import Image from "next/image";
import imageSystemInfor from "../assets/new/systenInf/i2.png";
import imageRickAndMorty from "../assets/new/rickAndMorty/rickBack.png";
import imageMarvel from "../assets/new/marvel/marvelBack.png";
import imagePrecision from "../assets/new/precision/precision.png";
import imageSmartTrade from "../assets/new/SMT/2026-07-16-135052_1366x768_scrot.png";
import imageVsCommerce from "../assets/new/vscommerce/vsc.png";
import curriculoPdf from "../assets/new/Curriculo_Vinicius_Sanches.pdf";
import artigoComputacao from "../../public/ArtigosEpubs/capas/ilustrandoCC.jpg";
import artigoHistoria from "../../public/ArtigosEpubs/capas/compHisto.jpg";
import artigoProdutividade from "../../public/ArtigosEpubs/capas/prodSuper.jpg";
import {
  ActionRow,
  ArticleCard,
  ArticleGrid,
  AvailabilityBox,
  BrandBanner,
  BulletList,
  ButtonLink,
  CardGrid,
  ChipList,
  CompetencyCard,
  ContactGrid,
  ContactItem,
  EvidenceList,
  Eyebrow,
  HeroCopy,
  HeroGrid,
  HeroPanel,
  HeroSection,
  HomeMain,
  MethodGrid,
  MethodStep,
  PanelHeader,
  ProjectActions,
  ProjectBody,
  ProjectCard,
  ProjectGrid,
  ProjectImage,
  ProjectMeta,
  ProjectSubhead,
  Section,
  SectionIntro,
  SignatureBadge,
  SplitGrid,
  TechGrid,
  TechGroup,
  TextBlock,
} from "@/styles/siteStyles";

const featuredProjects = [
  {
    name: "Smart Trade Boot",
    label: "Ecossistema de engenharia e dados",
    image: imageSmartTrade,
    objective:
      "Ecossistema de engenharia para construir, organizar, validar e aplicar conhecimento operacional sobre mercados financeiros, com pipelines rastreáveis e execução controlada em Paper e Sandbox.",
    contribution:
      "Arquitetura em camadas, contratos e artefatos operacionais, automação de pipelines, geração de relatórios, rastreabilidade de evidências, empacotamento, instalação, testes e estabilização da versão 1.0.0.",
    technologies: ["Java", "Maven", "JUnit", "CLI", "NDJSON", "HTTP local"],
    actions: [{ label: "Ver projeto", href: "https://smt-project.vercel.app/" }],
  },
  {
    name: "Precision Phi",
    label: "Aplicação geoespacial offline",
    image: imagePrecision,
    objective:
      "Aplicação web progressiva para localizar registros de planilhas em mapas, apoiar operações de campo e continuar funcionando mesmo sem conexão.",
    contribution:
      "Concepção da arquitetura offline-first, importação e busca de dados, persistência local, integração com mapas, geolocalização e organização do fluxo operacional.",
    technologies: ["Next.js", "React", "PWA", "IndexedDB", "API"],
    actions: [{ label: "Abrir aplicação", href: "https://precision-phi.vercel.app/" }],
  },
  {
    name: "VSCommerce",
    label: "Aplicação full stack",
    image: imageVsCommerce,
    objective:
      "Projeto de comércio eletrônico desenvolvido ao longo do curso Desenvolvimento Moderno, aplicando integração entre frontend, API REST e banco de dados relacional.",
    contribution:
      "Implementação e adaptação do backend em Spring Boot, modelagem do banco PostgreSQL, regras de domínio, endpoints REST e integração da interface em React.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    actions: [
      { label: "Back-end", href: "https://github.com/VinKSSan/vscommerce" },
      { label: "Front-end", href: "https://github.com/VinKSSan/vscommerce_frontend" },
    ],
  },
  {
    name: "SystemInfor",
    label: "Dashboard operacional",
    image: imageSystemInfor,
    objective:
      "Aplicação web para organizar informações do sistema e apresentar indicadores técnicos em uma interface de leitura rápida.",
    contribution:
      "Estruturação da interface, componentes reutilizáveis, visualização de dados e rota local de consulta.",
    technologies: ["Next.js", "React", "Stitches", "D3.js", "API local"],
    actions: [{ label: "Repositório", href: "https://github.com/VinKSSan/SystemInfor" }],
  },
];

const complementaryProjects = [
  {
    name: "Rick and Morty",
    label: "Interface e consumo de dados",
    image: imageRickAndMorty,
    objective:
      "Projeto de interface em React para consulta, navegação e apresentação organizada de informações de uma API pública.",
    contribution:
      "Construção da experiência visual, componentes de listagem e fluxo de consulta para explorar dados externos.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    actions: [{ label: "Repositório", href: "https://github.com/VinKSSan/Rick_and_Morty" }],
  },
  {
    name: "Marvel Page",
    label: "Aplicação web e conteúdo",
    image: imageMarvel,
    objective:
      "Estudo de página web com Next.js e CMS, usando conteúdo estruturado e apresentação visual de personagens.",
    contribution:
      "Implementação da página, integração de conteúdo e organização visual do material do projeto.",
    technologies: ["Next.js", "React", "Prismic CMS", "CSS"],
    actions: [{ label: "Repositório", href: "https://github.com/VinKSSan/Pagina_Marvel" }],
  },
];

const competencies = [
  {
    title: "Desenvolvimento e Engenharia de Software",
    text: "Construção e manutenção de aplicações web, backends, APIs e ferramentas técnicas com testes e documentação.",
    items: ["arquitetura modular", "testes", "documentação", "release e empacotamento"],
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    text: "Investigação de problemas, organização de requisitos e transformação de fluxos operacionais em soluções práticas.",
    items: ["modelagem de fluxos", "regras de negócio", "prototipação", "definição de escopo"],
  },
  {
    title: "Dados e Apoio à Decisão",
    text: "Organização, tratamento e visualização de dados para criar leitura operacional e apoiar melhores decisões.",
    items: ["SQL", "dashboards", "indicadores", "CSV, JSON e planilhas"],
  },
  {
    title: "Integrações e Automação",
    text: "Criação de scripts, importadores, rotinas e pequenas ferramentas para reduzir trabalho manual e conectar sistemas.",
    items: ["consumo de APIs", "processamento de arquivos", "pipelines", "relatórios"],
  },
];

const techGroups = [
  ["Linguagens", ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"]],
  ["Frameworks e desenvolvimento", ["React", "Next.js", "Spring Boot", "Maven", "APIs REST", "testes automatizados"]],
  ["Dados e integração", ["PostgreSQL", "CSV", "JSON", "análise exploratória", "dashboards", "processamento de dados"]],
  ["Engenharia e ambiente", ["Git", "GitHub", "Linux", "terminal", "IntelliJ IDEA", "Visual Studio Code"]],
];

const methodSteps = [
  ["Investigar", "Compreender o problema, os usuários, os dados e as restrições antes de escolher a solução."],
  ["Modelar", "Definir requisitos, componentes, contratos e critérios de sucesso de forma objetiva."],
  ["Construir", "Implementar em ciclos pequenos, revisáveis e compatíveis com o nível de risco do projeto."],
  ["Validar", "Testar comportamento, integração e utilidade operacional, registrando os resultados."],
  ["Entregar", "Documentar, empacotar e preparar a solução para uso, manutenção e evolução."],
];

const articles = [
  {
    title: "Ilustrando as Ciências da Computação",
    meta: "Artigo didático",
    href: "/ArtigosEpubs/ilusCienComp.epub",
    image: artigoComputacao,
  },
  {
    title: "História da Ciência da Computação",
    meta: "Nota técnica",
    href: "/ArtigosEpubs/BreIntroHistCom.epub",
    image: artigoHistoria,
  },
  {
    title: "Prodsuper",
    meta: "Material antigo",
    href: "/ArtigosEpubs/ProdSuper.epub",
    image: artigoProdutividade,
  },
];

const whatsappOfferUrl =
  "https://wa.me/5593991594902?text=Ol%C3%A1%2C%20Vinicius.%20Quero%20avaliar%20um%20processo%20que%20hoje%20depende%20de%20planilhas%20ou%20WhatsApp.%20Meu%20fluxo%20%C3%A9%3A%20";

const contacts = [
  ["E-mail", "VinSan.ed@proton.me", "mailto:VinSan.ed@proton.me"],
  ["GitHub", "github.com/vinsaned", "https://github.com/vinsaned"],
  ["LinkedIn", "linkedin.com/in/vinsan631", "https://www.linkedin.com/in/vinsan631"],
  ["WhatsApp", "Avaliar meu processo", whatsappOfferUrl],
  ["Currículo", "PDF profissional", curriculoPdf],
];

const renderProjectCard = (project) => (
  <ProjectCard key={project.name}>
    <ProjectImage>
      <Image
        className="coverImage"
        src={project.image}
        alt={`Imagem do projeto ${project.name}`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </ProjectImage>
    <ProjectBody>
      <span>{project.label}</span>
      <h3>{project.name}</h3>
      <p>{project.objective}</p>
      <ProjectMeta>
        <div>
          <strong>Minha contribuição</strong>
          <p>{project.contribution}</p>
        </div>
        <div>
          <strong>Tecnologias</strong>
          <ChipList>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ChipList>
        </div>
      </ProjectMeta>
      <ProjectActions>
        {project.actions.map((action) => (
          <ButtonLink
            key={action.href}
            tone="quiet"
            href={action.href}
            target="_blank"
            rel="noreferrer"
          >
            {action.label}
          </ButtonLink>
        ))}
      </ProjectActions>
    </ProjectBody>
  </ProjectCard>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Sanches | Desenvolvimento de Software, Automação e Dados</title>
        <meta
          name="description"
          content="Portfólio de Vinicius Sanches: projetos em Java, aplicações web, automação, APIs e dados."
        />
      </Head>

      <HomeMain>
        <HeroSection id="home">
          <HeroGrid>
            <HeroCopy>
              <Eyebrow>Vinicius Sanches</Eyebrow>
              <h1>Desenvolvimento de Software, Automação e Dados</h1>
              <h2>
                Aplicações web, APIs e ferramentas técnicas para problemas
                operacionais.
              </h2>
              <p>
                Desenvolvo soluções da compreensão do problema à implementação,
                com testes, documentação e foco em manutenibilidade.
              </p>
              <ActionRow>
                <ButtonLink
                  href={whatsappOfferUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre um projeto
                </ButtonLink>
                <ButtonLink tone="secondary" href="#projects">
                  Ver projetos
                </ButtonLink>
              </ActionRow>
            </HeroCopy>

            <HeroPanel aria-label="Oferta de diagnóstico e protótipo">
              <BrandBanner role="img" aria-label="Banner visual Vinsan.ed" />
              <PanelHeader>
                <span>Primeiro passo</span>
                <strong>Raio-X do processo + protótipo navegável</strong>
              </PanelHeader>
              <EvidenceList>
                <li>Conversa de descoberta de até 20 minutos.</li>
                <li>Mapa de um fluxo e identificação do principal gargalo.</li>
                <li>Protótipo com dados fictícios ou sanitizados em até 3 dias.</li>
                <li>
                  O valor é descontado da implementação se contratada em até 7
                  dias.
                </li>
              </EvidenceList>
            </HeroPanel>
          </HeroGrid>
        </HeroSection>

        <Section id="projects" tone="soft">
          <SectionIntro>
            <div>
              <Eyebrow>Portfólio técnico</Eyebrow>
              <h2>Projetos selecionados</h2>
              <p>
                A seleção reúne aplicações web, APIs, automação, dados e
                soluções para problemas operacionais.
              </p>
            </div>
          </SectionIntro>

          <ProjectGrid>
            {featuredProjects.map(renderProjectCard)}
          </ProjectGrid>

          <ProjectSubhead>
            <h3>Projetos complementares e estudos anteriores</h3>
            <p>
              Estudos de interface, consumo de APIs, visualização de dados e
              organização de conteúdo.
            </p>
          </ProjectSubhead>

          <ProjectGrid>
            {complementaryProjects.map(renderProjectCard)}
          </ProjectGrid>
        </Section>

        <Section id="competencies" tone="white">
          <SectionIntro>
            <div>
              <Eyebrow>Competências</Eyebrow>
              <h2>Áreas de atuação</h2>
              <p>
                Áreas em que concentro minha prática técnica e meus projetos.
              </p>
            </div>
          </SectionIntro>

          <CardGrid>
            {competencies.map((item) => (
              <CompetencyCard key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <BulletList>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </BulletList>
              </CompetencyCard>
            ))}
          </CardGrid>
        </Section>

        <Section id="technologies" tone="soft">
          <SectionIntro>
            <div>
              <Eyebrow>Tecnologias</Eyebrow>
              <h2>Ferramentas organizadas por uso</h2>
              <p>
                Linguagens, ferramentas e ambientes utilizados na construção dos projetos.
              </p>
            </div>
          </SectionIntro>

          <TechGrid>
            {techGroups.map(([title, items]) => (
              <TechGroup key={title}>
                <h3>{title}</h3>
                <ChipList>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ChipList>
              </TechGroup>
            ))}
          </TechGrid>
        </Section>

        <Section id="method" tone="white">
          <SectionIntro>
            <div>
              <Eyebrow>Método de trabalho</Eyebrow>
              <h2>Da investigação à entrega</h2>
              <p>
                Um processo simples para manter clareza, reduzir retrabalho e
                entregar software que possa ser entendido, testado e evoluído.
              </p>
            </div>
          </SectionIntro>

          <MethodGrid>
            {methodSteps.map(([title, text], index) => (
              <MethodStep key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </MethodStep>
            ))}
          </MethodGrid>
        </Section>

        <Section id="about">
          <SplitGrid>
            <TextBlock>
              <Eyebrow>Sobre</Eyebrow>
              <h2>Projetos construídos a partir de problemas concretos</h2>
              <p>
                Sou Vinicius Sanches, desenvolvedor de software com foco em Java,
                aplicações web, automação e dados. Construo projetos que partem
                de problemas concretos e avançam até implementação, testes,
                documentação e publicação.
              </p>
              <p>
                Tenho interesse especial em sistemas que organizam conhecimento,
                automatizam processos e auxiliam decisões. Nos projetos, trabalho
                com investigação, modelagem, implementação, testes e documentação.
              </p>
              <p>
                Utilizo ferramentas assistidas por IA para acelerar investigação,
                documentação, testes e revisão, mantendo validação humana e
                responsabilidade técnica sobre as entregas.
              </p>
            </TextBlock>

            <AvailabilityBox>
              <SignatureBadge aria-label="Assinatura visual Vinsan.ed">
                <img src="/assets/VinSanLog1.png" alt="" aria-hidden="true" />
              </SignatureBadge>
              <h3>Disponibilidade profissional</h3>
              <p>
                Comece por um único fluxo operacional. Eu avalio a dor, preparo
                um protótipo e delimito a primeira versão útil antes de qualquer
                sistema maior.
              </p>
              <ActionRow>
                <ButtonLink
                  href={whatsappOfferUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar diagnóstico
                </ButtonLink>
                <ButtonLink
                  tone="secondary"
                  href={curriculoPdf}
                  download="Curriculo_Vinicius_Sanches.pdf"
                >
                  Baixar currículo
                </ButtonLink>
              </ActionRow>
            </AvailabilityBox>
          </SplitGrid>
        </Section>

        <Section id="contact" tone="white">
          <SectionIntro>
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h2>Canais principais</h2>
              <p>
                Canais enxutos para conversa profissional, avaliação de projetos
                e acompanhamento do portfólio técnico.
              </p>
            </div>
          </SectionIntro>

          <ContactGrid>
            {contacts.map(([label, value, href]) => (
              <ContactItem
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                download={label === "Currículo" ? "Curriculo_Vinicius_Sanches.pdf" : undefined}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </ContactItem>
            ))}
          </ContactGrid>
        </Section>

        <Section id="articles" tone="soft" compact>
          <SectionIntro>
            <div>
              <Eyebrow>Laboratório e artigos</Eyebrow>
              <h2>Notas e estudos</h2>
              <p>
                Materiais produzidos ao longo da minha formação, preservados como
                registro de estudo, escrita e exploração didática.
              </p>
            </div>
          </SectionIntro>

          <ArticleGrid>
            {articles.map((article) => (
              <ArticleCard key={article.title} href={article.href}>
                <Image
                  className="articleImage"
                  src={article.image}
                  alt={`Capa do material ${article.title}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div>
                  <span>{article.meta}</span>
                  <h3>{article.title}</h3>
                </div>
              </ArticleCard>
            ))}
          </ArticleGrid>
        </Section>
      </HomeMain>
    </>
  );
}
