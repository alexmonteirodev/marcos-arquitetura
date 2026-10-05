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
    slug: "casa-pn",
    name: "Casa PN",
    place: "Brasília · 2026",
    category: "Residencial",
    image:
      "Fachada da Casa PN com muxarabi, pedra e madeira, ao pôr do sol",
    src: "/imgs/projetos/casa-pn.jpg",
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
        {
          items: [
            { label: "Área externa com deck de madeira e piscina ao entardecer", ratio: "16/9", src: "/imgs/projetos/casa-pn/area-externa.jpg" },
          ],
        },
        {
          items: [
            { label: "Adega envidraçada com parede de pedra", ratio: "4/5", src: "/imgs/projetos/casa-pn/adega.jpg" },
            { label: "Lavabo com bancada em mármore e espelho redondo iluminado", ratio: "4/5", src: "/imgs/projetos/casa-pn/lavabo.jpg" },
          ],
        },
        {
          items: [
            { label: "Living integrado à cozinha, com forro de madeira e parede de pedra", ratio: "16/9", src: "/imgs/projetos/casa-pn/living.jpg" },
          ],
        },
        {
          split: true,
          items: [
            { label: "Espaço gourmet com ilha em mármore e mesa para doze lugares", ratio: "2/1", src: "/imgs/projetos/casa-pn/gourmet.jpg" },
            { label: "Banheiro com revestimento em pedra e bancada suspensa", ratio: "1/1", src: "/imgs/projetos/casa-pn/banheiro.jpg" },
          ],
        },
      ],
    },
  },
  {
    slug: "apt-rd",
    name: "Apt RD",
    place: "Goiânia · 2025",
    category: "Residencial",
    image: "Canto alemão em marcenaria curva, mesa de mármore e pendente de palha",
    src: "/imgs/projetos/apt-rd.jpg",
    page: {
      location: "Goiânia, GO",
      country: "Brasil",
      lead: "Apartamento compacto em que a marcenaria sob medida organiza cada ambiente, com madeira, tons terrosos e luz indireta.",
      paragraphs: [
        "[Texto de descrição do projeto: conceito, aproveitamento do espaço e escolhas de materiais.]",
        "[Segundo parágrafo: soluções de marcenaria, iluminação e rotina dos moradores.]",
      ],
      specs: [
        { label: "Ano", value: ["2025"] },
        { label: "Tipo", value: ["Residencial"] },
        { label: "Local", value: ["Goiânia, GO"] },
        { label: "Área", value: ["[00] m²"] },
        { label: "Colaboradores", value: ["[Marcenaria]"] },
        { label: "Imagens", value: ["[Autor]"] },
      ],
      gallery: [
        {
          items: [
            { label: "Cozinha integrada ao jantar, com coluna em madeira ripada e adega", ratio: "16/9", src: "/imgs/projetos/apt-rd/cozinha-e-jantar.jpg" },
          ],
        },
        {
          items: [
            { label: "Suíte com cabeceira em madeira e armários suspensos", ratio: "1/1", src: "/imgs/projetos/apt-rd/suite.jpg" },
            { label: "Quarto com bancada de estudos e painel em madeira", ratio: "1/1", src: "/imgs/projetos/apt-rd/quarto-escritorio.jpg" },
          ],
        },
        {
          items: [
            { label: "Sala de estar com painel curvo em madeira ripada", ratio: "16/9", src: "/imgs/projetos/apt-rd/sala.jpg" },
          ],
        },
        {
          items: [
            { label: "Banheiro social com revestimento em granilite e nicho metálico", ratio: "6/5", src: "/imgs/projetos/apt-rd/banheiro-social.jpg" },
            { label: "Banheiro da suíte com revestimento geométrico e bancada em mármore escuro", ratio: "6/5", src: "/imgs/projetos/apt-rd/banheiro-suite.jpg" },
          ],
        },
      ],
    },
  },
  {
    slug: "chacara-ba",
    name: "Chácara BA",
    place: "Pirenópolis · 2024",
    category: "Interiores",
    image: "Varanda gourmet com forro de madeira e piscina ao entardecer",
    src: "/imgs/projetos/chacara-ba.jpg",
    page: {
      location: "Pirenópolis, GO",
      country: "Brasil",
      lead: "Área de lazer aberta para a paisagem, com uma grande varanda que reúne cozinha, jantar e estar sob o forro de madeira.",
      paragraphs: [
        "[Texto de descrição do projeto: implantação na chácara, relação com a vista e escolhas de materiais.]",
        "[Segundo parágrafo: programa de lazer, conforto térmico e convivência ao ar livre.]",
      ],
      specs: [
        { label: "Ano", value: ["2024"] },
        { label: "Tipo", value: ["Interiores"] },
        { label: "Local", value: ["Pirenópolis, GO"] },
        { label: "Área", value: ["[00] m²"] },
        { label: "Colaboradores", value: ["[Construtora]", "[Paisagismo]"] },
        { label: "Imagens", value: ["[Autor]"] },
      ],
      gallery: [
        {
          items: [
            { label: "Fachada com varanda coberta e jardim de palmeiras", ratio: "16/9", src: "/imgs/projetos/chacara-ba/fachada.jpg" },
          ],
        },
        {
          items: [
            { label: "Deck de madeira com piscina e espreguiçadeiras", ratio: "16/9", src: "/imgs/projetos/chacara-ba/deck-e-piscina.jpg" },
            { label: "Lareira externa com sofá em L voltado para o campo", ratio: "16/9", src: "/imgs/projetos/chacara-ba/lareira-externa.jpg" },
          ],
        },
        {
          items: [
            { label: "Estar da varanda com poltronas, jantar e cozinha ao fundo", ratio: "16/9", src: "/imgs/projetos/chacara-ba/estar.jpg" },
          ],
        },
        {
          items: [
            { label: "Cozinha gourmet com churrasqueira, forno a lenha e ilha", ratio: "16/9", src: "/imgs/projetos/chacara-ba/cozinha-gourmet.jpg" },
            { label: "Mesa de jantar com pendentes e cobogós vazados", ratio: "16/9", src: "/imgs/projetos/chacara-ba/jantar.jpg" },
          ],
        },
      ],
    },
  },
  {
    slug: "casa-ej",
    name: "Casa EJ",
    place: "Anápolis · 2025",
    category: "Residencial",
    image: "Fachada da Casa EJ com volume em balanço e garagem em madeira ripada, ao entardecer",
    src: "/imgs/projetos/casa-ej.jpg",
    page: {
      location: "Anápolis, GO",
      country: "Brasil",
      lead: "Residência de linhas retas e tons neutros, com pé-direito duplo na sala e marcenaria que acompanha a rotina da família.",
      paragraphs: [
        "[Texto de descrição do projeto: partido arquitetônico, volumetria e escolhas de materiais.]",
        "[Segundo parágrafo: programa, integração dos ambientes e soluções de iluminação.]",
      ],
      specs: [
        { label: "Ano", value: ["2025"] },
        { label: "Tipo", value: ["Residencial"] },
        { label: "Local", value: ["Anápolis, GO"] },
        { label: "Área", value: ["[00] m²"] },
        { label: "Colaboradores", value: ["[Construtora]", "[Marcenaria]"] },
        { label: "Imagens", value: ["[Autor]"] },
      ],
      gallery: [
        {
          items: [
            { label: "Cozinha com ilha em madeira ripada e bancada de refeições", ratio: "16/9", src: "/imgs/projetos/casa-ej/cozinha-ilha.jpg" },
          ],
        },
        {
          items: [
            { label: "Sala com pé-direito duplo, escada em balanço e pendentes", ratio: "1/1", src: "/imgs/projetos/casa-ej/sala.jpg" },
            { label: "Espaço gourmet com churrasqueira e bancada em granito", ratio: "1/1", src: "/imgs/projetos/casa-ej/gourmet.jpg" },
          ],
        },
        {
          items: [
            { label: "Cozinha integrada com pendentes em cobre", ratio: "16/9", src: "/imgs/projetos/casa-ej/cozinha.jpg" },
          ],
        },
        {
          items: [
            { label: "Closet com marcenaria iluminada e espelho", ratio: "1/1", src: "/imgs/projetos/casa-ej/closet.jpg" },
            { label: "Penteadeira dupla com espelhos suspensos", ratio: "1/1", src: "/imgs/projetos/casa-ej/penteadeira.jpg" },
          ],
        },
      ],
    },
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
