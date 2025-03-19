// Constantes base e semantic
const FontSizes = {
  base: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  semantic: {
    reading: 16,
    lead: 18,
    firstLetter: 48,
    button: 14,
    label: 12,
    input: 16,
    alert: 20,
    badge: 10,
  },
} as const;

const SpaceGaps = {
  base: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  semantic: {
    paragraphGap: 16,
    sectionGap: 40,
    containerPadding: 24,
    iconSpacing: 8,
    touchMinimal: 48,
  },
} as const;

const BorderRadius = {
  base: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  semantic: {
    button: 8,
    card: 12,
    input: 6,
    pill: 20,
    circle: 9999,
  },
} as const;

const LineHeights = {
  base: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 40,
  },
  semantic: {
    firstLetter: 1,
    reading: 1.6,
    heading: 1.2,
    code: 1.4,
    compact: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
} as const;

const FontWeights = {
  base: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "700",
  },
  semantic: {
    heading: "600",
    button: "500",
    firstLetter: "200",
    link: "400",
  },
} as const;

const PaddingMargin = {
  base: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  semantic: {
    button: "12px 24px",
    input: "8px 12px",
    card: 16,
    section: 40,
  },
} as const;

const Sizes = {
  base: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
  },
  semantic: {
    touchMinimal: 40,
    avatar: {
      sm: 32,
      md: 48,
      lg: 64,
    },
    icon: {
      sm: 16,
      md: 24,
      lg: 32,
    },
  },
} as const;

const Transitions = {
  base: {
    fast: "0.15s",
    medium: "0.3s",
    slow: "0.5s",
  },
  semantic: {
    hover: "0.2s ease",
    focus: "0.1s linear",
    modal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

const ZIndices = {
  base: {
    low: 10,
    medium: 100,
    high: 1000,
  },
  semantic: {
    dropdown: 100,
    sticky: 200,
    modal: 300,
    toast: 500,
  },
} as const;

// Novo objeto Layout
const Layout = {
  body: {
    lateralPadding: 24, // Espaço lateral do corpo
    maxWidth: 1200, // Largura máxima do conteúdo
  },
  reading: {
    contentWidth: 800, // Largura ideal para leitura (artigos, notícias)
    lineHeight: 1.6, // Altura da linha para leitura
    paragraphGap: 24, // Espaço entre parágrafos
  },
  ui: {
    headerHeight: 64, // Altura do header
    footerHeight: 96, // Altura do footer
    sidebarWidth: 240, // Largura do sidebar
    modalWidth: 600, // Largura padrão de modais
    dropdownWidth: 200, // Largura padrão de dropdowns
  },
} as const;

// Dividindo em Base e Semantic
const Base = {
  FontSizes: FontSizes.base,
  SpaceGaps: SpaceGaps.base,
  BorderRadius: BorderRadius.base,
  LineHeights: LineHeights.base,
  FontWeights: FontWeights.base,
  PaddingMargin: PaddingMargin.base,
  Sizes: Sizes.base,
  Transitions: Transitions.base,
  ZIndices: ZIndices.base,
} as const;

const Semantic = {
  FontSizes: FontSizes.semantic,
  SpaceGaps: SpaceGaps.semantic,
  BorderRadius: BorderRadius.semantic,
  LineHeights: LineHeights.semantic,
  FontWeights: FontWeights.semantic,
  PaddingMargin: PaddingMargin.semantic,
  Sizes: Sizes.semantic,
  Transitions: Transitions.semantic,
  ZIndices: ZIndices.semantic,
} as const;

// Sistema completo
export const Design = {
  Base,
  Semantic,
  Layout, // Novo objeto Layout
} as const;

// Tipagem para Base, Semantic e Layout
export type Base = typeof Base;
export type Semantic = typeof Semantic;
export type Layout = typeof Layout;

// Tipagem para o sistema completo
export type Design = typeof Design;
