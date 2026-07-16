import {
  FooterInner,
  FooterLinks,
  FooterShell,
} from "@/styles/siteStyles";

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
          <a href="https://github.com/VinKSSan" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-sanches-88aa27218"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/cardPage">Cartão profissional</a>
          <a href="/#">Topo</a>
        </FooterLinks>
      </FooterInner>
    </FooterShell>
  );
};

export default Foot;
