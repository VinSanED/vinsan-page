# Vinsan Page

Portfólio de Vinicius Sanches, com serviços de APIs, autenticação, integrações, automações e processamento de dados. A aplicação mantém Next.js 13 (Pages Router), React 18, CSS Modules e a configuração existente da Vercel.

## Executar a prévia

Com Node.js e as dependências instaladas:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Abra `http://127.0.0.1:3000`. O cartão profissional está em `/cardPage`; o currículo pode ser aberto em `/curriculo/curriculo-vinicius-sanches.pdf`.

Para instalar as dependências usando o lockfile existente: `yarn install --frozen-lockfile`.

## Compilação de produção

```bash
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
```

Em ambientes com recursos limitados, `CIRCLE_NODE_TOTAL=3 npm run build` limita os processos utilizados pelo Next.js desta versão. O service worker é gerado no build de produção e fica desabilitado no desenvolvimento para evitar cache de versões antigas.

Os arquivos gerados em `.next/`, `public/service-worker.js*` e `public/workbox-*.js*` ficam fora do versionamento. O build os recria; a retirada do índice Git preserva os arquivos locais existentes.

## Onde editar

- `src/pages/index.js`: apresentação, serviços, processo, formação e contato.
- `src/components/authenticationCase.js`: resumo anonimizado da experiência com autenticação.
- `src/pages/cases/autenticacao.js` e `src/styles/case.module.css`: case técnico detalhado.
- `src/data/authenticationCase.json`: texto público, limites e escopo das evidências do case.
- `src/pages/cases/python-operacional.js` e `src/data/pythonCase.json`: case Python de automação operacional, análise de dados, interface local e observabilidade.
- `src/data/projects.js`: origem, estado, contribuição, limites e links dos projetos.
- `src/data/profile.js`: contatos, mensagem do WhatsApp e endereços do currículo.
- `src/components/siteMeta.js`: títulos, descrições, URL canônica e metadados sociais.
- `src/styles/*.module.css`: estilos da página, navegação e cartão.
- `public/social/`: imagem de compartilhamento e composição SVG editável.
- `public/projects/`: diagramas conceituais de Precision Phi e SystemInfor.
- `public/curriculo/`: currículo público em HTML editável e PDF.
- `public/cases/autenticacao/`: case HTML/PDF, diagramas SVG, capturas reais do terminal e saídas anonimizadas.
- `public/cases/python-operacional/`: case Python em HTML/PDF, diagramas, capturas nativas e artefatos fictícios examináveis.

O currículo anterior foi preservado em `src/assets/new/Curriculo_Vinicius_Sanches.pdf`. Os contatos no HTML/PDF do currículo são estáticos: ao alterar `src/data/profile.js`, confira também esses documentos.

## Atualizar o currículo

Edite `public/curriculo/curriculo-vinicius-sanches.html` e use a função de impressão do navegador, em A4, com gráficos de fundo e sem cabeçalhos ou rodapés automáticos. Salve como `public/curriculo/curriculo-vinicius-sanches.pdf`.

Depois, confira as duas páginas, os links e a seleção de texto. O HTML é também uma alternativa de leitura acessível em telas pequenas.

## Conteúdo e publicação

### Materiais do case Python

O item “Pipeline operacional Python” aparece em “Todos” e “Automação e dados” e abre `/cases/python-operacional`. Para atualizar o texto, edite `src/data/pythonCase.json` e gere o HTML e os dois diagramas:

```bash
node scripts/generate-python-case.mjs
```

Imprima `public/cases/python-operacional/case-tecnico.html` em A4, com fundos e sem cabeçalhos/rodapés automáticos, e salve como `case-tecnico.pdf` na mesma pasta. A edição atual tem 12 páginas. Confira todas as páginas, as capturas e os links após alterar o conteúdo.

As evidências renovadas em 11/10/2026 registram sete etapas do pipeline e 94 execuções de teste aprovadas: 13 do núcleo ERP, 59 de integração/domínio/HTTP/terminal, 5 de diagnóstico e 17 do Radar reutilizado. Há cenários de domínio repetidos pela classe HTTP: a contagem não representa 94 requisitos distintos nem cobertura percentual. As fontes selecionadas foram conferidas por SHA-256; os registros e documentos da demonstração são sintéticos.

A atualização apresenta ações com prévia e confirmação, proteção contra conflitos, eventos, indicadores descritivos e a distinção entre persistência e derivados. O fluxo demonstra um registro salvo com ODS bloqueado por lock sintético e a atualização posterior do painel. A central real permanece preservada no modo de demonstração. As capturas são nativas, sem edição de pixels, e suas transcrições oferecem uma alternativa de leitura.

`resumo-demo.json` retrata os nove registros iniciais do núcleo. `painel-demo.ods` e `indicadores-demo.json` são o snapshot posterior à seleção: dez registros ERP, nove tarefas fictícias, uma captura na triagem e dois eventos aplicados. O painel tem sete abas e sete filtros; os indicadores registram oito ocorrências de qualidade, que não equivalem a oito registros defeituosos. Referências `file:///work/` pertencem ao ambiente fictício e não existem na máquina do visitante.

Atualização visual de 11/10/2026 às 17:42 UTC: as capturas `interface-indicadores.png`, `interface-completude.png` e `interface-previa.png` mostram o código atual, com tema escuro, D3 local, matrizes e prévia tabular. O snapshot está em `indicadores-interface.json` e a verificação em `registro-navegador.txt`. A nova sessão conferiu consultas, seleção de gráficos e prévia cancelada; não confirmou gravações. Código preservado e entradas inteiramente fictícias, em ambiente sem rede externa.

Os dois terminais, os 94 testes e os arquivos `resumo-demo.json`, `painel-demo.ods` e `indicadores-demo.json` continuam sendo evidências da rodada anterior às 15:38 UTC. Não foram reexecutados nem atribuídos à interface D3 atual. `execucoes.json` distingue os dois momentos.

A interface atual foi conferida em desktop 1440 × 1000 e 1366 × 768. Em 390 px, Início, Qualidade e Tarefas passaram na verificação de largura da página; Radar atingiu 489 px, pendência registrada no projeto de origem. A demonstração não encerra o aceite oficial do workspace nem valida uso multiusuário, monitoramento contínuo ou modelos preditivos.

O gerador trabalha apenas com conteúdo público: não executa Python, não acessa a operação original e não produz resultados de testes. Para renovar as evidências, prepare uma nova cópia isolada, execute os procedimentos e revise os dados antes de substituir capturas e artefatos. Código operacional, fixtures de execução, logs brutos e caminhos das fontes permanecem fora deste repositório.

### Materiais do case de autenticação

Depois de editar o JSON público, gere novamente os diagramas e HTMLs:

```bash
node scripts/generate-auth-case.mjs
```

Para atualizar o PDF, abra `public/cases/autenticacao/case-tecnico.html` no navegador e imprima em A4, com fundos e sem cabeçalhos/rodapés automáticos. Confira a paginação e salve em `public/cases/autenticacao/case-tecnico.pdf`.

As capturas de terminal são imagens nativas de execuções reais selecionadas em uma cópia isolada e somente para leitura, com dados sintéticos e saída anonimizada. Os resultados novos (30 testes de procedimentos e 13 de documentação) são distintos da evidência histórica de 564 testes. O procedimento de preservação de evidência sintética também foi executado. Não reconstituir saídas de terminal nem atribuir a essas capturas uma execução completa da autenticação. As transcrições públicas e `execucoes.json` oferecem alternativas textuais às imagens.

O gerador não executa o projeto privado nem recria capturas ou resultados. Novas capturas exigem nova execução auditada e revisão da saída antes de substituir os arquivos públicos. A revisão de fontes e os registros brutos ficam fora deste repositório.

Os diagramas são identificados como representações conceituais; não representam capturas de execução de cliente. Materiais privados, matrizes de evidências e rascunhos editoriais não pertencem à árvore publicada.

As antigas rotas fictícias `/pesqPage/aap`, `/pesqPage/bap` e `/pesqPage/cap` retornam 404.

A configuração local da Vercel aponta para o projeto `vinsan-page`, com endereço `https://vinsan-page.vercel.app/`. Publicar é uma etapa separada: antes de push, merge ou deploy, revisar o diff e confirmar no projeto existente da Vercel qual é a fonte de produção. A presença de um remote Git não comprova que ele seja a origem do deploy atual.

## Rastreabilidade da manutenção de 11/10/2026

Consolidação local na branch `manu`, a partir de `5d47c1b`. Os commits registram partes do resultado acumulado da manutenção; não reconstituem artificialmente cada edição intermediária.

| Referência | Commit | Escopo |
| --- | --- | --- |
| MAN-01 | `6a17738` | Build, PWA no desenvolvimento e retirada de artefatos gerados do índice. |
| MAN-02 | `5862419` | Foto, cartão profissional, currículo, contatos e metadados sociais. |
| MAN-03 | `07447fd` | Case de autenticação, documentos e evidências públicas anonimizadas. |
| MAN-04 | `4fbf738` | Case Python, capturas atuais, PDF e proveniência das execuções. |
| MAN-05 | `4e58d7c` | Apresentação principal, estilos, navegação e integração dos projetos. |
| MAN-06 | `git log --grep='MAN-06'` | Este registro e o relatório de validação. |

O [relatório de validação](docs/validacao/2026-10-11-manutencao.json) contém hashes completos dos commits, das capturas e do PDF, comparação das fontes visuais e resultados das verificações.

Às 18:01 UTC, a prévia em `http://127.0.0.1:3003/cases/python-operacional` carregou as três imagens atuais e a miniatura da home: tema escuro, verde e ciano, matriz de tarefas, completude e prévia tabular. Os PNGs servidos corresponderam aos hashes registrados. As oito verificações dessa sessão passaram; as 52 fontes selecionadas continuavam idênticas às da captura das 17:42 UTC. A porta 3001 ainda atendia uma versão antiga; as portas 3000 e 3002 estavam inativas no momento da consulta.

O build do commit `4e58d7c` passou em uma cópia criada por `git archive`, sem depender de fontes não versionadas; apenas as dependências locais foram reutilizadas. Permanecem registradas as 28 verificações anteriores do site, a revisão das 12 páginas do PDF e a ressalva de largura do Radar no projeto Python de origem. Os 94 testes Python são evidência histórica, conforme o escopo do case.

Os 156 arquivos gerados retirados do índice foram preservados localmente. A captura avulsa do editor não integra a entrega. Esta rodada não incluiu push, merge ou deploy.
