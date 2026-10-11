import imagePrecision from "../../public/projects/precision-workflow.png";
import imageSmartTrade from "@/assets/new/SMT/2026-07-16-135052_1366x768_scrot.png";
import imageVsCommerce from "@/assets/new/vscommerce/vsc.png";
import imageSystemInfor from "../../public/projects/systeminfor-workflow.png";

export const projects = [
  {
    name: "Pipeline operacional Python",
    category: "data",
    label: "Python · Dados, automação e observabilidade",
    image: {
      src: "/cases/python-operacional/interface-indicadores.png",
      width: 1440,
      height: 1000,
    },
    imageAlt:
      "Centro de comando Python atual, em tema escuro, com contagens e matriz D3 sobre tarefas fictícias.",
    visualType: "terminal",
    color: "sage",
    origin: "Projeto próprio para a operação freelance",
    status: "Demonstração local com dados fictícios",
    summary:
      "Conecta tarefas, oportunidades e dados em uma operação local. Prévia de alterações, análise SQL, indicadores e eventos tornam cada etapa mais fácil de operar e conferir.",
    contribution:
      "Evoluí o pipeline Python com interface HTTP local, ações por CLI, proteção contra conflitos, backups e indicadores de gestão e qualidade. O case reúne capturas reais, decisões técnicas e testes em dados sintéticos.",
    technologies: ["Python", "SQLite", "HTTP local", "JavaScript", "ODS"],
    limits:
      "Uso local, com arquivos como fonte e análise descritiva. A demonstração não mede resultados comerciais nem valida operação multiusuário ou serviços externos.",
    visualCaption:
      "Captura real da interface em uma cópia isolada, com dados fictícios.",
    actions: [
      { label: "Explorar case Python", href: "/cases/python-operacional" },
    ],
  },
  {
    name: "Precision Phi",
    category: "web",
    label: "Mapas · Processamento de dados",
    image: imagePrecision,
    color: "sage",
    origin: "Projeto próprio para operações de campo",
    status: "Demonstração web publicada",
    summary:
      "Transforma registros de planilhas em pontos pesquisáveis no mapa, reunindo consulta, geolocalização e histórico de operações em uma aplicação com armazenamento local.",
    contribution:
      "Concebi a solução e implementei a importação de planilhas, a busca, a persistência local e a integração com mapas e geolocalização.",
    technologies: ["Next.js", "React", "IndexedDB", "PWA", "MapLibre"],
    limits:
      "O uso offline depende dos dados e mapas já armazenados no dispositivo. Serviços remotos precisam de conexão.",
    visualCaption: "Diagrama de funcionamento; não é uma captura da aplicação.",
    actions: [
      {
        label: "Explorar aplicação",
        href: "https://precision-phi.vercel.app/",
      },
    ],
  },
  {
    name: "Smart Trade Boot",
    category: "data",
    label: "Pesquisa · Automação de pipelines",
    image: imageSmartTrade,
    color: "sand",
    origin: "Projeto próprio de engenharia e pesquisa",
    status: "Edição 1.0.0 · Research/Paper local",
    summary:
      "Organiza estudos de mercado, pipelines e evidências para pesquisa e simulação. A edição local permite explorar sessões Paper e relatórios com capital fictício.",
    contribution:
      "Desenvolvi a arquitetura, os pipelines e os relatórios, além de trabalhar em testes, documentação, empacotamento e estabilização da versão 1.0.0.",
    technologies: ["Java", "Maven", "JUnit", "CLI"],
    limits:
      "Pesquisa e simulação local em Paper/Sandbox. A edição não envia ordens reais, não executa Live Trading e não promete retorno financeiro.",
    visualCaption: "Página de apresentação da edição local em Paper/Sandbox.",
    actions: [
      {
        label: "Conhecer o projeto",
        href: "https://smt-project.vercel.app/",
      },
    ],
  },
  {
    name: "VSCommerce",
    category: "web",
    label: "Aplicação full stack · Formação",
    image: imageVsCommerce,
    color: "blue",
    origin: "Curso Desenvolvimento Moderno · DevSuperior",
    status: "Projeto de formação e demonstração",
    summary:
      "Integra catálogo, autenticação e pedidos em React a uma API Java/Spring Boot. Um projeto de formação para praticar regras de negócio, persistência e integração entre interface e servidor.",
    contribution:
      "Implementei e adaptei o back-end, a modelagem de dados, as regras de domínio e os endpoints REST, integrando a interface em React durante o desenvolvimento do projeto.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    limits:
      "Pagamento simulado, sem integração com um meio de pagamento real. A implementação parte do projeto apresentado no curso.",
    visualCaption:
      "Tela administrativa em ambiente local, com dados de demonstração do projeto.",
    actions: [
      {
        label: "Código back-end",
        href: "https://github.com/VinKSSan/vscommerce",
      },
      {
        label: "Código front-end",
        href: "https://github.com/VinKSSan/vscommerce_frontend",
      },
    ],
  },
  {
    name: "SystemInfor",
    category: "data",
    label: "Dashboard · Consulta de telemetria",
    image: imageSystemInfor,
    color: "lavender",
    origin: "Projeto de portfólio",
    status: "Demonstração técnica de monitoramento",
    summary:
      "Reúne CPU, memória, disco e processos em um dashboard alimentado por uma API. A interface identifica quando usa a telemetria disponível ou um conjunto de dados de exemplo.",
    contribution:
      "Estruturei a interface, os componentes reutilizáveis, as visualizações de dados e a integração com a API de consulta ao sistema.",
    technologies: ["Next.js", "React", "D3.js", "systeminformation"],
    limits:
      "Monitoramento somente de leitura, com histórico em memória. Não inclui autenticação nem gestão de múltiplas máquinas.",
    visualCaption: "Diagrama de funcionamento; não é uma captura da aplicação.",
    actions: [
      {
        label: "Explorar código",
        href: "https://github.com/VinKSSan/SystemInfor",
      },
    ],
  },
];
