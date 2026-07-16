import Head from "next/head";
import {
  ActionRow,
  ButtonLink,
  CardContactPanel,
  CardPageShell,
  ChipList,
  ContactItem,
  ProfessionalCard,
  ProfilePanel,
} from "@/styles/siteStyles";

const focusItems = [
  "desenvolvimento de sistemas",
  "automação de processos",
  "dashboards e indicadores",
  "integração e dados",
  "testes e documentação",
];

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Cartão profissional | Vinicius Sanches</title>
        <meta
          name="description"
          content="Cartão profissional de Vinicius Sanches, com foco em desenvolvimento de sistemas, automação e dados."
        />
      </Head>

      <CardPageShell>
        <ProfessionalCard>
          <ProfilePanel>
            <h1>Vinicius Sanches</h1>
            <h2>Software, sistemas e dados</h2>
            <p>
              Desenvolvedor e estudante das ciências da computação, com atuação
              concentrada em aplicações, automações, ferramentas internas,
              organização de dados e documentação técnica.
            </p>
            <ActionRow>
              <ButtonLink href="/#projects">Ver portfólio</ButtonLink>
              <ButtonLink tone="secondary" href="mailto:VinSan.ed@proton.me">
                Enviar e-mail
              </ButtonLink>
            </ActionRow>

            <div className="focusList">
              <ChipList>
                {focusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ChipList>
            </div>
          </ProfilePanel>

          <CardContactPanel>
            <h3>Contato rápido</h3>
            <div>
              <ContactItem href="mailto:VinSan.ed@proton.me">
                <span>E-mail</span>
                <strong>VinSan.ed@proton.me</strong>
              </ContactItem>
              <ContactItem
                href="https://github.com/VinKSSan"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>github.com/VinKSSan</strong>
              </ContactItem>
              <ContactItem
                href="https://www.linkedin.com/in/vinicius-sanches-88aa27218"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>vinicius-sanches</strong>
              </ContactItem>
              <ContactItem
                href="https://wa.me/559392283745"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>Contato direto</strong>
              </ContactItem>
            </div>
          </CardContactPanel>
        </ProfessionalCard>
      </CardPageShell>
    </>
  );
}
