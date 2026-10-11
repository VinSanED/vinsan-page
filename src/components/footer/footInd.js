import Link from "next/link";
import { profile, emailUrl } from "@/data/profile";
import styles from "@/styles/navigation.module.css";

const Foot = () => {
  return (
    <footer className={styles.footer} id="contact-footer">
      <div className={styles.footerInner}>
        <div className={styles.footerIntro}>
          <Link className={styles.brand} href="/" aria-label="Vinsan — início">
            vinsan<span aria-hidden="true">.</span>
          </Link>
          <p>
            APIs, autenticação, integrações e automações.
            <br />
            De boas perguntas a soluções úteis.
          </p>
        </div>

        <nav className={styles.footerLinks} aria-label="Explore o portfólio">
          <span>Explore</span>
          <Link href="/#projects">Projetos</Link>
          <Link href="/cardPage">Cartão profissional</Link>
          <a
            href={profile.curriculum}
            download="Curriculo_Vinicius_Sanches.pdf"
          >
            Currículo em PDF <span aria-hidden="true">↓</span>
          </a>
        </nav>

        <nav className={styles.footerLinks} aria-label="Canais de contato">
          <span>Conecte-se</span>
          <a href={emailUrl}>
            E-mail <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Vinicius Sanches</p>
          <a href="#site-top">
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
