export const siteUrl = "https://vinsan-page.vercel.app";

export const profile = {
  name: "Vinicius Sanches",
  brand: "Vinsan",
  email: "VinSan.ed@proton.me",
  github: "https://github.com/vinsaned",
  linkedin: "https://www.linkedin.com/in/vinsan631",
  whatsappNumber: "5593991594902",
  curriculum: "/curriculo/curriculo-vinicius-sanches.pdf",
  curriculumSource: "/curriculo/curriculo-vinicius-sanches.html",
};

export const whatsappMessage =
  "Olá, Vinsan! Vi seu portfólio e gostaria de conversar sobre um projeto de software. Preciso de ajuda com: ____. Hoje utilizo: ____. Meu prazo desejado é: ____.";

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const emailUrl = `mailto:${profile.email}`;
