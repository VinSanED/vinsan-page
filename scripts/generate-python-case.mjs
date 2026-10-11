import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Public material only. This generator never reads or runs the operational ERP.
const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "src/data/pythonCase.json");
const destination = path.join(root, "public/cases/python-operacional");
const publicCaseUrl = "https://vinsan-page.vercel.app/cases/python-operacional";
const publicLink = (file) => new URL(file, `${publicCaseUrl}/`).href;

const escape = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
const array = (value) => (Array.isArray(value) ? value : []);
const paragraph = (value, className = "") =>
  typeof value === "string" && value.trim()
    ? `<p${className ? ` class="${className}"` : ""}>${escape(value)}</p>`
    : "";
const list = (values) =>
  array(values).length
    ? `<ul>${values.map((value) => `<li>${escape(value)}</li>`).join("")}</ul>`
    : "";
const publicFile = (value, extensions) =>
  typeof value === "string" &&
  new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9._-]*\\.(?:${extensions})$`, "i").test(
    value,
  )
    ? value
    : null;
const svgText = (x, y, value, attributes = "") =>
  `<text x="${x}" y="${y}" ${attributes}>${escape(value)}</text>`;
const arrow = (x1, y1, x2, y2, color = "#a5bea1") =>
  `<path d="M${x1} ${y1}H${x2}V${y2}" fill="none" stroke="${color}" stroke-width="2" marker-end="url(#arrow)"/>`;
const svgHead = (
  height,
  title,
  description,
) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}" role="img" aria-labelledby="title description">
<title id="title">${escape(title)}</title><desc id="description">${escape(description)}</desc>
<defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7" fill="none" stroke="#a5bea1" stroke-width="1.3"/></marker></defs>`;

function flowDiagram(caseStudy) {
  const stages = [
    ["CLI + interface", "Tarefas e oportunidades", "Ações sobre a mesma camada"],
    ["Prévia + confirmação", "Regras Python e versão", "Antes e depois da alteração"],
    ["Persistência", "CSV + fila · backup por arquivo", "Eventos antes e depois"],
  ];
  const outputs = [
    ["SQLite em memória", "Prioridades e totais financeiros", "Relatórios JSON + Markdown"],
    ["Indicadores locais", "Contagens, recência e qualidade", "Interface: barras + tabelas"],
    ["Painel ODS · 7 abas", "Fontes + análise financeira SQL", "Visão derivada dos registros"],
  ];
  const cards = (items, y, numbered) => items.map(([title, first, second], index) => {
    const x = 52 + index * 376;
    return `<g><rect x="${x}" y="${y}" width="344" height="164" rx="12" fill="#244d42" stroke="#718d7c"/>
      ${numbered ? svgText(x + 20, y + 29, `0${index + 1}`, 'font-size="13" fill="#d9f28b" letter-spacing="1"') : ""}
      ${svgText(x + 20, y + (numbered ? 67 : 45), title, 'font-size="25" fill="#f5f6f2" font-weight="600"')}
      ${svgText(x + 20, y + 105, first, 'font-size="18" fill="#d8e6da"')}
      ${svgText(x + 20, y + 135, second, 'font-size="18" fill="#d8e6da"')}
      ${numbered && index < 2 ? arrow(x + 351, y + 82, x + 369, y + 82) : ""}</g>`;
  }).join("");
  return `${svgHead(800, "Da ação revisada aos indicadores", caseStudy.flowAlt)}
<rect width="1200" height="800" rx="20" fill="#173f36"/>
<g font-family="Arial, Helvetica, sans-serif">
  ${svgText(52, 47, "FLUXO TÉCNICO / OPERAÇÃO E DADOS", 'font-size="13" fill="#c7deb6" letter-spacing="1.7"')}
  ${svgText(52, 103, "Da ação revisada aos indicadores.", 'font-size="38" fill="#f5f6f2" font-weight="600"')}
  ${cards(stages, 158, true)}
  ${arrow(976, 332, 976, 389)}
  <rect x="52" y="402" width="1096" height="76" rx="12" fill="#d9f28b"/>
  ${svgText(76, 447, "Fontes locais", 'font-size="24" fill="#173f36" font-weight="600"')}
  ${svgText(307, 447, "Cinco tabelas ERP em CSV + fila de tarefas + triagem", 'font-size="21" fill="#294c38"')}
  <path d="M600 478v38M224 516h752" fill="none" stroke="#a5bea1" stroke-width="2"/>
  ${[224, 600, 976].map((x) => arrow(x, 516, x, 551)).join("")}
  ${cards(outputs, 564, false)}
  ${svgText(52, 775, "Diagrama conceitual. Sem dados operacionais; não representa uma captura de execução.", 'font-size="16" fill="#d8e6da"')}
</g></svg>\n`;
}

function integrityDiagram(caseStudy) {
  const stages = [
    ["Prévia", "Antes e depois", "Versão + hash da prévia"],
    ["Confirmar", "Reler versão e regras", "Conferir hash recebido"],
    ["Preparar", "Evento PREPARADO", "Backup antes de gravar"],
    ["Salvar fonte", "Troca atômica por arquivo", "Lock local durante ação"],
  ];
  const cards = stages.map(([title, first, second], index) => {
    const x = 52 + index * 280;
    return `<g><rect x="${x}" y="164" width="248" height="158" rx="12" fill="#f5f6f2" stroke="#b9c8ae"/>
      ${svgText(x + 18, 208, title, 'font-size="26" fill="#173f36" font-weight="600"')}
      ${svgText(x + 18, 255, first, 'font-size="17" fill="#53665b"')}
      ${svgText(x + 18, 286, second, 'font-size="17" fill="#53665b"')}
      ${index < 3 ? arrow(x + 255, 243, x + 273, 243) : ""}</g>`;
  }).join("");
  return `${svgHead(810, "Confirmar a mudança e distinguir os resultados", caseStudy.integrityAlt)}
<rect width="1200" height="810" rx="20" fill="#e9ede2"/>
<g font-family="Arial, Helvetica, sans-serif">
  ${svgText(52, 47, "INTEGRIDADE / CONFIRMAÇÃO E PERSISTÊNCIA", 'font-size="13" fill="#426153" letter-spacing="1.7"')}
  ${svgText(52, 103, "Cada etapa tem um resultado próprio.", 'font-size="37" fill="#173f36" font-weight="600"')}
  ${cards}
  ${arrow(456, 332, 456, 413)}
  ${svgText(70, 378, "Versão divergente ou regra inválida", 'font-size="17" fill="#6d5845"')}
  <rect x="52" y="426" width="528" height="112" rx="12" fill="#f4ece0" stroke="#cfbfa8"/>
  ${svgText(74, 465, "Revisar e gerar nova prévia", 'font-size="25" fill="#694e37" font-weight="600"')}
  ${svgText(74, 505, "A fonte não é gravada.", 'font-size="19" fill="#6d5845"')}
  ${arrow(1016, 332, 1016, 413)}
  <rect x="640" y="426" width="508" height="112" rx="12" fill="#17483e"/>
  ${svgText(663, 465, "Fonte salva", 'font-size="27" fill="#f5f6f2" font-weight="600"')}
  ${svgText(663, 505, "Evento e derivados seguem separados.", 'font-size="19" fill="#d8e6da"')}
  <path d="M894 538v38H316v31M894 576v31" fill="none" stroke="#a5bea1" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M316 594v13" fill="none" stroke="#a5bea1" stroke-width="2" marker-end="url(#arrow)"/>
  <rect x="52" y="620" width="528" height="118" rx="12" fill="#f5f6f2" stroke="#b9c8ae"/>
  ${svgText(74, 660, "Confirmar evento", 'font-size="25" fill="#173f36" font-weight="600"')}
  ${svgText(74, 702, "APLICADO ou confirmação pendente", 'font-size="20" fill="#53665b"')}
  <rect x="640" y="620" width="508" height="118" rx="12" fill="#f5f6f2" stroke="#b9c8ae"/>
  ${svgText(663, 660, "Atualizar derivados", 'font-size="25" fill="#173f36" font-weight="600"')}
  ${svgText(663, 702, "ODS / central: atualização ou pendência", 'font-size="19" fill="#53665b"')}
  ${svgText(52, 785, "PREPARADO não comprova gravação. Não há transação global entre arquivos.", 'font-size="17" fill="#53665b"')}
</g></svg>\n`;
}

const css = `
:root { color-scheme: light; --paper: #f5f6f2; --ink: #172b27; --green: #17483e; --muted: #53665b; --line: #d5ded1; --soft: #e9ede2; }
* { box-sizing: border-box; }
html { background: #e7ece3; color: var(--ink); font: 16px/1.65 Arial, Helvetica, sans-serif; }
body { margin: 0; }
a { color: var(--green); text-underline-offset: 4px; overflow-wrap: anywhere; }
a:focus-visible { outline: 3px solid #779252; outline-offset: 5px; }
h1, h2, h3, p, dd, li, span, strong { overflow-wrap: anywhere; }
h1, h2, h3 { font-weight: 600; line-height: 1.15; margin: 0; }
h1 { font-size: clamp(2.4rem, 4.5vw, 4.2rem); letter-spacing: -.055em; max-width: 1000px; }
h2 { font-size: clamp(1.85rem, 3vw, 2.8rem); letter-spacing: -.035em; }
h3 { font-size: 1.35rem; letter-spacing: -.018em; }
p { margin: 14px 0 0; color: var(--muted); }
ul { margin: 18px 0; padding-left: 22px; color: var(--muted); }
li { padding-left: 3px; margin: 8px 0; }
.sheet { max-width: 1240px; margin: 24px auto; padding: 52px 64px; background: var(--paper); }
.brand { font-size: 1.9rem; color: var(--green); font-weight: 700; letter-spacing: -.06em; }
.brand span { color: #648047; }
.topline { display: flex; justify-content: space-between; gap: 20px; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 22px; margin-bottom: 42px; }
.eyebrow { margin: 0 0 15px; font-size: .73rem; font-weight: 700; letter-spacing: .13em; color: #426153; text-transform: uppercase; }
.lead { font-size: 1.18rem; line-height: 1.65; max-width: 950px; }
.notice { border-left: 3px solid #749258; background: var(--soft); padding: 16px 20px; margin: 26px 0; color: #2b4b36; }
.meta { font-size: .86rem; color: var(--muted); }
.facts { display: grid; grid-template-columns: 1fr 1.1fr 1fr; gap: 24px; margin: 30px 0; padding: 22px 0; border-block: 1px solid var(--line); }
dt { color: var(--muted); font-size: .78rem; margin-bottom: 7px; }
dd { margin: 0; line-height: 1.5; }
.chapter { margin-top: 56px; }
.chapter > h2 { margin-bottom: 24px; }
.columns { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; list-style: none; margin: 24px 0 0; }
.tags li { border: 1px solid #c2cfba; border-radius: 40px; padding: 5px 12px; font-size: .8rem; margin: 0; }
.delivery { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 24px; border-top: 1px solid var(--line); padding: 26px 0; }
.number { color: #648047; font-size: 1.8rem; }
.summary { color: #294c38; font-size: 1.1rem; }
.value { margin-top: 20px; padding-left: 15px; border-left: 2px solid #9bb08b; }
figure { margin: 26px 0; }
figure img { display: block; width: 100%; height: auto; }
figcaption { color: var(--muted); font-size: .78rem; line-height: 1.6; margin-top: 13px; }
.decision { padding: 18px 0; border-top: 1px solid var(--line); }
.decisions { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; }
.stats { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,240px),1fr)); gap: 20px; margin: 30px 0; }
.stat { padding: 22px 24px; border: 1px solid var(--line); border-radius: 9px; min-width: 0; }
.stat:first-child { background: var(--green); color: #f5f6f2; border-color: var(--green); }
.stat strong { display: block; font-size: clamp(2rem,3.4vw,3rem); font-weight: 500; line-height: 1.1; letter-spacing: -.045em; }
.stat span { display: block; font-size: .86rem; margin-top: 12px; }
.checks { width: 100%; border-collapse: collapse; margin-top: 26px; table-layout: fixed; }
.checks th { text-align: left; font-size: .76rem; color: #426153; letter-spacing: .04em; padding: 12px 14px 12px 0; border-bottom: 1px solid #a7ba9d; }
.checks td { vertical-align: top; padding: 16px 18px 16px 0; border-bottom: 1px solid var(--line); font-size: .91rem; overflow-wrap: anywhere; }
.checks td:last-child { color: var(--muted); }
.checks th:nth-child(1), .checks th:nth-child(2) { width: 27%; }
.checks th:nth-child(3) { width: 46%; }
.endnote { display: flex; justify-content: space-between; gap: 18px; flex-wrap: wrap; border-top: 1px solid var(--line); margin-top: 38px; padding-top: 18px; font-size: .8rem; color: var(--muted); }
.toolbar { max-width: 1240px; margin: 20px auto; display: flex; flex-wrap: wrap; gap: 20px; padding: 0 30px; font-size: .9rem; }
.execution .result { color: var(--green); font-size: 1.2rem; font-weight: 600; }
.execution figure { border: 1px solid var(--line); border-radius: 9px; overflow: hidden; }
.execution figcaption { padding: 0 18px 16px; }
.downloads { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,210px),1fr)); gap: 12px; padding: 0; margin: 24px 0 0; list-style: none; }
.downloads-title { margin-top: 30px; }
.downloads li { margin: 0; padding: 0; }
.downloads a { display: block; height: 100%; padding: 14px 17px; border: 1px solid var(--line); border-radius: 7px; font-size: .9rem; }
.downloads a span { display: block; margin-top: 7px; color: var(--muted); font-size: .8rem; }
@media screen and (max-width:760px) {
  .sheet { margin: 0; padding: 32px 22px; }
  .topline { flex-wrap: wrap; margin-bottom: 30px; }
  .facts, .columns, .stats, .decisions { grid-template-columns: 1fr; gap: 20px; }
  .delivery { grid-template-columns: 1fr; gap: 8px; }
  .checks td, .checks th { padding-right: 10px; }
  .endnote { margin-top: 30px; }
}
@page { size: A4; margin: 16mm 16mm 18mm; }
@media print {
  html, body { background: var(--paper); font-size: 10pt; line-height: 1.5; }
  body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  .toolbar { display: none; }
  .sheet { margin: 0; padding: 0; max-width: none; }
  .topline { margin-bottom: 7mm; padding-bottom: 4mm; }
  .brand { font-size: 19pt; }
  h1 { font-size: 32pt; }
  h2 { font-size: 23pt; }
  h3 { font-size: 13pt; }
  h2, h3 { break-after: avoid; }
  p { orphans: 3; widows: 3; }
  .lead { font-size: 11.5pt; }
  .eyebrow { font-size: 8pt; }
  .facts { gap: 5mm; margin: 7mm 0; padding: 5mm 0; }
  .chapter { margin-top: 0; break-before: page; }
  .chapter > h2 { margin-bottom: 6mm; }
  .delivery { gap: 4mm; padding: 3.5mm 0; break-inside: avoid; line-height: 1.4; }
  .deliveries-list > .delivery:nth-child(3) { break-before: page; }
  .summary { font-size: 10.5pt; }
  .delivery p { margin-top: 2.5mm; }
  .delivery ul { margin: 2.5mm 0; }
  .delivery li { margin: 1mm 0; }
  .number { font-size: 18pt; }
  figure, .decision, .notice, tr, .stats, .downloads li { break-inside: avoid; }
  figure { margin: 5mm 0; }
  figcaption { font-size: 8pt; }
  .decisions { gap: 0 6mm; }
  .decision { padding: 3mm 0; font-size: 9.3pt; line-height: 1.4; }
  .decision h3 { font-size: 11.5pt; }
  .decision p { margin-top: 2.5mm; }
  .stats { grid-template-columns: repeat(auto-fit,minmax(45mm,1fr)); gap: 4mm; margin: 6mm 0; }
  .stat { padding: 4mm; }
  .stat strong { font-size: 25pt; }
  .checks { margin-top: 5mm; }
  .checks td { font-size: 9pt; padding-block: 3.5mm; }
  .checks th { font-size: 8pt; }
  .endnote { margin-top: 6mm; font-size: 8pt; }
  .execution figure img { max-height: 165mm; width: 100%; height: auto; object-fit: contain; }
  .execution .meta { font-size: 9pt; }
  .downloads { margin-top: 5mm; gap: 3mm; }
  .downloads-title { margin-top: 7mm; }
  .downloads a { padding: 3mm; font-size: 8.5pt; }
  .limits { font-size: 9.5pt; }
  .limits li { margin: 2mm 0; }
  a { color: inherit; }
}
`;

function renderStats(stats) {
  const items = array(stats).filter(
    (item) => item && item.value !== undefined && item.label,
  );
  return items.length
    ? `<div class="stats" aria-label="Características e resultados apresentados">${items
        .map(
          (item) =>
            `<div class="stat"><strong>${escape(item.value)}</strong><span>${escape(item.label)}</span></div>`,
        )
        .join("")}</div>`
    : "";
}

function renderChecks(evidence) {
  const checks = array(evidence?.checks);
  return checks.length
    ? `<table class="checks"><thead><tr><th scope="col">Verificação</th><th scope="col">Resultado registrado</th><th scope="col">Escopo</th></tr></thead>
    <tbody>${checks.map((item) => `<tr><td>${escape(item.label)}</td><td>${escape(item.result)}</td><td>${escape(item.detail)}</td></tr>`).join("")}</tbody></table>`
    : "";
}

function renderDownloads(items) {
  const links = array(items)
    .map((item) => ({
      ...item,
      file: publicFile(item?.file, "json|md|txt|csv|ods|pdf|zip"),
    }))
    .filter((item) => item.label && item.file);
  return links.length
    ? `<ul class="downloads" aria-label="Arquivos da demonstração">${links.map((item) => `<li><a href="${escape(publicLink(item.file))}" download>${escape(item.label)}${item.description ? `<span>${escape(item.description)}</span>` : ""}</a></li>`).join("")}</ul>`
    : "";
}

async function renderExecutions(executions) {
  const sections = [];
  for (const execution of array(executions)) {
    if (!execution?.title) continue;
    const screenshot = publicFile(execution.screenshot, "png|jpg|jpeg|webp");
    const transcript = publicFile(execution.transcript, "txt|md");
    let figure = "";
    if (
      screenshot &&
      (await access(path.join(destination, screenshot)).then(
        () => true,
        () => false,
      ))
    ) {
      const dimensions = ["width", "height"]
        .filter((key) => Number.isInteger(execution[key]) && execution[key] > 0)
        .map((key) => ` ${key}="${execution[key]}"`)
        .join("");
      figure = `<figure><img src="${escape(screenshot)}" alt="${escape(execution.caption || execution.title)}"${dimensions}><figcaption>${escape(execution.caption || execution.title)}</figcaption></figure>`;
    }
    sections.push(`<section class="chapter execution"><p class="eyebrow">EXECUÇÃO LOCAL / REGISTRO DA DEMONSTRAÇÃO</p><h2>${escape(execution.title)}</h2>
      ${paragraph(execution.description)}${paragraph(execution.scope, "meta")}${paragraph(execution.result, "result")}${figure}
      ${transcript ? `<p class="meta"><a href="${escape(publicLink(transcript))}">Ler a saída desta execução em texto</a></p>` : ""}</section>`);
  }
  return sections.join("\n");
}

async function renderHtml(caseStudy) {
  const evidence = caseStudy.evidence || {};
  const demonstration = caseStudy.demonstration || {};
  const body = `<nav class="toolbar" aria-label="Navegação do documento"><a href="${escape(publicCaseUrl)}">Abrir case no portfólio</a><a href="${escape(publicLink("case-tecnico.pdf"))}" download>Baixar case em PDF</a></nav>
<main class="sheet">
  <header>
    <div class="topline"><div class="brand">vinsan<span>.</span></div><span class="meta">Vinicius Sanches · Case técnico</span></div>
    <p class="eyebrow">PYTHON / OPERAÇÃO, DADOS E OBSERVABILIDADE</p>
    <h1>${escape(caseStudy.title)}</h1>${paragraph(caseStudy.subtitle, "lead")}
    <dl class="facts"><div><dt>Contexto</dt><dd>${escape(caseStudy.context)}</dd></div><div><dt>Minha atuação</dt><dd>${escape(caseStudy.role)}</dd></div><div><dt>Estado apresentado</dt><dd>${escape(caseStudy.status)}</dd></div></dl>
    <div class="columns"><section><h2>O desafio</h2>${paragraph(caseStudy.problem)}</section><section><h2>Minha contribuição</h2>${paragraph(caseStudy.contribution)}</section></div>
    <ul class="tags" aria-label="Tecnologias e ferramentas">${array(
      caseStudy.technologies,
    )
      .map((item) => `<li>${escape(item)}</li>`)
      .join("")}</ul>
  </header>
  <section class="chapter"><p class="eyebrow">01 / O TRABALHO</p><h2>Modelar, validar e entregar.</h2>
    <div class="deliveries-list">${array(caseStudy.deliveries)
      .map(
        (item) =>
          `<article class="delivery"><span class="number">${escape(item.number)}</span><div><h3>${escape(item.title)}</h3>${paragraph(item.summary, "summary")}${paragraph(item.details)}${list(item.points)}${item.value ? `<p class="value"><strong>Valor do trabalho:</strong> ${escape(item.value)}</p>` : ""}</div></article>`,
      )
      .join("")}</div>
  </section>
  <section class="chapter"><p class="eyebrow">02 / FLUXO E DECISÕES</p><h2>Fontes claras.<br>Saídas que podem ser conferidas.</h2>
    <figure><img src="fluxo.svg" width="1200" height="800" alt="${escape(caseStudy.flowAlt)}"><figcaption>${escape(caseStudy.flowCaption)}</figcaption></figure>
    <div class="decisions">${array(caseStudy.decisions)
      .map(
        (item) =>
          `<article class="decision"><h3>${escape(item.title)}</h3>${paragraph(item.text)}</article>`,
      )
      .join("")}</div>
  </section>
  <section class="chapter"><p class="eyebrow">03 / EVIDÊNCIAS DA DEMONSTRAÇÃO</p><h2>Execução local, escopo explícito.</h2>
    ${paragraph(evidence.basis)}${paragraph(demonstration.date ? `Demonstração: ${demonstration.date}` : "", "meta")}${paragraph(demonstration.environment, "meta")}
    ${renderStats(caseStudy.stats)}${renderChecks(evidence)}${paragraph(evidence.scopeNote, "notice")}
  </section>
  ${await renderExecutions(caseStudy.executions)}
  <section class="chapter"><p class="eyebrow">04 / RESULTADO</p><h2>Processar os dados.<br>Preservar o significado.</h2>
    ${paragraph(caseStudy.outcome, "lead")}
    <figure><img src="integridade.svg" width="1200" height="810" alt="${escape(caseStudy.integrityAlt)}"><figcaption>${escape(caseStudy.integrityCaption)}</figcaption></figure>
  </section>
  <section class="chapter"><p class="eyebrow">05 / LIMITES E MATERIAIS</p><h2>Escopo e materiais para consulta.</h2>
    <div class="limits">${list(caseStudy.limits)}</div>${paragraph(caseStudy.visualNote, "meta")}
    <h3 class="downloads-title">Arquivos da demonstração</h3>${renderDownloads(caseStudy.downloads)}
    <footer class="endnote"><span>Vinicius Sanches · Desenvolvimento de software</span><a href="https://vinsan-page.vercel.app/">vinsan-page.vercel.app</a></footer>
  </section>
</main>`;
  return `<!doctype html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escape(caseStudy.subtitle)}"><meta name="author" content="Vinicius Sanches"><title>${escape(caseStudy.title)} | Vinsan</title><style>${css}</style></head><body>${body}</body></html>\n`;
}

async function main() {
  let raw;
  try {
    raw = await readFile(source, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        "src/data/pythonCase.json ainda não existe. Nenhum material foi gerado; execute novamente após preparar o conteúdo público.",
      );
    }
    throw error;
  }
  const caseStudy = JSON.parse(raw);
  for (const field of [
    "title",
    "subtitle",
    "context",
    "role",
    "status",
    "problem",
    "contribution",
    "outcome",
    "flowCaption",
    "flowAlt",
    "integrityCaption",
    "integrityAlt",
  ]) {
    if (typeof caseStudy[field] !== "string" || !caseStudy[field].trim())
      throw new Error(`Campo público obrigatório ausente: ${field}`);
  }
  if (/(?:\/home\/|\/tmp\/|file:\/\/)/i.test(raw))
    throw new Error(
      "O conteúdo público contém referência a caminho privado. Revise o JSON antes de gerar.",
    );
  const html = await renderHtml(caseStudy);
  await mkdir(destination, { recursive: true });
  for (const [name, content] of [
    ["fluxo.svg", flowDiagram(caseStudy)],
    ["integridade.svg", integrityDiagram(caseStudy)],
    ["case-tecnico.html", html],
  ]) {
    await writeFile(
      path.join(destination, name),
      content.replace(/[ \t]+$/gm, ""),
      "utf8",
    );
  }
  console.log(
    "Gerados 3 materiais públicos do case Python. Resultados e estatísticas vieram exclusivamente de src/data/pythonCase.json.",
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
