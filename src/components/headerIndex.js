import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/navigation.module.css";

const navItems = [
  { label: "Cases", href: "/#case-autenticacao" },
  { label: "Serviços", href: "/#services" },
  { label: "Sobre", href: "/#about" },
  { label: "Contato", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const handleResize = (event) => {
      if (event.matches) closeMenu();
    };

    window.addEventListener("keydown", handleEscape);
    desktopQuery.addEventListener("change", handleResize);
    router.events.on("routeChangeStart", closeMenu);
    router.events.on("hashChangeStart", closeMenu);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      desktopQuery.removeEventListener("change", handleResize);
      router.events.off("routeChangeStart", closeMenu);
      router.events.off("hashChangeStart", closeMenu);
    };
  }, [isOpen, router.events]);

  return (
    <>
      <a
        className={styles.skipLink}
        href="#main-content"
        onClick={() => setIsOpen(false)}
      >
        Ir para o conteúdo
      </a>
      <header className={styles.header} id="site-top">
        <div className={styles.headerInner}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="Vinsan — início"
            onClick={() => setIsOpen(false)}
          >
            vinsan<span aria-hidden="true">.</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className={styles.headerContact} href="/#contact">
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>

          <button
            className={styles.mobileToggle}
            ref={toggleRef}
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span>{isOpen ? "Fechar" : "Menu"}</span>
            <span
              className={styles.menuIcon}
              data-open={isOpen}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav
          className={styles.mobileMenu}
          id="mobile-navigation"
          aria-label="Navegação móvel"
          hidden={!isOpen}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label} <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setIsOpen(false)}>
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
