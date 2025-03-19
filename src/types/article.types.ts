type Article = {
  id: number;
  title: string;
  img: Image;
  category: string;
  author: string;
  date: string;
  subtitle: string;
  content: ContentBlock[];
};

type ContentBlock =
  | Paragraph
  | Title
  | Subtitle
  | Centered
  | Message
  | Quote
  | Image;

type Paragraph = {
  type: "paragraph";
  text: string;
};

type Title = {
  type: "title";
  text: string;
};

type Subtitle = {
  type: "subtitle";
  text: string;
};

type Centered = {
  type: "centered";
  text: string;
};

type Message = {
  type: "message";
  text: string | string[];
  style: "text" | "info" | "warning" | "error" | "success"; // Estilo da mensagem
};

type Quote = {
  type: "quote";
  text: string;
  author: string; // Autor da citação
};

type Image = {
  type: "image";
  url: string; // URL da imagem
  alt: string; // Texto alternativo para acessibilidade
};
