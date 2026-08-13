import {
  FooterInner,
  FooterLinks,
  FooterShell,
} from "@/styles/siteStyles";
import curriculoPdf from "@/assets/new/Curriculo_Vinicius_Sanches.pdf";

const Foot = () => {
  return (
    <FooterShell id="contact-footer">
      <FooterInner>
        <div>
          <strong>Vinicius Sanches</strong>
          <p>
            Página pessoal para reunir projetos, competências e canais de contato
            relacionados a desenvolvimento de sistemas, automação e dados.
          </p>
        </div>

        <FooterLinks aria-label="Links de contato no rodapé">
          <a href="mailto:VinSan.ed@proton.me">E-mail</a>
          <a href="https://github.com/vinsaned" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinsan631"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/cardPage">Cartão profissional</a>
          <a href={curriculoPdf} download="Curriculo_Vinicius_Sanches.pdf">
            Currículo
          </a>
          <a href="/#">Topo</a>
        </FooterLinks>
      </FooterInner>
    </FooterShell>
  );
};

export default Foot;
