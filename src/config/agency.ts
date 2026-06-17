export const agency = {
  name: "LK Digital",
  domain: "lkdigitalbrasil.com.br",
  whatsapp: {
    number: "5500000000000", // TODO: replace with real number
    defaultMessage: "Olá! Gostaria de saber mais sobre os serviços da LK Digital.",
  },
  email: "contato@lkdigitalbrasil.com.br", // TODO: replace with real email
  social: {
    instagram: "https://instagram.com/lkdigitalbrasil", // TODO
    linkedin: "https://linkedin.com/company/lkdigital", // TODO
  },
  region: "Brasil",
  contactFormEndpoint: "/api/contact", // TODO: replace with form service URL if no backend
} as const;

export function whatsappUrl(message?: string) {
  const msg = message ?? agency.whatsapp.defaultMessage;
  return `https://wa.me/${agency.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}
