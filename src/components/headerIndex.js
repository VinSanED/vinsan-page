import { useState } from "react";
import {
  BrandLink,
  ButtonLink,
  DesktopNav,
  HeaderActions,
  HeaderInner,
  HeaderShell,
  MobileMenu,
  MobileToggle,
  NavItem,
} from "@/styles/siteStyles";

const navItems = [
  { label: "Início", href: "/#" },
  { label: "Projetos", href: "/#projects" },
  { label: "Competências", href: "/#competencies" },
  { label: "Sobre", href: "/#about" },
  { label: "Contato", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderShell>
      <HeaderInner>
        <BrandLink href="/#" aria-label="Voltar para o início da Vinsan Page">
          <strong>Vinicius Sanches</strong>
          <span>Software, sistemas e dados</span>
        </BrandLink>

        <DesktopNav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </DesktopNav>

        <HeaderActions>
          <ButtonLink
            tone="quiet"
            href="https://github.com/VinKSSan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ButtonLink>
          <ButtonLink href="/#contact">Contato</ButtonLink>
        </HeaderActions>

        <MobileToggle
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "X" : "Menu"}
        </MobileToggle>
      </HeaderInner>

      <MobileMenu id="mobile-navigation" data-open={isOpen}>
        <HeaderInner as="div">
          <nav aria-label="Navegação móvel">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavItem>
            ))}
            <NavItem
              href="https://github.com/VinKSSan"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </NavItem>
            <NavItem
              href="https://www.linkedin.com/in/vinicius-sanches-88aa27218"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              LinkedIn
            </NavItem>
          </nav>
        </HeaderInner>
      </MobileMenu>
    </HeaderShell>
  );
};

export default Header;
