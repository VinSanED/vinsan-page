import { styled } from "@/styles/Styindex";
import { Conteiner } from "@/styles/globalSty";

export const HeaderShell = styled("header", {
  position: "sticky",
  top: 0,
  zIndex: 50,
  borderBottom: "1px solid rgba(215, 226, 230, 0.82)",
  backgroundColor: "rgba(247, 249, 251, 0.88)",
  backdropFilter: "blur(16px)",
});

export const HeaderInner = styled(Conteiner, {
  minHeight: "7.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2.4rem",
});

export const BrandLink = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "1rem",
  color: "$heading",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  strong: {
    color: "$heading",
    fontSize: "1.7rem",
    lineHeight: 1,
  },

  span: {
    color: "$textMuted",
    fontSize: "1.2rem",
    fontWeight: 500,
  },
});

export const DesktopNav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  "@tablet": {
    display: "none",
  },
});

export const NavItem = styled("a", {
  color: "$textMuted",
  fontSize: "1.45rem",
  fontWeight: 600,
  transition: "color .18s ease",

  "&:hover": {
    color: "$accent",
  },
});

export const HeaderActions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  "@tablet": {
    display: "none",
  },
});

export const MobileToggle = styled("button", {
  display: "none",
  minWidth: "7.2rem",
  height: "4.2rem",
  padding: "0 1.2rem",
  border: "1px solid $border",
  borderRadius: "8px",
  alignItems: "center",
  justifyContent: "center",
  color: "$heading",
  fontSize: "1.4rem",
  fontWeight: 700,

  "@tablet": {
    display: "inline-flex",
  },
});

export const MobileMenu = styled("div", {
  display: "none",
  borderTop: "1px solid $border",
  backgroundColor: "$surface",

  "&[data-open='true']": {
    display: "block",
  },

  nav: {
    display: "grid",
    gap: "0.4rem",
    paddingTop: "1.2rem",
    paddingBottom: "1.8rem",
  },

  a: {
    width: "100%",
    padding: "1.2rem 0",
  },
});

export const ButtonLink = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "4.4rem",
  padding: "0 1.8rem",
  borderRadius: "8px",
  border: "1px solid $accent",
  backgroundColor: "$accent",
  color: "#ffffff",
  fontSize: "1.5rem",
  fontWeight: 700,
  transition: "background-color .18s ease, border-color .18s ease, color .18s ease",

  "&:hover": {
    backgroundColor: "$accentStrong",
    borderColor: "$accentStrong",
  },

  variants: {
    tone: {
      secondary: {
        backgroundColor: "transparent",
        color: "$accent",

        "&:hover": {
          backgroundColor: "$accentSoft",
          borderColor: "$accent",
          color: "$accentStrong",
        },
      },
      quiet: {
        borderColor: "$border",
        backgroundColor: "$surface",
        color: "$text",

        "&:hover": {
          borderColor: "$borderStrong",
          backgroundColor: "$surfaceSoft",
        },
      },
    },
  },
});

export const HomeMain = styled("main", {
  background:
    "linear-gradient(180deg, $background 0%, $background 46%, $backgroundAlt 100%)",
});

export const Section = styled("section", {
  padding: "9.6rem 0",

  variants: {
    tone: {
      white: {
        backgroundColor: "$surface",
      },
      soft: {
        backgroundColor: "$surfaceSoft",
      },
    },
    compact: {
      true: {
        padding: "6.4rem 0",
      },
    },
  },

  "@tablet": {
    padding: "7.2rem 0",
  },

  "@mobile": {
    padding: "5.6rem 0",
  },
});

export const HeroSection = styled("section", {
  padding: "7.2rem 0 6.4rem",
  borderBottom: "1px solid $border",
});

export const HeroGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.15fr) minmax(32rem, 0.85fr)",
  gap: "5.6rem",
  alignItems: "center",

  "@tablet": {
    gridTemplateColumns: "1fr",
    gap: "3.2rem",
  },
});

export const Eyebrow = styled("p", {
  marginBottom: "1.6rem",
  color: "$accent",
  fontSize: "1.4rem",
  fontWeight: 700,
  letterSpacing: 0,
  textTransform: "uppercase",
});

export const HeroCopy = styled("div", {
  h1: {
    maxWidth: "72rem",
    marginBottom: "1.2rem",
    fontSize: "clamp(4rem, 5vw, 6.4rem)",
    lineHeight: 1.02,
  },

  h2: {
    marginBottom: "2.4rem",
    color: "$accentStrong",
    fontSize: "clamp(2.2rem, 3vw, 3.2rem)",
  },

  p: {
    maxWidth: "70rem",
    color: "$text",
    fontSize: "2rem",
  },
});

export const ActionRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.2rem",
  marginTop: "3.2rem",
});

export const HeroPanel = styled("aside", {
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  boxShadow: "0 24px 60px $shadow",
  overflow: "hidden",
});

export const BrandBanner = styled("div", {
  minHeight: "17rem",
  borderBottom: "1px solid $border",
  backgroundImage:
    "linear-gradient(90deg, rgba(7, 20, 28, 0.18), rgba(7, 20, 28, 0.04)), url('/fotLogNav.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",

  "@mobile": {
    minHeight: "13rem",
  },
});

export const PanelHeader = styled("div", {
  padding: "2rem",
  borderBottom: "1px solid $border",
  backgroundColor: "$accentWash",

  span: {
    color: "$accentStrong",
    fontSize: "1.3rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  strong: {
    display: "block",
    marginTop: "0.8rem",
    color: "$heading",
    fontSize: "2rem",
    lineHeight: 1.2,
  },
});

export const EvidenceList = styled("ul", {
  display: "grid",
  gap: "1.2rem",
  padding: "2rem",

  li: {
    display: "flex",
    gap: "1rem",
    color: "$text",
    lineHeight: 1.55,

    "&::before": {
      content: "",
      flex: "0 0 auto",
      width: "0.8rem",
      height: "0.8rem",
      marginTop: "0.8rem",
      borderRadius: "50%",
      backgroundColor: "$accent",
    },
  },
});

export const SectionIntro = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.65fr) minmax(28rem, 0.35fr)",
  gap: "3.2rem",
  alignItems: "end",
  marginBottom: "4rem",

  h2: {
    marginBottom: "1.2rem",
  },

  p: {
    maxWidth: "72rem",
  },

  "@tablet": {
    gridTemplateColumns: "1fr",
    alignItems: "start",
  },
});

export const IntroNote = styled("p", {
  padding: "1.6rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  fontSize: "1.5rem",
});

export const ProjectGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "2.4rem",

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const ProjectSubhead = styled(Conteiner, {
  marginTop: "4.8rem",
  marginBottom: "2rem",

  h3: {
    marginBottom: "0.8rem",
    fontSize: "2.6rem",
  },

  p: {
    maxWidth: "74rem",
  },
});

export const ProjectCard = styled("article", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  overflow: "hidden",
});

export const ProjectImage = styled("div", {
  position: "relative",
  aspectRatio: "16 / 10",
  backgroundColor: "$surfaceMuted",
  overflow: "hidden",

  ".coverImage": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const ProjectBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "2.2rem",

  span: {
    marginBottom: "1rem",
    color: "$accent",
    fontSize: "1.3rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  h3: {
    marginBottom: "1.2rem",
    fontSize: "2.4rem",
  },

  p: {
    fontSize: "1.55rem",
  },
});

export const ProjectMeta = styled("div", {
  display: "grid",
  gap: "1.4rem",
  marginTop: "2rem",

  strong: {
    display: "block",
    marginBottom: "0.6rem",
    color: "$heading",
    fontSize: "1.4rem",
  },
});

export const ChipList = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",

  li: {
    padding: "0.6rem 1rem",
    border: "1px solid $border",
    borderRadius: "999px",
    backgroundColor: "$surfaceSoft",
    color: "$text",
    fontSize: "1.3rem",
    fontWeight: 600,
  },
});

export const ProjectActions = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  marginTop: "auto",
  paddingTop: "2rem",
});

export const CardGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "2rem",

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const CompetencyCard = styled("article", {
  padding: "2.4rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",

  h3: {
    marginBottom: "1.2rem",
    fontSize: "2.4rem",
  },

  p: {
    marginBottom: "1.6rem",
    fontSize: "1.55rem",
  },
});

export const BulletList = styled("ul", {
  display: "grid",
  gap: "0.8rem",

  li: {
    position: "relative",
    paddingLeft: "1.8rem",
    color: "$text",
    lineHeight: 1.55,

    "&::before": {
      content: "",
      position: "absolute",
      top: "0.9rem",
      left: 0,
      width: "0.6rem",
      height: "0.6rem",
      borderRadius: "50%",
      backgroundColor: "$accent",
    },
  },
});

export const TechGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "1.8rem",

  "@lgScreen1": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});

export const TechGroup = styled("article", {
  padding: "2rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",

  h3: {
    marginBottom: "1.4rem",
    fontSize: "2rem",
  },
});

export const MethodGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "1.4rem",

  "@lgScreen1": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const MethodStep = styled("article", {
  padding: "2rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",

  span: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3.2rem",
    height: "3.2rem",
    marginBottom: "1.4rem",
    borderRadius: "50%",
    backgroundColor: "$accentSoft",
    color: "$accentStrong",
    fontSize: "1.4rem",
    fontWeight: 800,
  },

  h3: {
    marginBottom: "0.8rem",
    fontSize: "2rem",
  },

  p: {
    fontSize: "1.5rem",
  },
});

export const SplitGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.8fr) minmax(28rem, 0.45fr)",
  gap: "3.2rem",
  alignItems: "start",

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const TextBlock = styled("div", {
  h2: {
    marginBottom: "1.8rem",
  },

  p: {
    marginBottom: "1.4rem",
  },
});

export const AvailabilityBox = styled("aside", {
  padding: "2.4rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$accentWash",

  h3: {
    marginBottom: "1rem",
    fontSize: "2.4rem",
  },

  p: {
    color: "$text",
    fontSize: "1.6rem",
  },
});

export const SignatureBadge = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "8.8rem",
  marginBottom: "2rem",
  padding: "1.4rem",
  border: "1px solid rgba(0, 121, 134, 0.18)",
  borderRadius: "8px",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.86), rgba(218,250,250,0.56))",
  overflow: "hidden",

  img: {
    width: "100%",
    maxWidth: "28rem",
    height: "auto",
    objectFit: "contain",
  },
});

export const ContactGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "1.4rem",

  "@tablet": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});

export const ContactItem = styled("a", {
  minHeight: "9.2rem",
  padding: "1.8rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  color: "$text",
  transition: "border-color .18s ease, transform .18s ease",

  span: {
    display: "block",
    marginBottom: "0.6rem",
    color: "$textMuted",
    fontSize: "1.3rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  strong: {
    color: "$heading",
    fontSize: "1.55rem",
    lineHeight: 1.35,
  },

  "&:hover": {
    borderColor: "$accent",
    transform: "translateY(-2px)",
  },
});

export const ArticleGrid = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "1.8rem",

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const ArticleCard = styled("a", {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  color: "$text",
  overflow: "hidden",

  ".articleImage": {
    maxHeight:'75vh',
    aspectRatio: "16 / 9",
    objectFit: "cover",
  },

  div: {
    padding: "1.8rem",
  },

  span: {
    color: "$accent",
    fontSize: "1.25rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  h3: {
    marginTop: "0.8rem",
    fontSize: "2rem",
  },
});

export const FooterShell = styled("footer", {
  borderTop: "1px solid $border",
  backgroundColor: "$heading",
  color: "#ffffff",
});

export const FooterInner = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  gap: "3.2rem",
  alignItems: "start",
  paddingTop: "4rem",
  paddingBottom: "4rem",

  p: {
    maxWidth: "70rem",
    marginTop: "0.8rem",
    color: "rgba(255,255,255,0.72)",
    fontSize: "1.5rem",
  },

  strong: {
    color: "#ffffff",
    fontSize: "1.6rem",
  },

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const FooterLinks = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: "1rem",

  a: {
    color: "rgba(255,255,255,0.78)",
    fontSize: "1.4rem",

    "&:hover": {
      color: "#ffffff",
    },
  },

  "@tablet": {
    justifyContent: "flex-start",
  },
});

export const CardPageShell = styled("main", {
  minHeight: "calc(100vh - 14rem)",
  padding: "8rem 0",
  background:
    "linear-gradient(180deg, $background 0%, $surfaceSoft 100%)",
});

export const ProfessionalCard = styled(Conteiner, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 0.9fr) minmax(28rem, 0.45fr)",
  gap: "2.4rem",
  alignItems: "stretch",

  "@tablet": {
    gridTemplateColumns: "1fr",
  },
});

export const ProfilePanel = styled("section", {
  padding: "3.2rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$surface",
  boxShadow: "0 24px 60px $shadow",

  h1: {
    marginBottom: "0.8rem",
    fontSize: "clamp(3rem, 4vw, 4.4rem)",
    lineHeight: 1,
  },

  h2: {
    marginBottom: 0,
    color: "$accentStrong",
    fontSize: "2.2rem",
    lineHeight: 1.25,
  },

  p: {
    maxWidth: "76rem",
  },

  ".focusList": {
    marginTop: "2.4rem",
  },
});

export const ProfileHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2rem",
  marginBottom: "2.4rem",

  "@mobile": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.6rem",
  },
});

export const ProfilePhoto = styled("div", {
  position: "relative",
  width: "14rem",
  height: "14rem",
  flex: "0 0 14rem",
  overflow: "hidden",
  border: "1px solid $border",
  borderRadius: "50%",
  backgroundColor: "$surfaceSoft",
  boxShadow: "0 18px 42px $shadow",

  ".profileImage": {
    objectFit: "cover",
    objectPosition: "50% 34%",
  },

  "@mobile": {
    width: "12rem",
    height: "12rem",
    flexBasis: "12rem",
  },
});

export const CardContactPanel = styled("aside", {
  padding: "2.4rem",
  border: "1px solid $border",
  borderRadius: "8px",
  backgroundColor: "$accentWash",

  h3: {
    marginBottom: "1.4rem",
    fontSize: "2.4rem",
  },

  ".contactList": {
    display: "grid",
    gap: "1rem",
  },
});

export const CardBrandStrip = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "9.6rem",
  marginBottom: "2rem",
  padding: "1.2rem",
  border: "1px solid rgba(0, 121, 134, 0.18)",
  borderRadius: "8px",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(224,251,251,0.72))",

  img: {
    width: "100%",
    maxWidth: "24rem",
    height: "auto",
    objectFit: "contain",
  },
});
