export type GalleryItem = {
  /** Descrição da foto (placeholder enquanto não houver `src`, e texto alternativo depois) */
  label: string;
  /** Proporção CSS, ex.: "16/9", "4/5" */
  ratio?: string;
  src?: string;
};

export type ProjectPage = {
  location: string;
  country: string;
  lead: string;
  paragraphs: string[];
  specs: { label: string; value: string[] }[];
  /** Linhas da galeria: 1 item = largura total; 2 itens = lado a lado; `split` = 2fr + 1fr */
  gallery: { items: GalleryItem[]; split?: boolean }[];
};

export type Project = {
  slug: string;
  name: string;
  place: string;
  category: string;
  /** Descrição da foto (placeholder enquanto não houver `src`, e texto alternativo depois) */
  image: string;
  src?: string;
  /** Projetos com `page` ganham uma página própria em /projetos/[slug] */
  page?: ProjectPage;
};

export const projects: Project[] = [
  {
    slug: "terra-verde",
    name: "Terra Verde",
    place: "Brasília · 2026",
    category: "Residencial",
    image:
      "Fachada da casa Terra Verde com muxarabi, pedra e madeira, ao pôr do sol",
    src: "/imgs/projetos/terra-verde.jpg",
    page: {
      location: "Brasília, DF",
      country: "Brasil",
      lead: "Residência pensada para viver em contato com o jardim, com materiais naturais e luz presente em todos os ambientes.",
      paragraphs: [
        "[Texto de descrição do projeto: partido arquitetônico, implantação no terreno e escolhas de materiais.]",
        "[Segundo parágrafo: programa, soluções de conforto e relação com o entorno.]",
      ],
      specs: [
        { label: "Ano", value: ["2026"] },
        { label: "Tipo", value: ["Residencial"] },
        { label: "Local", value: ["Brasília, DF"] },
        { label: "Área", value: ["[00] m²"] },
        { label: "Colaboradores", value: ["[Construtora]", "[Paisagismo]"] },
        { label: "Imagens", value: ["[Autor]"] },
      ],
      gallery: [
        { items: [{ label: "imagem 01 · largura total", ratio: "16/9" }] },
        {
          items: [
            { label: "imagem 02 · vertical", ratio: "4/5" },
            { label: "imagem 03 · vertical", ratio: "4/5" },
          ],
        },
        { items: [{ label: "imagem 04 · largura total", ratio: "16/9" }] },
        {
          split: true,
          items: [
            { label: "imagem 05 · horizontal", ratio: "3/2" },
            { label: "imagem 06 · detalhe" },
          ],
        },
      ],
    },
  },
  {
    slug: "patio-nova",
    name: "Pátio Nova",
    place: "Goiânia · 2025",
    category: "Residencial",
    image: "foto · pátio interno com jardim",
    src: "/imgs/projetos/patio-nova.jpg",
  },
  {
    slug: "refugio-sereno",
    name: "Refúgio Sereno",
    place: "Pirenópolis · 2024",
    category: "Interiores",
    image: "foto · varanda com cobertura em madeira",
    src: "/imgs/projetos/refugio-sereno.jpg",
  },
  {
    slug: "casa-cerrado",
    name: "Casa Cerrado",
    place: "Anápolis · 2025",
    category: "Residencial",
    image: "foto · fachada em madeira e vidro",
    src: "/imgs/projetos/casa-cerrado.jpg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Próximo projeto na ordem da lista, voltando ao primeiro no fim */
export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

/** Link do card: página própria se existir, senão o contato */
export function projectHref(project: Project, base = "") {
  return project.page ? `/projetos/${project.slug}` : `${base}#contato`;
}
