"use client"
import React, { createContext, useContext, useState } from "react";

interface NewsImage {
  url: string;
  alt: string;
}

interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  images: NewsImage[];
}

interface NewsContextType {
  news: News[];
  addNews: (news: Omit<News, "id">) => void;
  getNewsById: (id: number) => News | undefined;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: "Notícia 1",
      description: "Descrição da notícia 1.",
      content: "Conteúdo completo da notícia 1.",
      date: "2023-10-01",
      images: [
        { url: "/images/news1.jpg", alt: "Imagem 1" },
      ],
    },
    {
      id: 2,
      title: "Notícia 2",
      description: "Descrição da notícia 2.",
      content: "Conteúdo completo da notícia 2.",
      date: "2023-10-02",
      images: [
        { url: "/images/news2.jpg", alt: "Imagem 2" },
      ],
    },
  ]);

  const addNews = (newNews: Omit<News, "id">) => {
    setNews((prevNews) => [
      ...prevNews,
      { ...newNews, id: prevNews.length + 1 },
    ]);
  };

  const getNewsById = (id: number) => {
    return news.find((item) => item.id === id);
  };

  return (
    <NewsContext.Provider value={{ news, addNews, getNewsById }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
