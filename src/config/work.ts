export interface WorkItem {
  slug: string;
  client: string;
  title: string;
  description: string;
  url: string;
  screenshotAlt: string;
  tags: string[];
}

export const workItems: WorkItem[] = [
  {
    slug: "biodonth",
    client: "Biodonth",
    title: "Site institucional para clínica odontológica",
    description:
      "Site premium para a Biodonth — clínica odontológica com foco em implantes e estética dental. Design limpo, agendamento via WhatsApp, conformidade com normas do CFO/CRO e otimização para buscas locais.",
    url: "https://biodonth.com.br",
    screenshotAlt: "Captura de tela do site da Biodonth",
    tags: ["Odontologia", "Site Institucional", "SEO Local"],
  },
  {
    slug: "lkdigital",
    client: "LK Digital",
    title: "Site institucional para agência digital",
    description:
      "Nosso próprio site — construído com o mesmo padrão premium que entregamos aos clientes. Design sóbrio, performance otimizada, SEO técnico e integração com WhatsApp.",
    url: "https://lkdigital.odo.br",
    screenshotAlt: "Captura de tela do site da LK Digital",
    tags: ["Agência Digital", "Site Institucional", "Performance"],
  },
];
