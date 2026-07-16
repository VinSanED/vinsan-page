import Head from "next/head";
import Image from "next/image";
import capaSys from "../../public/assets/imaProjetos/systemInf/Compcapa.png";
import capaRick from "../../public/assets/imaProjetos/siteRick/capa.webp";
import capaMarvel from "../../public/assets/imaProjetos/marvel/MarvelCapa.png";
import artigoComputacao from "../../public/ArtigosEpubs/capas/ilustrandoCC.jpg";
import artigoHistoria from "../../public/ArtigosEpubs/capas/compHisto.jpg";
import artigoProdutividade from "../../public/ArtigosEpubs/capas/prodSuper.jpg";
import {
  ActionRow,
  ArticleCard,
  ArticleGrid,
  AvailabilityBox,
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
  IntroNote,
  MethodGrid,
  MethodStep,
  PanelHeader,
  ProjectActions,
  ProjectBody,
  ProjectCard,
  ProjectGrid,
  ProjectImage,
  ProjectMeta,
  Section,
  SectionIntro,
  SplitGrid,
  TechGrid,
  TechGroup,
  TextBlock,
} from "@/styles/siteStyles";

const projects = [
  {
    name: "SystemInfor",
    label: "Dashboard operacional",
    image: capaSys,
    repo: "https://github.com/VinKSSan/SystemInfor",
    objective:
      "Aplicação web para organizar informações do sistema e apresentar indicadores técnicos em uma interface de leitura rápida.",
    contribution:
      "Estruturação da interface, componentes reutilizáveis, visualização de dados e rota local de consulta.",
    technologies: ["Next.js", "React", "Stitches", "D3.js", "API local"],
    capabilities: ["dashboard", "componentes", "indicadores", "documentação"],
  },
  {
    name: "Rick and Morty",
    label: "Interface e consumo de dados",
    image: capaRick,
    repo: "https://github.com/VinKSSan/Rick_and_Morty",
    objective:
      "Projeto de interface em React para consulta, navegação e apresentação organizada de informações de uma API pública.",
    contribution:
      "Construção da experiência visual, componentes de listagem e fluxo de consulta para explorar dados externos.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    capabilities: ["consumo de API", "UI responsiva", "estado de tela"],
  },
  {
    name: "Marvel Page",
    label: "Aplicação web e conteúdo",
    image: capaMarvel,
    repo: "https://github.com/VinKSSan/Pagina_Marvel",
    objective:
      "Estudo de página web com Next.js e CMS, usando conteúdo estruturado e apresentação visual de personagens.",
    contribution:
      "Implementação da página, integração de conteúdo e organização visual do material do projeto.",
    technologies: ["Next.js", "React", "Prismic CMS", "CSS"],
    capabilities: ["roteamento", "conteúdo estruturado", "frontend"],
  },
];

const competencies = [
  {
    title: "Desenvolvimento e Engenharia de Software",
    text: "Construção e manutenção de aplicações web, backends, APIs e ferramentas técnicas com foco em evolução segura.",
    items: ["arquitetura modular", "testes", "documentação", "release e empacotamento"],
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    text: "Investigação de problemas, organização de requisitos e transformação de fluxos operacionais em soluções práticas.",
    items: ["modelagem de fluxos", "regras de negócio", "prototipação", "escopo verificável"],
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
  ["Desenvolvimento", ["Git", "GitHub", "Maven", "APIs REST", "JSON", "testes"]],
  ["Dados", ["SQL", "Python", "planilhas", "visualização", "CSV", "JSON"]],
  ["Ambiente", ["Linux", "terminal", "VS Code", "IntelliJ IDEA", "IA assistiva"]],
];

const methodSteps = [
  ["Investigar", "Compreender o problema, os usuários, os dados e as restrições antes de escolher a solução."],
  ["Modelar", "Definir requisitos, componentes, contratos e critérios de sucesso de forma objetiva."],
  ["Construir", "Implementar em ciclos pequenos, revisáveis e compatíveis com o nível de risco do projeto."],
  ["Validar", "Testar comportamento, integração, qualidade e utilidade operacional com evidência reproduzível."],
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

const contacts = [
  ["E-mail", "VinSan.ed@proton.me", "mailto:VinSan.ed@proton.me"],
  ["GitHub", "github.com/VinKSSan", "https://github.com/VinKSSan"],
  ["LinkedIn", "vinicius-sanches", "https://www.linkedin.com/in/vinicius-sanches-88aa27218"],
  ["WhatsApp", "Contato direto", "https://wa.me/559392283745"],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Sanches | Software, Sistemas e Dados</title>
      </Head>

      <HomeMain>
        <HeroSection id="home">
          <HeroGrid>
            <HeroCopy>
              <Eyebrow>Vinicius Sanches</Eyebrow>
              <h1>Engenharia de Software, Sistemas e Dados</h1>
              <h2>Aplicações, automações e soluções orientadas por dados.</h2>
              <p>
                Desenvolvo soluções de pequena e média complexidade, trabalhando
                desde a compreensão do problema até a implementação, validação e
                documentação da entrega.
              </p>
              <ActionRow>
                <ButtonLink href="#projects">Ver projetos</ButtonLink>
                <ButtonLink tone="secondary" href="#contact">
                  Entrar em contato
                </ButtonLink>
              </ActionRow>
            </HeroCopy>

            <HeroPanel aria-label="Evidências de atuação">
              <PanelHeader>
                <span>Foco atual</span>
                <strong>Construir ferramentas técnicas com clareza operacional.</strong>
              </PanelHeader>
              <EvidenceList>
                <li>Aplicações web, dashboards e ferramentas internas.</li>
                <li>Automação de processos, importação e transformação de dados.</li>
                <li>Testes, documentação e cuidado com manutenção.</li>
                <li>Disponibilidade para oportunidades remotas e projetos tecnicamente alinhados.</li>
              </EvidenceList>
            </HeroPanel>
          </HeroGrid>
        </HeroSection>

        <Section id="projects">
          <SectionIntro>
            <div>
              <Eyebrow>Portfólio técnico</Eyebrow>
              <h2>Projetos selecionados</h2>
              <p>
                Seleção feita apenas com materiais presentes no diretório do
                projeto. O foco está em evidências de construção, interface,
                dados e organização técnica.
              </p>
            </div>
            <IntroNote>
              Não encontrei materiais locais suficientes para incluir Smart Trade
              Boot ou Precision Phi nesta página sem depender de informação externa.
            </IntroNote>
          </SectionIntro>

          <ProjectGrid>
            {projects.map((project) => (
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
                    <div>
                      <strong>Capacidades demonstradas</strong>
                      <ChipList>
                        {project.capabilities.map((capability) => (
                          <li key={capability}>{capability}</li>
                        ))}
                      </ChipList>
                    </div>
                  </ProjectMeta>
                  <ProjectActions>
                    <ButtonLink tone="quiet" href={project.repo} target="_blank" rel="noreferrer">
                      Repositório
                    </ButtonLink>
                  </ProjectActions>
                </ProjectBody>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Section>

        <Section id="competencies" tone="white">
          <SectionIntro>
            <div>
              <Eyebrow>Competências</Eyebrow>
              <h2>Atuação delimitada e verificável</h2>
              <p>
                A página deixa de vender serviços genéricos e passa a comunicar
                áreas técnicas conectadas ao desenvolvimento de sistemas,
                automação e dados.
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
                Sem porcentagens de domínio e sem lista inflada: apenas grupos
                relevantes para construir, integrar, validar e apresentar soluções.
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
              <h2>Construção técnica com curiosidade e critério</h2>
              <p>
                Sou Vinicius Sanches, desenvolvedor e estudante das ciências da
                computação, com atuação concentrada em engenharia de software,
                análise de sistemas, automação e dados.
              </p>
              <p>
                Tenho interesse especial em sistemas que organizam conhecimento,
                automatizam processos e auxiliam decisões. Minha abordagem combina
                investigação, modelagem, implementação, testes e documentação.
              </p>
            </TextBlock>

            <AvailabilityBox>
              <h3>Disponibilidade profissional</h3>
              <p>
                Aberto a oportunidades remotas, colaboração com equipes e projetos
                freelance relacionados a desenvolvimento de sistemas, automação e dados.
              </p>
              <ActionRow>
                <ButtonLink href="#contact">Contato</ButtonLink>
                <ButtonLink tone="secondary" href="/cardPage">
                  Cartão profissional
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
                Canais enxutos para conversa profissional, avaliacao de projetos
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
              <h2>Conteúdo antigo em posição secundária</h2>
              <p>
                Materiais preservados sem competir com o portfólio técnico. Eles
                ficam como registro de estudo, escrita e exploração didática.
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
