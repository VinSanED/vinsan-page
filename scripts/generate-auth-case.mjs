import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "src/data/authenticationCase.json");
const destination = path.join(root, "public/cases/autenticacao");
const caseStudy = JSON.parse(await readFile(source, "utf8"));

const escape = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);
const number = (value) => new Intl.NumberFormat("pt-BR").format(value);
const list = (items) => `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>`;
const paragraph = (text, className = "") => `<p${className ? ` class="${className}"` : ""}>${escape(text)}</p>`;

const accessSteps = [
  ["Requisição", ["Credenciais e contexto", "recebidos"]],
  ["Identidade", ["Validade e vínculo", "verificados"]],
  ["Permissão", ["Ação e recurso", "avaliados"]],
  ["Operação", ["Regra de negócio", "do integrador"]],
];
const deliverySteps = ["Contrato", "Implementação", "Testes", "Evidências", "Pacote"];

function svgText(x, y, value, attributes = "") {
  return `<text x="${x}" y="${y}" ${attributes}>${escape(value)}</text>`;
}

function responsibilitiesDiagram() {
  const nodes = accessSteps.map(([title, lines], index) => {
    const x = 54 + index * 278;
    return `<g>
      <rect x="${x}" y="177" width="248" height="191" rx="13" fill="#244d42" stroke="#718d7c" />
      ${svgText(x + 23, 214, `0${index + 1}`, 'font-size="14" fill="#d5f38a" letter-spacing="1"')}
      ${svgText(x + 23, 259, title, 'font-size="25" fill="#f5f6f2" font-weight="600"')}
      ${svgText(x + 23, 301, lines[0], 'font-size="17" fill="#d8e6da"')}
      ${svgText(x + 23, 328, lines[1], 'font-size="17" fill="#d8e6da"')}
      ${index < accessSteps.length - 1 ? `<path d="M${x + 254} 273h18m-5-5 5 5-5 5" fill="none" stroke="#c4d9bd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />` : ""}
    </g>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="540" viewBox="0 0 1200 540" role="img" aria-labelledby="title description">
  <title id="title">Identificar não é autorizar</title>
  <desc id="description">Modelo conceitual: requisição, identidade, permissão e operação. Não representa a topologia, a ordem interna dos componentes ou a configuração do cliente.</desc>
  <rect width="1200" height="540" rx="20" fill="#173f36" />
  <g font-family="Arial, Helvetica, sans-serif">
    ${svgText(54, 52, "DIAGRAMA CONCEITUAL / RESPONSABILIDADES", 'font-size="14" fill="#c7deb6" letter-spacing="2"')}
    ${svgText(54, 111, "Identificar não é autorizar.", 'font-size="39" fill="#f5f6f2" font-weight="600"')}
    ${nodes}
    ${svgText(54, 413, "Se uma verificação necessária falha, a operação não deve prosseguir.", 'font-size="20" fill="#dbecbe"')}
    <path d="M54 443h1092" stroke="#57756a" />
    ${svgText(54, 480, "Abstração técnica criada para o case. Não representa a topologia, a ordem interna", 'font-size="16" fill="#d8e6da"')}
    ${svgText(54, 506, "dos componentes ou a configuração do cliente. Sem dados operacionais.", 'font-size="16" fill="#d8e6da"')}
  </g>
</svg>\n`;
}

function validationDiagram() {
  const nodes = deliverySteps.map((title, index) => {
    const x = 54 + index * 224;
    return `<g>
      <rect x="${x}" y="160" width="197" height="142" rx="10" fill="#f5f6f2" stroke="#b9c8ae" />
      ${svgText(x + 19, 195, `0${index + 1}`, 'font-size="14" fill="#527249" letter-spacing="1"')}
      ${svgText(x + 19, 249, title, 'font-size="23" fill="#173f36" font-weight="600"')}
      ${index < deliverySteps.length - 1 ? `<path d="M${x + 201} 232h19m-5-5 5 5-5 5" fill="none" stroke="#527249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />` : ""}
    </g>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="430" viewBox="0 0 1200 430" role="img" aria-labelledby="title description">
  <title id="title">Do comportamento esperado ao pacote verificável</title>
  <desc id="description">Síntese conceitual do método de entrega: contrato, implementação, testes, evidências e pacote. Não é a reprodução de um pipeline interno.</desc>
  <rect width="1200" height="430" rx="20" fill="#e9ede2" />
  <g font-family="Arial, Helvetica, sans-serif">
    ${svgText(54, 51, "DIAGRAMA CONCEITUAL / MÉTODO DE ENTREGA", 'font-size="14" fill="#426153" letter-spacing="2"')}
    ${svgText(54, 108, "Do comportamento esperado ao pacote verificável.", 'font-size="34" fill="#173f36" font-weight="600"')}
    ${nodes}
    ${svgText(54, 351, "Definir, implementar, testar, registrar e empacotar.", 'font-size="21" fill="#294c38"')}
    ${svgText(54, 391, "Representação conceitual. Os artefatos e os procedimentos internos permanecem privados.", 'font-size="16" fill="#526657"')}
  </g>
</svg>\n`;
}

const commonCss = `
  :root { color-scheme: light; --paper: #f5f6f2; --ink: #172b27; --green: #17483e; --muted: #53665b; --line: #d5ded1; --soft: #e9ede2; }
  * { box-sizing: border-box; }
  html { background: #e7ece3; color: var(--ink); font: 16px/1.65 Arial, Helvetica, sans-serif; }
  body { margin: 0; }
  a { color: var(--green); text-underline-offset: 4px; }
  a:focus-visible { outline: 3px solid #779252; outline-offset: 5px; }
  h1, h2, h3, p, dd { overflow-wrap: anywhere; }
  h1, h2, h3 { font-weight: 600; line-height: 1.15; margin: 0; }
  h1 { font-size: clamp(2.4rem, 4.5vw, 4.2rem); letter-spacing: -.055em; max-width: 930px; }
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
  .lead { font-size: 1.18rem; line-height: 1.65; max-width: 890px; }
  .notice { border-left: 3px solid #749258; background: var(--soft); padding: 16px 20px; margin: 26px 0; color: #2b4b36; }
  .meta { font-size: .86rem; color: var(--muted); }
  .facts { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 24px; margin: 30px 0; padding: 22px 0; border-block: 1px solid var(--line); }
  dt { color: var(--muted); font-size: .78rem; margin-bottom: 7px; }
  dd { margin: 0; line-height: 1.5; }
  .chapter { margin-top: 52px; }
  .chapter > h2 { margin-bottom: 24px; }
  .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; list-style: none; margin: 24px 0 0; }
  .tags li { border: 1px solid #c2cfba; border-radius: 40px; padding: 5px 12px; font-size: .8rem; margin: 0; }
  .delivery { display: grid; grid-template-columns: 48px 1fr; gap: 24px; border-top: 1px solid var(--line); padding: 26px 0; }
  .number { color: #648047; font-size: 1.8rem; }
  .summary { color: #294c38; font-size: 1.1rem; }
  .value { margin-top: 20px; padding-left: 15px; border-left: 2px solid #9bb08b; }
  figure { margin: 26px 0; }
  figure img { display: block; width: 100%; height: auto; }
  figcaption { color: var(--muted); font-size: .78rem; line-height: 1.6; margin-top: 13px; }
  .decision { padding: 18px 0; border-top: 1px solid var(--line); }
  .stats { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 20px; margin: 30px 0; }
  .stat { padding: 22px 24px; border: 1px solid var(--line); border-radius: 9px; min-width: 0; }
  .stat:first-child { background: var(--green); color: #f5f6f2; border-color: var(--green); }
  .stat strong { display: block; font-size: clamp(2rem, 4.2vw, 3.6rem); font-weight: 500; line-height: 1.1; letter-spacing: -.045em; }
  .stat span { display: block; font-size: .86rem; margin-top: 12px; }
  .checks { width: 100%; border-collapse: collapse; margin-top: 26px; table-layout: fixed; }
  .checks th { text-align: left; font-size: .76rem; color: #426153; letter-spacing: .04em; padding: 12px 14px 12px 0; border-bottom: 1px solid #a7ba9d; }
  .checks td { vertical-align: top; padding: 16px 18px 16px 0; border-bottom: 1px solid var(--line); font-size: .91rem; overflow-wrap: anywhere; }
  .checks td:last-child { color: var(--muted); }
  .checks th:nth-child(1), .checks th:nth-child(2) { width: 27%; }
  .checks th:nth-child(3) { width: 46%; }
  .endnote { display: flex; justify-content: space-between; gap: 18px; flex-wrap: wrap; border-top: 1px solid var(--line); margin-top: 38px; padding-top: 18px; font-size: .8rem; color: var(--muted); }
  .toolbar { max-width: 1240px; margin: 20px auto; display: flex; flex-wrap: wrap; gap: 20px; padding: 0 30px; font-size: .9rem; }
  .execution { border-top: 1px solid var(--line); padding-top: 32px; }
  .execution .result { color: var(--green); font-size: 1.2rem; font-weight: 600; }
  .execution figure { border: 1px solid var(--line); border-radius: 9px; overflow: hidden; }
  .execution figcaption { padding: 0 18px 16px; }
  @media screen and (max-width: 760px) {
    .sheet { margin: 0; padding: 32px 22px; }
    .topline { flex-wrap: wrap; margin-bottom: 30px; }
    .facts, .columns, .stats { grid-template-columns: 1fr; gap: 20px; }
    .delivery { grid-template-columns: 1fr; gap: 8px; }
    .checks { font-size: .85rem; }
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
    h2 { font-size: 24pt; }
    h3 { font-size: 13pt; }
    p { orphans: 3; widows: 3; }
    .lead { font-size: 11.5pt; }
    .eyebrow { font-size: 8pt; }
    .facts { gap: 5mm; margin: 7mm 0; padding: 5mm 0; }
    .chapter { margin-top: 0; break-before: page; }
    .chapter > h2 { margin-bottom: 6mm; }
    .chapter:first-child { break-before: auto; }
    .delivery { gap: 4mm; padding: 3.5mm 0; break-inside: avoid; line-height: 1.4; }
    .summary { font-size: 10.5pt; }
    .delivery p { margin-top: 2.5mm; }
    .delivery ul { margin: 2.5mm 0; }
    .delivery li { margin: 1mm 0; }
    .number { font-size: 18pt; }
    figure, .decision, .notice, tr, .stats { break-inside: avoid; }
    figure { margin: 6mm 0; }
    figcaption { font-size: 8pt; }
    .stats { gap: 4mm; margin: 7mm 0; }
    .stat { padding: 5mm; }
    .stat strong { font-size: 29pt; }
    .checks { margin-top: 5mm; }
    .checks td { font-size: 9pt; padding-block: 4mm; }
    .checks th { font-size: 8pt; }
    .endnote { margin-top: 7mm; font-size: 8pt; }
    .execution { border-top: 0; padding-top: 0; }
    .execution figure img { max-height: 172mm; width: 100%; height: auto; object-fit: contain; }
    a { color: inherit; }
  }
`;

function htmlDocument(title, description, body, extraCss = "") {
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description)}">
  <meta name="author" content="Vinicius Sanches">
  <title>${escape(title)}</title>
  <style>${commonCss}\n${extraCss}</style>
</head>
<body>${body}</body>
</html>\n`;
}

const brand = `<div class="brand">vinsan<span>.</span></div>`;
const disclaimer = "Extrato anonimizado de registros históricos de validação local. Esta página apresenta uma síntese documental; não é a interface do cliente nem uma nova execução dessa suíte.";

function evidenceStats() {
  return `<div class="stats" aria-label="Resultados registrados na execução histórica selecionada">
    <div class="stat"><strong>${number(caseStudy.evidence.passed)} / ${number(caseStudy.evidence.total)}</strong><span>testes aprovados na execução histórica selecionada</span></div>
    <div class="stat"><strong>${number(caseStudy.evidence.failed)}</strong><span>falhas registradas</span></div>
    <div class="stat"><strong>${number(caseStudy.evidence.skipped)}</strong><span>testes ignorados</span></div>
  </div>`;
}

function evidenceChecks() {
  return `<table class="checks">
    <thead><tr><th scope="col">Verificação</th><th scope="col">Resultado registrado</th><th scope="col">Leitura do resultado</th></tr></thead>
    <tbody>${caseStudy.evidence.checks.map((check) => `<tr><td>${escape(check.label)}</td><td>${escape(check.result)}</td><td>${escape(check.detail)}</td></tr>`).join("")}</tbody>
  </table>`;
}

function historicalReport() {
  const body = `<main class="sheet">
    <header>
      <div class="topline">${brand}<span class="meta">Case técnico anônimo · Autenticação e controle de acesso</span></div>
      <p class="eyebrow">EXTRATO DOCUMENTAL / RESULTADOS HISTÓRICOS</p>
      <h1>Validação local documentada.</h1>
      ${paragraph(caseStudy.evidence.scope, "lead")}
      ${paragraph(disclaimer, "notice")}
    </header>
    ${evidenceStats()}
    ${paragraph(caseStudy.evidence.environment)}
    ${evidenceChecks()}
    ${paragraph(caseStudy.evidence.scopeNote, "notice")}
    <footer class="endnote"><span>Vinicius Sanches · Portfólio técnico</span><a href="/cases/autenticacao">Ler o case completo</a></footer>
  </main>`;
  return htmlDocument("Evidências históricas de validação local | Vinsan", disclaimer, body,
    ".sheet { max-width: 1320px; } .topline { margin-bottom: 32px; } h1 { font-size: clamp(2.4rem, 4vw, 3.8rem); } @media print { h1 { font-size: 28pt; } }");
}

async function executionSections() {
  // Optional public-only data: executions[{title, description, scope, result,
  // caption, screenshot}]. Each screenshot is a filename in this output folder.
  // An absent execution or image is omitted; the generator never invents results.
  if (!Array.isArray(caseStudy.executions)) return "";
  const sections = [];
  for (const execution of caseStudy.executions) {
    let visual = "";
    if (typeof execution.screenshot === "string" && /^[a-zA-Z0-9][a-zA-Z0-9._-]*\.(png|jpe?g|webp)$/.test(execution.screenshot)) {
      const exists = await access(path.join(destination, execution.screenshot)).then(() => true, () => false);
      if (exists) {
        visual = `<figure><img src="${escape(execution.screenshot)}" alt="${escape(execution.caption || execution.title)}"><figcaption>${escape(execution.caption || "Captura da execução local descrita nesta seção.")}</figcaption></figure>`;
      }
    }
    sections.push(`<section class="chapter execution">
      <p class="eyebrow">EXECUÇÃO LOCAL / REGISTRO DESTA REVISÃO</p>
      <h2>${escape(execution.title)}</h2>
      ${paragraph(execution.description)}
      ${paragraph(execution.scope, "meta")}
      ${paragraph(execution.result, "result")}
      ${visual}
    </section>`);
  }
  return sections.join("");
}

async function printableCase() {
  const body = `<nav class="toolbar" aria-label="Navegação do documento"><a href="/cases/autenticacao">Abrir case no portfólio</a><a href="evidencias.html">Consultar evidências históricas</a></nav>
  <main class="sheet">
    <header>
      <div class="topline">${brand}<span class="meta">Vinicius Sanches · Case técnico</span></div>
      <p class="eyebrow">BACK-END, AUTENTICAÇÃO E CONTROLE DE ACESSO</p>
      <h1>${escape(caseStudy.title)}</h1>
      ${paragraph(caseStudy.subtitle, "lead")}
      <dl class="facts"><div><dt>Contexto</dt><dd>${escape(caseStudy.context)}</dd></div><div><dt>Minha atuação</dt><dd>${escape(caseStudy.role)}</dd></div><div><dt>Estado comprovado</dt><dd>${escape(caseStudy.status)}</dd></div></dl>
      <div class="columns"><section><h2>O desafio</h2>${paragraph(caseStudy.problem)}</section><section><h2>Minha contribuição</h2>${paragraph(caseStudy.contribution)}</section></div>
      <ul class="tags" aria-label="Tecnologias e ferramentas">${caseStudy.technologies.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>
    </header>

    <section class="chapter">
      <p class="eyebrow">01 / O TRABALHO</p><h2>Três frentes de contribuição.</h2>
      ${caseStudy.deliveries.map((item) => `<article class="delivery"><span class="number">${escape(item.number)}</span><div><h3>${escape(item.title)}</h3>${paragraph(item.summary, "summary")}${paragraph(item.details)}${list(item.points)}<p class="value"><strong>Valor para a equipe:</strong> ${escape(item.value)}</p></div></article>`).join("")}
    </section>

    <section class="chapter">
      <p class="eyebrow">02 / DECISÕES DE ENGENHARIA</p><h2>Responsabilidades claras.<br>Comportamentos verificáveis.</h2>
      <figure><img src="responsabilidades.svg" alt="Modelo conceitual: requisição, identidade, permissão e operação."><figcaption>Abstração técnica criada para este case. Não representa a topologia, a ordem interna de componentes ou a configuração do cliente.</figcaption></figure>
      ${caseStudy.decisions.map((item) => `<article class="decision"><h3>${escape(item.title)}</h3>${paragraph(item.text)}</article>`).join("")}
    </section>

    <section class="chapter">
      <p class="eyebrow">03 / EVIDÊNCIAS HISTÓRICAS</p><h2>Validação local documentada.</h2>
      ${paragraph(caseStudy.evidence.basis)}
      ${paragraph(disclaimer, "notice")}
      ${evidenceStats()}
      ${paragraph(caseStudy.evidence.scope)}
      ${paragraph(caseStudy.evidence.environment, "meta")}
      ${evidenceChecks()}
      ${paragraph(caseStudy.evidence.scopeNote, "notice")}
    </section>

    ${await executionSections()}

    <section class="chapter">
      <p class="eyebrow">04 / RESULTADO E LIMITES</p><h2>Preparação para avaliação,<br>com limites explícitos.</h2>
      ${paragraph(caseStudy.outcome, "lead")}
      <figure><img src="validacao.svg" alt="Síntese conceitual do método de entrega: contrato, implementação, testes, evidências e pacote."><figcaption>Síntese do método de entrega. Os artefatos e os procedimentos internos permanecem privados.</figcaption></figure>
      ${list(caseStudy.limits)}
      ${paragraph(caseStudy.visualNote, "meta")}
      <footer class="endnote"><span>Vinicius Sanches · Desenvolvimento de software</span><a href="https://vinsan-page.vercel.app/">vinsan-page.vercel.app</a></footer>
    </section>
  </main>`;
  return htmlDocument(`${caseStudy.title} | Vinsan`, caseStudy.subtitle, body);
}

await mkdir(destination, { recursive: true });
const outputs = [
  ["responsabilidades.svg", responsibilitiesDiagram()],
  ["validacao.svg", validationDiagram()],
  ["evidencias.html", historicalReport()],
  ["case-tecnico.html", await printableCase()],
];
for (const [name, content] of outputs) {
  const formatted = name.endsWith(".svg") ? content.replace(/[\t ]+$/gm, "") : content;
  await writeFile(path.join(destination, name), formatted, "utf8");
}
console.log(`Gerados ${outputs.length} arquivos públicos a partir do conteúdo do case.`);
