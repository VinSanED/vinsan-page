import Head from "next/head";
import Image from "next/image";
import curriculoPdf from "../assets/new/Curriculo_Vinicius_Sanches.pdf";
import profilePhoto from "../assets/new/i.png";
import {
  ActionRow,
  ButtonLink,
  CardBrandStrip,
  CardContactPanel,
  CardPageShell,
  ChipList,
  ContactItem,
  ProfessionalCard,
  ProfileHeader,
  ProfilePanel,
  ProfilePhoto,
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
            <ProfileHeader>
              <ProfilePhoto>
                <Image
                  className="profileImage"
                  src={profilePhoto}
                  alt="Foto profissional de Vinicius Sanches"
                  fill
                  priority
                  sizes="(max-width: 640px) 12rem, 14rem"
                />
              </ProfilePhoto>
              <div>
                <h1>Vinicius Sanches</h1>
                <h2>Desenvolvimento de software, automação e dados</h2>
              </div>
            </ProfileHeader>
            <p>
              Desenvolvedor de software com foco em Java, aplicações web,
              automação e dados. Construo projetos da compreensão do problema à
              implementação, com testes e documentação.
            </p>
            <ActionRow>
              <ButtonLink href="/#projects">Ver portfólio</ButtonLink>
              <ButtonLink
                href={curriculoPdf}
                download="Curriculo_Vinicius_Sanches.pdf"
              >
                Baixar currículo
              </ButtonLink>
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
            <CardBrandStrip aria-label="Assinatura visual Vinsan.ed">
              <img src="/assets/VinSanLog1.png" alt="" aria-hidden="true" />
            </CardBrandStrip>
            <h3>Contato rápido</h3>
            <div className="contactList">
              <ContactItem href="mailto:VinSan.ed@proton.me">
                <span>E-mail</span>
                <strong>VinSan.ed@proton.me</strong>
              </ContactItem>
              <ContactItem
                href="https://github.com/vinsaned"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>github.com/vinsaned</strong>
              </ContactItem>
              <ContactItem
                href="https://www.linkedin.com/in/vinsan631"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>vinicius-sanches</strong>
              </ContactItem>
              <ContactItem
                href="https://wa.me/5593991594902?text=Ol%C3%A1%2C%20Vinicius.%20Quero%20avaliar%20um%20processo%20que%20hoje%20depende%20de%20planilhas%20ou%20WhatsApp.%20Meu%20fluxo%20%C3%A9%3A%20"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>Avaliar meu processo</strong>
              </ContactItem>
              <ContactItem
                href={curriculoPdf}
                download="Curriculo_Vinicius_Sanches.pdf"
              >
                <span>Currículo</span>
                <strong>PDF profissional</strong>
              </ContactItem>
            </div>
          </CardContactPanel>
        </ProfessionalCard>
      </CardPageShell>
    </>
  );
}
